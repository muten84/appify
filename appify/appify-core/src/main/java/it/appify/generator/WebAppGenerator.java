package it.appify.generator;

import it.appify.annotations.Controller;
import it.appify.annotations.Geolocation;
import it.appify.annotations.ViewHandler;
import it.appify.annotations.WebApp;
import it.appify.api.HasViewHandlers.ViewHandlerHolder;
import it.appify.app.AbstractWebApp;
import it.appify.app.ServiceProvider;
import it.appify.view.VueJsViewModel;
import it.appify.view.WebModelView;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.lang.model.element.Modifier;

import com.github.nmorel.gwtjackson.client.ObjectMapper;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.ext.Generator;
import com.google.gwt.core.ext.GeneratorContext;
import com.google.gwt.core.ext.TreeLogger;
import com.google.gwt.core.ext.UnableToCompleteException;
import com.google.gwt.core.ext.typeinfo.JClassType;
import com.google.gwt.core.ext.typeinfo.JMethod;
import com.google.gwt.core.ext.typeinfo.NotFoundException;
import com.google.gwt.core.ext.typeinfo.TypeOracle;
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
				TypeSpec.Builder webappBuilder = createWebAppClass(className, mainPage, modelClass, superInterface);
				Geolocation geolocation = scanGeolocationService(classType);
				if (geolocation != null) {
					addGeolocationService(webappBuilder, geolocation);
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

	protected TypeSpec.Builder addGeolocationService(TypeSpec.Builder spec, Geolocation annotation) {
		boolean highAccuracy = annotation.enableHighAccuracy();
		int maxAge = annotation.maxAge();
		long timeout = annotation.timeout();

		spec.addMethod(MethodSpec.methodBuilder("getGeolocationService")
				.addModifiers(Modifier.PUBLIC)
				.addAnnotation(Override.class)
				.returns(it.appify.api.Geolocation.class).
				addCode("return $T.createGeoLocationService($L,$L,$L);", ServiceProvider.class, highAccuracy, maxAge, timeout).build());
		return spec;
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

	protected TypeSpec.Builder createWebAppClass(String className, String mainPage, Class<?> modelClass, Class<?> superInterface) throws ClassNotFoundException {
		TypeSpec objectMapperInterface = createObjectMapperInterface("ObjectMapper" + modelClass.getSimpleName(), modelClass);
		TypeSpec.Builder webAppbuilder = TypeSpec.classBuilder(className).addModifiers(Modifier.PUBLIC, Modifier.FINAL).addSuperinterface(superInterface).superclass(ParameterizedTypeName.get(AbstractWebApp.class, modelClass)).addType(objectMapperInterface).addMethod(createDefaultConstructor(mainPage)).addMethod(createSuperClassMethods(modelClass, objectMapperInterface)).addMethod(initializeControllers(typeOracle));
		// .addMethod(main)
		// .build();
		return webAppbuilder;
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
			for (JMethod jMethod : methods) {
				ViewHandler vhAnnotation = jMethod.getAnnotation(ViewHandler.class);
				if (vhAnnotation == null) {
					continue;
				}
				String eventType = vhAnnotation.eventType();
				String viewId = vhAnnotation.viewId();
				TypeSpec innerViewHandler = createViewHandler("controller" + jClassType.getSimpleSourceName(), jMethod.getName());
				initializeControllerBuilder.addStatement("$T holder" + pageId + "_" + viewId + " = this.createViewHandler(\"$L\",\"$L\",\"$L\",$L)", ViewHandlerHolder.class, pageId, viewId, eventType, innerViewHandler);
				initializeControllerBuilder.addStatement("this.bindHandlerToPage(\"$L\", holder" + pageId + "_" + viewId + ")", pageId);
			}
		}
		return initializeControllerBuilder.build();
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
		TypeSpec type = generator.createWebAppClass("MyWebAppImpl", "mainPage", Object.class, Runnable.class).build();
		JavaFile file = generator.buildJavaFile("it.mypackage.example", type);
		file.writeTo(System.out);

	}

}
