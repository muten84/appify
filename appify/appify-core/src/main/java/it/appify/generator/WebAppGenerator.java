/*
 * Appify - a tiny frontend framework to build complex mobile apps.
 * 
 * Copyright (C) 2015 Luigi Bifulco Appify is free software: you can
 * redistribute it and/or modify it under the terms of the GNU General Public
 * License as published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */
package it.appify.generator;

import it.appify.annotations.Battery;
import it.appify.annotations.Controller;
import it.appify.annotations.Geolocation;
import it.appify.annotations.Offline;
import it.appify.annotations.OnPageReady;
import it.appify.annotations.ScreenOrientation;
import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.annotations.Storage;
import it.appify.annotations.ViewElement;
import it.appify.annotations.ViewHandler;
import it.appify.annotations.ViewModelHandler;
import it.appify.annotations.WebApp;
import it.appify.api.ApplicationCache;
import it.appify.api.HasViewHandlers.ViewHandlerHolder;
import it.appify.app.AbstractWebApp;
import it.appify.app.ControllerHolder;
import it.appify.app.ServiceProvider;
import it.appify.storage.LocalStorage;
import it.appify.view.ViewModelHandlerHolder;
import it.appify.view.VueJsViewModel;
import it.appify.view.WebModelView;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.lang.model.element.Modifier;

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

public class WebAppGenerator extends Generator {

    private JClassType superInterface;

    private TypeOracle typeOracle;

    private Map<Class<?>, TypeSpec> objectMappersInterfaces;

    private Map<String, TypeSpec.Builder> controllerHolderSpecs;

    private Map<String, MethodSpec.Builder> initializeControllerBuilders;

    public WebAppGenerator() {
	this.objectMappersInterfaces = new HashMap<Class<?>, TypeSpec>();
	controllerHolderSpecs = new HashMap<String, TypeSpec.Builder>();
	initializeControllerBuilders = new HashMap<String, MethodSpec.Builder>();
    }

    @Override
    public String generate(TreeLogger logger, GeneratorContext context,
	    String typeName) throws UnableToCompleteException {
	typeOracle = context.getTypeOracle();
	String className = "";
	String packageName = "";
	try {

	    JClassType classType = typeOracle.getType(typeName);
	    className = classType.getSimpleSourceName() + "Impl";
	    packageName = classType.getPackage().getName();
	    Class<?> superInterface = Class.forName(packageName + "."
		    + classType.getSimpleSourceName());
	    PrintWriter pw = context.tryCreate(logger, classType.getPackage()
		    .getName(), className);
	    if (pw != null) {
		WebApp annotatedApp = classType
			.findAnnotationInTypeHierarchy(WebApp.class);
		if (annotatedApp == null) {
		    return null;
		}
		// String container = annotatedApp.container();
		String mainPage = annotatedApp.mainPage();
		Class<?> modelClass = annotatedApp.appStateType();

		TypeSpec objectMapperInterface = createObjectMapperInterface(
			"ObjectMapper" + modelClass.getSimpleName(), modelClass);
		TypeSpec.Builder webappBuilder = createWebAppClass(className,
			mainPage, modelClass, superInterface,
			objectMapperInterface);
		Geolocation geolocation = scanGeolocationService(classType);
		if (geolocation != null) {
		    webappBuilder = addGeolocationService(webappBuilder,
			    geolocation);
		}
		Battery battery = scanBatteryService(classType);
		if (battery != null) {
		    webappBuilder = addBatteryService(webappBuilder, battery);
		}
		Storage storage = scanStorageService(classType);
		if (storage != null) {
		    webappBuilder = addStorageService(webappBuilder, storage,
			    objectMapperInterface);
		}
		ScreenOrientation screenOrientation = scanScreenOrientation(classType);
		if (screenOrientation != null) {
		    webappBuilder = addScreenOrientationService(webappBuilder,
			    screenOrientation);
		}
		Offline offline = scanOfflineService(classType);
		if (offline != null) {
		    webappBuilder = addOfflineApplicationCacheService(
			    webappBuilder, offline);
		}
		webappBuilder = overrideStoreCurrentAppState(webappBuilder,
			modelClass);
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

    protected TypeSpec.Builder overrideStoreCurrentAppState(
	    TypeSpec.Builder webappBuilder, Class<?> webAppModel) {
	return webappBuilder.addMethod(MethodSpec
		.methodBuilder("storeCurrentAppState")
		.addAnnotation(Override.class)
		.addModifiers(Modifier.PROTECTED)
		.addCode(
			"if(getStorageService()!=null){"
				+ "$T model = ($T) getCurrentAppState();"
				+ "getStorageService().store($S,model);" + "}",
			webAppModel, webAppModel, webAppModel.toString())
		.build());
    }

    protected TypeSpec.Builder addStorageService(TypeSpec.Builder spec,
	    Storage annotation, TypeSpec objectMapperInterface) {
	String storageType = annotation.type();
	Class<?> storageModelType = annotation.modelType();
	if (storageType.equals(it.appify.api.Storage.LOCAL_STORAGE)) {
	    TypeSpec storage = TypeSpec
		    .anonymousClassBuilder("")
		    .superclass(LocalStorage.class)
		    .addField(
			    FieldSpec.builder(
				    ParameterizedTypeName.get(
					    ObjectMapper.class,
					    storageModelType), "mapper",
				    Modifier.PRIVATE).build())

		    .addMethod(
			    MethodSpec
				    .methodBuilder("getObjectMapper")
				    .addModifiers(Modifier.PROTECTED)
				    .returns(
					    ParameterizedTypeName.get(
						    ObjectMapper.class,
						    storageModelType))
				    .addAnnotation(Override.class)
				    .addStatement(
					    "if(mapper==null){mapper = $T.create($N.class);}return mapper",
					    GWT.class,
					    objectMapperInterface.name).build())
		    .build();

	    spec.addMethod(MethodSpec.methodBuilder("getStorageService")
		    .addModifiers(Modifier.PUBLIC)
		    .returns(it.appify.api.Storage.class)
		    .addCode("return $L;", storage).build());
	    return spec;

	}
	return null;
    }

    protected Offline scanOfflineService(JClassType classType) {
	Offline annotation = classType
		.findAnnotationInTypeHierarchy(Offline.class);
	if (annotation != null) {
	    return annotation;
	}
	return null;
    }

    protected ScreenOrientation scanScreenOrientation(JClassType classType) {
	ScreenOrientation annotation = classType
		.findAnnotationInTypeHierarchy(ScreenOrientation.class);
	if (annotation != null) {
	    return annotation;
	}
	return null;
    }

    protected Storage scanStorageService(JClassType classType) {
	Storage annotation = classType
		.findAnnotationInTypeHierarchy(Storage.class);

	if (annotation != null) {
	    return annotation;
	}
	return null;
    }

    protected TypeSpec.Builder addGeolocationService(TypeSpec.Builder spec,
	    Geolocation annotation) {
	boolean highAccuracy = annotation.enableHighAccuracy();
	int maxAge = annotation.maxAge();
	long timeout = annotation.timeout();
	int type = annotation.type();

	MethodSpec.Builder methodBuilder = MethodSpec
		.methodBuilder("getGeolocationService")
		.addModifiers(Modifier.PUBLIC).addAnnotation(Override.class)
		.returns(it.appify.api.Geolocation.class);

	switch (type) {
	case Geolocation.HTML5:
	    methodBuilder.addCode(
		    "return $T.createGeoLocationService($L,$L,$L);",
		    ServiceProvider.class, highAccuracy, maxAge, timeout);
	    break;
	case Geolocation.WS_PROVIDED:
	    methodBuilder.addCode("return $T.createWsGeolocation();",
		    ServiceProvider.class);
	default:
	    break;
	}
	spec.addMethod(methodBuilder.build());
	return spec;
    }

    protected TypeSpec.Builder addOfflineApplicationCacheService(
	    TypeSpec.Builder spec, Offline annotation) {

	spec.addMethod(MethodSpec
		.methodBuilder("getApplicationCacheService")
		.addModifiers(Modifier.PUBLIC)
		.addAnnotation(Override.class)
		.returns(ApplicationCache.class)
		.addCode("return $T.createApplicationCache();",
			ServiceProvider.class).build());
	return spec;
    }

    protected TypeSpec.Builder addScreenOrientationService(
	    TypeSpec.Builder spec, ScreenOrientation annotation) {

	spec.addMethod(MethodSpec
		.methodBuilder("getScreenOrientationService")
		.addModifiers(Modifier.PUBLIC)
		.addAnnotation(Override.class)
		.returns(it.appify.screenorientation.WebScreenOrientation.class)
		.addCode("return $T.createWebScreenOrientation();",
			ServiceProvider.class).build());
	return spec;
    }

    protected TypeSpec.Builder addBatteryService(TypeSpec.Builder spec,
	    Battery annotation) {

	spec.addMethod(MethodSpec
		.methodBuilder("getBatteryService")
		.addModifiers(Modifier.PUBLIC)
		.addAnnotation(Override.class)
		.returns(it.appify.api.Battery.class)
		.addCode("return $T.createBatteryService();",
			ServiceProvider.class).build());
	return spec;
    }

    protected Battery scanBatteryService(JClassType classType) {
	Battery annoatation = classType
		.findAnnotationInTypeHierarchy(Battery.class);
	if (annoatation != null) {
	    return annoatation;
	}
	return null;

    }

    protected Geolocation scanGeolocationService(JClassType classType) {
	Geolocation geolocationAnnotation = classType
		.findAnnotationInTypeHierarchy(Geolocation.class);
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

    protected TypeSpec.Builder createWebAppClass(String className,
	    String mainPage, Class<?> modelClass, Class<?> superInterface,
	    TypeSpec objectMapperInterface) throws ClassNotFoundException {

	TypeSpec.Builder webAppbuilder = TypeSpec
		.classBuilder(className)
		.addModifiers(Modifier.PUBLIC, Modifier.FINAL)
		.addSuperinterface(superInterface)
		.superclass(
			ParameterizedTypeName.get(AbstractWebApp.class,
				modelClass))
		.addType(objectMapperInterface)
		.addMethod(createDefaultConstructor(mainPage))
		// .addMethod(createScanDynamicContent(container))
		.addMethod(
			createSuperClassMethods(modelClass,
				objectMapperInterface))
		.addMethod(initializeControllers(typeOracle))
		.addMethod(initializeServices(typeOracle));

	Collection<TypeSpec> types = objectMappersInterfaces.values();
	for (TypeSpec typeSpec : types) {
	    webAppbuilder.addType(typeSpec);
	}

	// .addMethod(main)
	// .build();
	return webAppbuilder;
    }

    // private MethodSpec createScanDynamicContent(String container) {
    // // TODO Auto-generated method stub
    // return null;
    // }

    protected MethodSpec initializeServices(TypeOracle typeOracle) {
	Builder initializeServiceBuilder = MethodSpec
		.methodBuilder("initializeServices")
		.addModifiers(Modifier.PUBLIC, Modifier.FINAL)
		.addAnnotation(Override.class);
	JClassType[] types = typeOracle.getTypes();
	for (JClassType jClassType : types) {
	    Service serviceAnnotation = jClassType
		    .findAnnotationInTypeHierarchy(Service.class);
	    if (serviceAnnotation == null) {
		continue;
	    }
	    try {
		Class<?> serviceClass = Class.forName(jClassType.getPackage()
			.getName() + "." + jClassType.getSimpleSourceName());
		initializeServiceBuilder.addStatement("final $T service"
			+ jClassType.getSimpleSourceName() + " = new $T(this)",
			serviceClass, serviceClass);
		JMethod[] methods = jClassType.getMethods();
		for (JMethod jMethod : methods) {
		    Start startAnnotation = jMethod.getAnnotation(Start.class);
		    if (startAnnotation == null) {
			continue;
		    }
		    TypeSpec serviceHandler = createServiceStartHandler(
			    "service" + jClassType.getSimpleSourceName(),
			    jMethod.getName());
		    initializeServiceBuilder.addStatement("bindService($L)",
			    serviceHandler);
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
    protected MethodSpec initializeControllers(TypeOracle typeOracle)
	    throws ClassNotFoundException {
	Builder initializeControllerBuilder = MethodSpec
		.methodBuilder("initializeControllers")
		.addModifiers(Modifier.PUBLIC, Modifier.FINAL)
		.addAnnotation(Override.class);

	JClassType[] types = typeOracle.getTypes();
	List<MethodSpec> handlers = new ArrayList<MethodSpec>();
	for (JClassType jClassType : types) {
	    Controller controllerAnnotation = jClassType
		    .findAnnotationInTypeHierarchy(Controller.class);
	    if (controllerAnnotation == null) {
		continue;
	    }
	    String pageId = controllerAnnotation.page();
	    Class<?> controllerClass = Class.forName(jClassType.getPackage()
		    .getName() + "." + jClassType.getSimpleSourceName());
	    initializeControllerBuilder.addStatement("final $T controller"
		    + jClassType.getSimpleSourceName() + " = new $T(this)",
		    controllerClass, controllerClass);

	    JMethod[] methods = jClassType.getMethods();
	    // scan fields
	    JField[] fields = jClassType.getFields();
	    for (JField jField : fields) {
		ViewElement el = jField.getAnnotation(ViewElement.class);

		if (jField.isPublic()) {
		    if (el != null) {
			String elId = el.value();
			// collect all elements to inject in the controller
			initializeControllerBuilder.addStatement(
				"this.bindElementToPage($S,$S)", pageId, elId);
			TypeSpec.Builder innerControllerBuilder = createControllerHolderBuilder(
				controllerClass,
				pageId,
				elId,
				jField.getName(),
				"controller" + jClassType.getSimpleSourceName(),
				false);
			controllerHolderSpecs
				.put("controller"
					+ jClassType.getSimpleSourceName()
					+ "##" + pageId, innerControllerBuilder);
			initializeControllerBuilders.put("controller"
				+ jClassType.getSimpleSourceName(),
				initializeControllerBuilder);
			// initializeControllerBuilder.addStatement(
			// "this.bindControllerToPage($S,$L)", pageId,
			// innerControllerHandler);
		    }
		} else if (jField.isPrivate() || jField.isProtected()) {
		    if (el != null) {
			String elId = el.value();
			// collect all elements to inject in the controller
			initializeControllerBuilder.addStatement(
				"this.bindElementToPage($S,$S)", pageId, elId);
			TypeSpec.Builder innerControllerBuilder = createControllerHolderBuilder(
				controllerClass,
				pageId,
				elId,
				jField.getName(),
				"controller" + jClassType.getSimpleSourceName(),
				true);
			controllerHolderSpecs
				.put("controller"
					+ jClassType.getSimpleSourceName()
					+ "##" + pageId, innerControllerBuilder);
			initializeControllerBuilders.put("controller"
				+ jClassType.getSimpleSourceName(),
				initializeControllerBuilder);
			// initializeControllerBuilder.addStatement(
			// "this.bindControllerToPage($S,$L)", pageId,
			// innerControllerHandler);
		    }
		}
	    }

	    TypeSpec.Builder chb = controllerHolderSpecs.get("controller"
		    + jClassType.getSimpleSourceName() + "##" + pageId);
	    if (chb != null) {
		chb = addInjectViewElementsMethod(fields, chb);
		controllerHolderSpecs.put(
			"controller" + jClassType.getSimpleSourceName() + "##"
				+ pageId, chb);
	    }

	    // scan handlers
	    boolean pageReadyAdd = false;
	    for (JMethod jMethod : methods) {
		ViewHandler vhAnnotation = jMethod
			.getAnnotation(ViewHandler.class);
		ViewModelHandler vhModelAnnotation = jMethod
			.getAnnotation(ViewModelHandler.class);
		OnPageReady onPageReady = jMethod
			.getAnnotation(OnPageReady.class);

		// if (vhAnnotation == null && vhModelAnnotation == null) {
		// continue;
		// }
		if (vhAnnotation != null) {
		    // initialize the view handler to be invoked when an event
		    // occurs
		    String eventType = vhAnnotation.eventType();
		    String viewId = vhAnnotation.viewId();
		    TypeSpec innerViewHandler = createViewHandler("controller"
			    + jClassType.getSimpleSourceName(),
			    jMethod.getName());
		    initializeControllerBuilder
			    .addStatement(
				    "$T holder"
					    + pageId
					    + "_"
					    + viewId
					    + " = this.createViewHandler(\"$L\",\"$L\",\"$L\",$L)",
				    ViewHandlerHolder.class, pageId, viewId,
				    eventType, innerViewHandler);
		    initializeControllerBuilder.addStatement(
			    "this.bindHandlerToPage(\"$L\", holder" + pageId
				    + "_" + viewId + ")", pageId);
		}
		if (onPageReady != null) {
		    if (!pageReadyAdd) {
			TypeSpec.Builder controllerHolderBuilder = controllerHolderSpecs
				.get("controller"
					+ jClassType.getSimpleSourceName()
					+ "##" + pageId);
			controllerHolderBuilder = callPageReadyMethod(
				controllerHolderBuilder, jMethod.getName());
			controllerHolderSpecs.put(
				"controller" + jClassType.getSimpleSourceName()
					+ "##" + pageId,
				controllerHolderBuilder);
			pageReadyAdd = true;
		    }

		} else {
		    // TypeSpec.Builder controllerHolderBuilder =
		    // controllerHolderSpecs
		    // .get("controller"
		    // + jClassType.getSimpleSourceName() + "##"
		    // + pageId);
		    // if (controllerHolderBuilder != null) {
		    // controllerHolderBuilder = callPageReadyMethod(
		    // controllerHolderBuilder, "");
		    // controllerHolderSpecs.put(
		    // "controller" + jClassType.getSimpleSourceName()
		    // + "##" + pageId,
		    // controllerHolderBuilder);
		    // }
		}
		if (vhModelAnnotation != null) {
		    // initialize the view model handler to be invoked when an
		    // event on model occurs
		    Class<?> modelType = vhModelAnnotation.modelType();
		    String viewId = vhModelAnnotation.viewId();
		    if (objectMappersInterfaces.get(modelType) == null) {
			TypeSpec objectMapperInterface = createObjectMapperInterface(
				"ObjectMapper" + modelType.getSimpleName(),
				modelType);
			objectMappersInterfaces.put(modelType,
				objectMapperInterface);
		    }
		    TypeSpec vmHandler = createViewModelHandler(jMethod,
			    modelType,
			    "controller" + jClassType.getSimpleSourceName());
		    TypeSpec vmh = createViewHandlerHolder(modelType, vmHandler);
		    initializeControllerBuilder.addStatement(
			    "this.modelView.addViewModelHandler($S,$S,$L)",
			    pageId, viewId, vmh);

		}

	    }
	    if (!pageReadyAdd) {
		TypeSpec.Builder controllerHolderBuilder = controllerHolderSpecs
			.get("controller" + jClassType.getSimpleSourceName()
				+ "##" + pageId);
		if (controllerHolderBuilder != null) {

		    controllerHolderBuilder = callPageReadyMethod(
			    controllerHolderBuilder, "");
		    controllerHolderSpecs.put(
			    "controller" + jClassType.getSimpleSourceName()
				    + "##" + pageId, controllerHolderBuilder);
		}
	    }

	}
	Set<String> keys = controllerHolderSpecs.keySet();

	for (String s : keys) {
	    String[] splitted = s.split("##");
	    TypeSpec.Builder controllerHolderBuilder = controllerHolderSpecs
		    .get(s);
	    if (controllerHolderBuilder != null) {
		initializeControllerBuilder.addStatement(
			"this.bindControllerToPage($S,$L)", splitted[1],
			controllerHolderBuilder.build());
	    }
	}

	return initializeControllerBuilder.build();
    }

    private TypeSpec createViewModelHandler(JMethod method, Class<?> modelType,
	    String controllerRef) {
	return TypeSpec
		.anonymousClassBuilder("")
		.addSuperinterface(
			ParameterizedTypeName.get(
				it.appify.api.HasModel.ViewModelHandler.class,
				modelType))
		.addMethod(
			MethodSpec
				.methodBuilder("onEvent")
				.addModifiers(Modifier.PUBLIC)
				.addAnnotation(Override.class)
				.addParameter(String.class, "eventType")
				.addParameter(String.class, "pageId")
				.addParameter(String.class, "sourceElementId")
				.addParameter(modelType, "model")
				.addStatement(
					controllerRef + "." + method.getName()
						+ "(model)").build()).build();
    }

    private TypeSpec createViewHandlerHolder(Class<?> modelType,
	    TypeSpec vmHandler) {
	TypeSpec omi = objectMappersInterfaces.get(modelType);
	TypeSpec.Builder vmHandlerBuilder = TypeSpec
		.anonymousClassBuilder("$L", vmHandler)
		.superclass(
			ParameterizedTypeName.get(ViewModelHandlerHolder.class,
				modelType))

		.addField(
			FieldSpec.builder(
				ParameterizedTypeName.get(ObjectMapper.class,
					modelType), "mapper", Modifier.PRIVATE)
				.build())
		.addMethod(
			MethodSpec
				.methodBuilder("getObjectMapper")
				.addModifiers(Modifier.PROTECTED)
				.returns(
					ParameterizedTypeName.get(
						ObjectMapper.class, modelType))
				.addAnnotation(Override.class)
				.addStatement(
					"if(mapper==null){mapper = $T.create($N.class);}return mapper",
					GWT.class, omi.name).build());

	// TODO: generate view model handler
	return vmHandlerBuilder.build();

    }

    private TypeSpec createServiceStartHandler(String serviceRef,
	    String methodName) {
	TypeSpec serviceHandler = TypeSpec
		.anonymousClassBuilder("")
		.addSuperinterface(it.appify.api.Service.class)
		.addMethod(
			MethodSpec
				.methodBuilder("start")
				.addModifiers(Modifier.PUBLIC)
				// .returns(Void.class)
				.addStatement(
					serviceRef + "." + methodName + "()")
				.build()).build();
	return serviceHandler;
    }

    private TypeSpec.Builder callPageReadyMethod(
	    TypeSpec.Builder controllerHolderSpec, String pageReadyHandlerMethod) {
	MethodSpec.Builder callPageReadyMethodBuilder = MethodSpec
		.methodBuilder("callPageReadyHandler")
		.addAnnotation(Override.class).addModifiers(Modifier.PUBLIC);
	if (pageReadyHandlerMethod != null
		&& pageReadyHandlerMethod.length() > 0) {
	    callPageReadyMethodBuilder.addStatement("this.controller.$L()",
		    pageReadyHandlerMethod);
	}
	controllerHolderSpec.addMethod(callPageReadyMethodBuilder.build());
	return controllerHolderSpec;
    }

    private TypeSpec createControllerHolder(
	    TypeSpec.Builder controllerHolderBuilder) {
	TypeSpec controllerHolderSpec = controllerHolderBuilder.build();
	return controllerHolderSpec;
    }

    private TypeSpec.Builder addInjectViewElementsMethod(JField[] jFields,
	    TypeSpec.Builder controllerHolderSpec) {
	MethodSpec.Builder injectViewElementsBuilder = MethodSpec
		.methodBuilder("injectViewElements")
		.addAnnotation(Override.class).addModifiers(Modifier.PUBLIC);

	for (JField jField : jFields) {
	    ViewElement el = jField.getAnnotation(ViewElement.class);

	    if (jField.isPublic()) {
		if (el != null) {
		    String elId = el.value();
		    injectViewElementsBuilder.addStatement(
			    "this.controller.$L = ($T) getViewFragment($S)",
			    jField.getName(), Element.class, elId);
		}
	    } else if (jField.isPrivate() || jField.isProtected()) {
		if (el != null) {
		    String elId = el.value();
		    injectViewElementsBuilder.addStatement(
			    "this.controller.set$L(($T)getViewFragment($S))",
			    StringUtils.capitalize(jField.getName()),
			    Element.class, elId);
		}
	    }
	}
	controllerHolderSpec.addMethod(injectViewElementsBuilder.build());
	return controllerHolderSpec;
    }

    private TypeSpec.Builder createControllerHolderBuilder(
	    Class<?> controllerClass, String pageId, String viewId,
	    String fieldName, String controller, boolean useSetter) {

	TypeSpec.Builder controllerHolderBuilder = TypeSpec
		.anonymousClassBuilder("$S,$S,$S,$L", pageId, viewId,
			fieldName, controller).superclass(
			ParameterizedTypeName.get(ControllerHolder.class,
				controllerClass));

	// .addMethod(injectViewElementsBuilder.build());

	// TypeSpec controllerHolderSpec = controllerHolderBuilder.build();
	return controllerHolderBuilder;

    }

    /*
     * generate the create view handler method
     */
    private TypeSpec createViewHandler(String controllerRef, String methodName) {
	TypeSpec viewHandler = TypeSpec
		.anonymousClassBuilder("")
		.superclass(it.appify.api.HasViewHandlers.ViewHandler.class)
		.addMethod(
			MethodSpec
				.methodBuilder("onEvent")
				.addModifiers(Modifier.PUBLIC)
				.addParameter(String.class, "type")
				.addParameter(String.class, "source")
				.addStatement(
					controllerRef + "." + methodName + "()")
				.build()).build();
	return viewHandler;
    }

    protected MethodSpec createSuperClassMethods(Class<?> modelClass,
	    TypeSpec objectMapperInterface) {
	return MethodSpec
		.methodBuilder("getAppStateModelView")
		.addModifiers(Modifier.PUBLIC, Modifier.FINAL)
		.addAnnotation(Override.class)
		.returns(
			ParameterizedTypeName.get(WebModelView.class,
				modelClass))
		.addStatement("return $L",
			createViewModelClass(modelClass, objectMapperInterface))
		.build();
    }

    private TypeSpec createViewModelClass(Class<?> modelClass,
	    TypeSpec objectMapperInterface) {

	TypeSpec viewModel = TypeSpec
		.anonymousClassBuilder("")
		.superclass(
			ParameterizedTypeName.get(VueJsViewModel.class,
				modelClass))
		.addField(
			FieldSpec
				.builder(
					ParameterizedTypeName.get(
						ObjectMapper.class, modelClass),
					"mapper", Modifier.PRIVATE).build())

		.addMethod(
			MethodSpec
				.methodBuilder("getObjectMapper")
				.addModifiers(Modifier.PROTECTED)
				.returns(
					ParameterizedTypeName.get(
						ObjectMapper.class, modelClass))
				.addAnnotation(Override.class)
				.addStatement(
					"if(mapper==null){mapper = $T.create($N.class);}return mapper",
					GWT.class, objectMapperInterface.name)
				.build()).build();
	return viewModel;

    }

    private TypeSpec createObjectMapperInterface(String interfaceName,
	    Class<?> modelClass) {
	TypeSpec interfaceMapper = TypeSpec
		.interfaceBuilder(interfaceName)
		.addModifiers(Modifier.PUBLIC, Modifier.STATIC)
		.addSuperinterface(
			ParameterizedTypeName.get(ObjectMapper.class,
				modelClass)).build();
	return interfaceMapper;
    }

    private MethodSpec createDefaultConstructor(String param) {
	return MethodSpec.constructorBuilder()
		.addStatement("super(\"$N\")", param)

		.build();

    }

    public static void main(String[] args) throws IOException,
	    ClassNotFoundException {
	WebAppGenerator generator = new WebAppGenerator();
	TypeSpec type = generator.createWebAppClass("MyWebAppImpl", "mainPage",
		Object.class, Runnable.class, null).build();
	JavaFile file = generator.buildJavaFile("it.mypackage.example", type);
	file.writeTo(System.out);

    }

}
