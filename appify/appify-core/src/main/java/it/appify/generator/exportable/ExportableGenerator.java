package it.appify.generator.exportable;

import java.io.IOException;
import java.io.PrintWriter;

import javax.lang.model.element.Modifier;

import org.apache.commons.lang.StringUtils;
import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;

import com.google.gwt.core.ext.Generator;
import com.google.gwt.core.ext.GeneratorContext;
import com.google.gwt.core.ext.TreeLogger;
import com.google.gwt.core.ext.UnableToCompleteException;
import com.google.gwt.core.ext.typeinfo.JClassType;
import com.google.gwt.core.ext.typeinfo.TypeOracle;
import com.squareup.javapoet.AnnotationSpec;
import com.squareup.javapoet.JavaFile;
import com.squareup.javapoet.MethodSpec;
import com.squareup.javapoet.TypeSpec;

/**
 * Useful generator to enable export of JS API. JS API will be loaded after
 * onModuleLoad GWT method. And you can
 * 
 * @author Luigi
 *
 */
/*
 * TODO: try to generate a class that extends an absract webapp and provide the
 * simplest viewmodel binding by-passing all Java boiler plate In effect we can
 * implement simply the _create and _udateModel of VuewJsViewModel class.
 */
public class ExportableGenerator extends Generator {

	private TypeOracle typeOracle;

	@Override
	public String generate(TreeLogger logger, GeneratorContext context,
			String typeName) throws UnableToCompleteException {
		typeOracle = context.getTypeOracle();
		String className = "";
		String packageName = "";
		try {

			JClassType classType = typeOracle.getType(typeName);
			className = classType.getSimpleSourceName() + "ExportableImpl";
			packageName = classType.getPackage().getName();
			Class<?> superInterface = Class.forName(packageName + "."
					+ classType.getSimpleSourceName());
			PrintWriter pw = context.tryCreate(logger, classType.getPackage()
					.getName(), className);
			if (pw != null) {
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return packageName + "." + className;
	}

	protected TypeSpec createWebAppClass(String className, String mainPage,
			Class<?> superInterface) throws ClassNotFoundException {
		TypeSpec webAppType = TypeSpec
				.classBuilder(className)
				.addModifiers(Modifier.PUBLIC, Modifier.FINAL)
				.addSuperinterface(superInterface)
				// TODO:.superclass(AbstractWebApp.class)
				.addAnnotation(createExportAnnotation("testClass"))
				.addAnnotation(createExportPackageAnnotation("testPackage"))
				.build();
		return webAppType;
	}

	protected AnnotationSpec createExportPackageAnnotation(String name) {
		if (StringUtils.isEmpty(name)) {
			return null;
		} else {
			return AnnotationSpec.builder(ExportPackage.class)
					.addMember("value", "$S", name).build();
		}
	}

	protected AnnotationSpec createExportAnnotation(String name) {
		if (StringUtils.isEmpty(name)) {
			return AnnotationSpec.builder(Export.class).build();
		} else {
			return AnnotationSpec.builder(Export.class)
					.addMember("value", "$S", name).build();
		}
	}

	protected MethodSpec createGetAppStateModelViewMethod() {
		return null;
	}

	protected MethodSpec[] createExportablesMethods() {
		return null;
	}

	protected JavaFile buildJavaFile(String packageName, TypeSpec type) {
		JavaFile javaFile = JavaFile.builder(packageName, type).build();
		return javaFile;
	}

	public static void main(String[] args) throws ClassNotFoundException,
			IOException {
		ExportableGenerator generator = new ExportableGenerator();
		TypeSpec type = generator.createWebAppClass("MyClass", "mainPage",
				ExportableWebApp.class);
		JavaFile file = generator.buildJavaFile("it.mypackage.example", type);
		file.writeTo(System.out);
	}

}
