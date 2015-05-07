package it.appify.generator;

import it.appify.annotations.Battery;
import it.appify.annotations.Controller;
import it.appify.annotations.Geolocation;
import it.appify.annotations.ScreenOrientation;
import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.annotations.Storage;
import it.appify.annotations.ViewElement;
import it.appify.annotations.ViewHandler;
import it.appify.annotations.ViewModelHandler;
import it.appify.annotations.WebApp;
import it.appify.api.HasViewHandlers.ViewHandlerHolder;
import it.appify.app.AbstractWebApp;
import it.appify.app.ControllerHolder;
import it.appify.app.ServiceProvider;
import it.appify.storage.LocalStorage;
import it.appify.view.VueJsViewModel;
import it.appify.view.WebModelView;

import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

import javax.lang.model.element.Modifier;
import javax.lang.model.element.TypeElement;

import org.apache.commons.lang3.StringUtils;

import com.github.nmorel.gwtjackson.client.ObjectMapper;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.ext.Generator;
import com.google.gwt.core.ext.GeneratorContext;
import com.google.gwt.core.ext.TreeLogger;
import com.google.gwt.core.ext.UnableToCompleteException;
import com.google.gwt.core.ext.typeinfo.JClassType;
import com.google.gwt.core.ext.typeinfo.JField;
import com.google.gwt.core.ext.typeinfo.JMethod;
import com.google.gwt.core.ext.typeinfo.NotFoundException;
import com.google.gwt.core.ext.typeinfo.TypeOracle;
import com.google.gwt.dom.client.Element;
import com.squareup.javapoet.FieldSpec;
import com.squareup.javapoet.JavaFile;
import com.squareup.javapoet.MethodSpec;
import com.squareup.javapoet.MethodSpec.Builder;
import com.squareup.javapoet.ParameterizedTypeName;
import com.squareup.javapoet.TypeSpec;

/**
 * Generate a web app with minimal capabilities
 * 
 * @author Luigi
 *
 */

// TODO: generate viewmodelhandler
public class WebAppGenerator extends Generator {

	private JClassType superInterface;

	private TypeOracle typeOracle;

	@Override
	public String generate(TreeLogger logger, GeneratorContext context, String typeName) throws UnableToCompleteException {
		typeOracle = context.getTypeOracle();
		String className = "";
		String packageName = "";
		try {

			JClassType classType = typeOracle.getType(typeName);
			className = classType.getSimpleSourceName() + "Impl";
			packageName = classType.getPackage().getName();
			Class<?> superInterface = Class.forName(packageName + "." + classType.getSimpleSourceName());
			PrintWriter pw = context.tryCreate(logger, classType.getPackage().getName(), className);
			if (pw != null) {
				WebApp annotatedApp = classType.findAnnotationInTypeHierarchy(WebApp.class);
				if (annotatedApp == null) {
					return null;
				}
				String mainPage = annotatedApp.mainPage();
				Class<?> modelClass = annotatedApp.appStateType();
				TypeSpec objectMapperInterface = createObjectMapperInterface("ObjectMapper" + modelClass.getSimpleName(), modelClass);
				TypeSpec.Builder webappBuilder = createWebAppClass(className, mainPage, modelClass, superInterface, objectMapperInterface);
				Geolocation geolocation = scanGeolocationService(classType);
				if (geolocation != null) {
					webappBuilder = addGeolocationService(webappBuilder, geolocation);
				}
				Battery battery = scanBatteryService(classType);
				if (battery != null) {
					webappBuilder = addBatteryService(webappBuilder, battery);
				}
				Storage storage = scanStorageService(classType);
				if (storage != null) {
					webappBuilder = addStorageService(webappBuilder, storage, objectMapperInterface);
				}
				ScreenOrientation screenOrientation = scanScreenOrientation(classType);
				if (screenOrientation != null) {
					webappBuilder = addScreenOrientationService(webappBuilder, screenOrientation);
				}
				TypeSpec webapp = webappBuilder.build();
				JavaFile file = buildJavaFile(packageName, webapp);
				file.writeTo(pw);
				context.commit(logger, pw);
			}
		} catch (NotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return packageName + "." + className;
	}

	protected TypeSpec.Builder addStorageService(TypeSpec.Builder spec, Storage annotation, TypeSpec objectMapperInterface) {
		String storageType = annotation.type();
		Class<?> storageModelType = annotation.modelType();
		if (storageType.equals(it.appify.api.Storage.LOCAL_STORAGE)) {
			TypeSpec storage = TypeSpec.anonymousClassBuilder("").superclass(LocalStorage.class).addField(FieldSpec.builder(ParameterizedTypeName.get(ObjectMapper.class, storageModelType), "mapper", Modifier.PRIVATE).build())

			.addMethod(MethodSpec.methodBuilder("getObjectMapper").addModifiers(Modifier.PROTECTED).returns(ParameterizedTypeName.get(ObjectMapper.class, storageModelType)).addAnnotation(Override.class).addStatement("if(mapper==null){mapper = $T.create($N.class);}return mapper", GWT.class, objectMapperInterface.name).build()).build();

			spec.addMethod(MethodSpec.methodBuilder("getStorageService").addModifiers(Modifier.PUBLIC).returns(it.appify.api.Storage.class).addCode("return $L;", storage).build());
			return spec;

		}
		return null;
	}

	protected ScreenOrientation scanScreenOrientation(JClassType classType) {
		ScreenOrientation annotation = classType.findAnnotationInTypeHierarchy(ScreenOrientation.class);
		if (annotation != null) {
			return annotation;
		}
		return null;
	}

	protected Storage scanStorageService(JClassType classType) {
		Storage annotation = classType.findAnnotationInTypeHierarchy(Storage.class);

		if (annotation != null) {
			return annotation;
		}
		return null;
	}

	protected TypeSpec.Builder addGeolocationService(TypeSpec.Builder spec, Geolocation annotation) {
		boolean highAccuracy = annotation.enableHighAccuracy();
		int maxAge = annotation.maxAge();
		long timeout = annotation.timeout();
		int type = annotation.type();

		MethodSpec.Builder methodBuilder = MethodSpec.methodBuilder("getGeolocationService").addModifiers(Modifier.PUBLIC).addAnnotation(Override.class).returns(it.appify.api.Geolocation.class);

		switch (type) {
		case Geolocation.HTML5:
			methodBuilder.addCode("return $T.createGeoLocationService($L,$L,$L);", ServiceProvider.class, highAccuracy, maxAge, timeout);
			break;
		case Geolocation.WS_PROVIDED:
			methodBuilder.addCode("return $T.createWsGeolocation();", ServiceProvider.class);
		default:
			break;
		}
		spec.addMethod(methodBuilder.build());
		return spec;
	}

	protected TypeSpec.Builder addScreenOrientationService(TypeSpec.Builder spec, ScreenOrientation annotation) {

		spec.addMethod(MethodSpec.methodBuilder("getScreenOrientationService").addModifiers(Modifier.PUBLIC).addAnnotation(Override.class).returns(it.appify.screenorientation.WebScreenOrientation.class).addCode("return $T.createWebScreenOrientation();", ServiceProvider.class).build());
		return spec;
	}

	protected TypeSpec.Builder addBatteryService(TypeSpec.Builder spec, Battery annotation) {

		spec.addMethod(MethodSpec.methodBuilder("getBatteryService").addModifiers(Modifier.PUBLIC).addAnnotation(Override.class).returns(it.appify.api.Battery.class).addCode("return $T.createBatteryService();", ServiceProvider.class).build());
		return spec;
	}

	protected Battery scanBatteryService(JClassType classType) {
		Battery annoatation = classType.findAnnotationInTypeHierarchy(Battery.class);
		if (annoatation != null) {
			return annoatation;
		}
		return null;

	}

	protected Geolocation scanGeolocationService(JClassType classType) {
		Geolocation geolocationAnnotation = classType.findAnnotationInTypeHierarchy(Geolocation.class);
		if (geolocationAnnotation != null) {
			return geolocationAnnotation;
		}
		return null;

	}

	/*
	 * utility method
	 */
	protected JavaFile buildJavaFile(String packageName, TypeSpec type) {
		JavaFile javaFile = JavaFile.builder(packageName, type).build();
		return javaFile;
	}

	protected TypeSpec.Builder createWebAppClass(String className, String mainPage, Class<?> modelClass, Class<?> superInterface, TypeSpec objectMapperInterface) throws ClassNotFoundException {

		TypeSpec.Builder webAppbuilder = TypeSpec.classBuilder(className).addModifiers(Modifier.PUBLIC, Modifier.FINAL).addSuperinterface(superInterface).superclass(ParameterizedTypeName.get(AbstractWebApp.class, modelClass)).addType(objectMapperInterface).addMethod(createDefaultConstructor(mainPage)).addMethod(createSuperClassMethods(modelClass, objectMapperInterface)).addMethod(initializeControllers(typeOracle)).addMethod(initializeServices(typeOracle));

		// .addMethod(main)
		// .build();
		return webAppbuilder;
	}

	protected MethodSpec initializeServices(TypeOracle typeOracle) {
		Builder initializeServiceBuilder = MethodSpec.methodBuilder("initializeServices").addModifiers(Modifier.PUBLIC, Modifier.FINAL).addAnnotation(Override.class);
		JClassType[] types = typeOracle.getTypes();
		for (JClassType jClassType : types) {
			Service serviceAnnotation = jClassType.findAnnotationInTypeHierarchy(Service.class);
			if (serviceAnnotation == null) {
				continue;
			}
			try {
				Class<?> serviceClass = Class.forName(jClassType.getPackage().getName() + "." + jClassType.getSimpleSourceName());
				initializeServiceBuilder.addStatement("final $T service" + jClassType.getSimpleSourceName() + " = new $T(this)", serviceClass, serviceClass);
				JMethod[] methods = jClassType.getMethods();
				for (JMethod jMethod : methods) {
					Start startAnnotation = jMethod.getAnnotation(Start.class);
					if (startAnnotation == null) {
						continue;
					}
					TypeSpec serviceHandler = createServiceStartHandler("service" + jClassType.getSimpleSourceName(), jMethod.getName());
					initializeServiceBuilder.addStatement("bindService($L)", serviceHandler);
				}
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
		return initializeServiceBuilder.build();
	}

	/*
	 * generate the initialize controllers method
	 */
	protected MethodSpec initializeControllers(TypeOracle typeOracle) throws ClassNotFoundException {
		Builder initializeControllerBuilder = MethodSpec.methodBuilder("initializeControllers").addModifiers(Modifier.PUBLIC, Modifier.FINAL).addAnnotation(Override.class);

		JClassType[] types = typeOracle.getTypes();
		List<MethodSpec> handlers = new ArrayList<MethodSpec>();
		for (JClassType jClassType : types) {
			Controller controllerAnnotation = jClassType.findAnnotationInTypeHierarchy(Controller.class);
			if (controllerAnnotation == null) {
				continue;
			}
			String pageId = controllerAnnotation.page();
			Class<?> controllerClass = Class.forName(jClassType.getPackage().getName() + "." + jClassType.getSimpleSourceName());
			initializeControllerBuilder.addStatement("final $T controller" + jClassType.getSimpleSourceName() + " = new $T(this)", controllerClass, controllerClass);

			JMethod[] methods = jClassType.getMethods();
			// scan fields
			JField[] fields = jClassType.getFields();
			for (JField jField : fields) {
				ViewElement el = jField.getAnnotation(ViewElement.class);

				if (jField.isPublic()) {
					if (el != null) {
						String elId = el.value();
						// collect all elements to inject in the controller
						initializeControllerBuilder.addStatement("this.bindElementToPage($S,$S)", pageId, elId);
						TypeSpec innerControllerHandler = createControllerHolder(controllerClass, pageId, elId, jField.getName(), "controller" + jClassType.getSimpleSourceName(), false);
						initializeControllerBuilder.addStatement("this.bindControllerToPage($S,$L)", pageId, innerControllerHandler);
					}
				} else if (jField.isPrivate() || jField.isProtected()) {
					if (el != null) {
						String elId = el.value();
						// collect all elements to inject in the controller
						initializeControllerBuilder.addStatement("this.bindElementToPage($S,$S)", pageId, elId);
						TypeSpec innerControllerHandler = createControllerHolder(controllerClass, pageId, elId, jField.getName(), "controller" + jClassType.getSimpleSourceName(), true);
						initializeControllerBuilder.addStatement("this.bindControllerToPage($S,$L)", pageId, innerControllerHandler);
					}
				}
			}
			// scan handlers
			for (JMethod jMethod : methods) {
				ViewHandler vhAnnotation = jMethod.getAnnotation(ViewHandler.class);
				ViewModelHandler vhModelAnnotation = jMethod.getAnnotation(ViewModelHandler.class);

				if (vhAnnotation == null && vhModelAnnotation == null) {
					continue;
				}
				if (vhAnnotation != null) {
					//initialize the view handler to be invoked when an event occurs
					String eventType = vhAnnotation.eventType();
					String viewId = vhAnnotation.viewId();
					TypeSpec innerViewHandler = createViewHandler("controller" + jClassType.getSimpleSourceName(), jMethod.getName());
					initializeControllerBuilder.addStatement("$T holder" + pageId + "_" + viewId + " = this.createViewHandler(\"$L\",\"$L\",\"$L\",$L)", ViewHandlerHolder.class, pageId, viewId, eventType, innerViewHandler);
					initializeControllerBuilder.addStatement("this.bindHandlerToPage(\"$L\", holder" + pageId + "_" + viewId + ")", pageId);
				}
				else if(vhModelAnnotation!=null) {
					//initialize the view model handler to be invoked when an event on model occurs
					Class<?> modelType = vhModelAnnotation.modelType();
					String viewId = vhModelAnnotation.viewId();
				}
			}
		}
		return initializeControllerBuilder.build();
	}
	
	private TypeSpec createViewModelHandler() {
		//TypeSpec.Builder vmHandlerBuilder =  TypeSpec.anonymousClassBuilder("")
		//TODO: generate view model handler
		return null;
		
				
	}

	private TypeSpec createServiceStartHandler(String serviceRef, String methodName) {
		TypeSpec serviceHandler = TypeSpec.anonymousClassBuilder("").addSuperinterface(it.appify.api.Service.class).addMethod(MethodSpec.methodBuilder("start").addModifiers(Modifier.PUBLIC)
		// .returns(Void.class)
		.addStatement(serviceRef + "." + methodName + "()").build()).build();
		return serviceHandler;
	}

	private TypeSpec createControllerHolder(Class<?> controllerClass, String pageId, String viewId, String fieldName, String controller, boolean useSetter) {

		MethodSpec.Builder injectViewElementsBuilder = MethodSpec.methodBuilder("injectViewElements").addAnnotation(Override.class).addModifiers(Modifier.PUBLIC);
		// .addParameter(controllerClass, "controller", Modifier.FINAL);

		if (!useSetter) {
			injectViewElementsBuilder.addStatement("this.controller.$L = ($T) getViewFragment($S)", fieldName, Element.class, viewId);
		} else {
			injectViewElementsBuilder.addStatement("this.controller.set$L(($T)getViewFragment($S))", StringUtils.capitalize(fieldName), Element.class, viewId);
		}

		TypeSpec.Builder controllerHolderBuilder = TypeSpec.anonymousClassBuilder("$S,$S,$S,$L", pageId, viewId, fieldName, controller).superclass(ParameterizedTypeName.get(ControllerHolder.class, controllerClass)).addMethod(injectViewElementsBuilder.build());
		TypeSpec controllerHolderSpec = controllerHolderBuilder.build();
		return controllerHolderSpec;

	}

	/*
	 * generate the create view handler method
	 */
	private TypeSpec createViewHandler(String controllerRef, String methodName) {
		TypeSpec viewHandler = TypeSpec.anonymousClassBuilder("").superclass(it.appify.api.HasViewHandlers.ViewHandler.class).addMethod(MethodSpec.methodBuilder("onEvent").addModifiers(Modifier.PUBLIC).addParameter(String.class, "type").addParameter(String.class, "source").addStatement(controllerRef + "." + methodName + "()").build()).build();
		return viewHandler;
	}

	protected MethodSpec createSuperClassMethods(Class<?> modelClass, TypeSpec objectMapperInterface) {
		return MethodSpec.methodBuilder("getAppStateModelView").addModifiers(Modifier.PUBLIC, Modifier.FINAL).addAnnotation(Override.class).returns(ParameterizedTypeName.get(WebModelView.class, modelClass)).addStatement("return $L", createViewModelClass(modelClass, objectMapperInterface)).build();
	}

	private TypeSpec createViewModelClass(Class<?> modelClass, TypeSpec objectMapperInterface) {

		TypeSpec viewModel = TypeSpec.anonymousClassBuilder("").superclass(ParameterizedTypeName.get(VueJsViewModel.class, modelClass)).addField(FieldSpec.builder(ParameterizedTypeName.get(ObjectMapper.class, modelClass), "mapper", Modifier.PRIVATE).build())

		.addMethod(MethodSpec.methodBuilder("getObjectMapper").addModifiers(Modifier.PROTECTED).returns(ParameterizedTypeName.get(ObjectMapper.class, modelClass)).addAnnotation(Override.class).addStatement("if(mapper==null){mapper = $T.create($N.class);}return mapper", GWT.class, objectMapperInterface.name).build()).build();
		return viewModel;

	}

	private TypeSpec createObjectMapperInterface(String interfaceName, Class<?> modelClass) {
		TypeSpec interfaceMapper = TypeSpec.interfaceBuilder(interfaceName).addModifiers(Modifier.PUBLIC, Modifier.STATIC).addSuperinterface(ParameterizedTypeName.get(ObjectMapper.class, modelClass)).build();
		return interfaceMapper;
	}

	private MethodSpec createDefaultConstructor(String param) {
		return MethodSpec.constructorBuilder().addStatement("super(\"$N\")", param)

		.build();

	}

	public static void main(String[] args) throws IOException, ClassNotFoundException {
		WebAppGenerator generator = new WebAppGenerator();
		TypeSpec type = generator.createWebAppClass("MyWebAppImpl", "mainPage", Object.class, Runnable.class, null).build();
		JavaFile file = generator.buildJavaFile("it.mypackage.example", type);
		file.writeTo(System.out);

	}

}
