package it.appify.annotations;

import it.appify.app.WebApp;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * This annotation MUST be used on your Controller class of your pages. Once
 * annotated your class the WebApp will be injected in the contructor The only
 * constraint of a controller is to have a parameterized constructor with the
 * {@link WebApp} type. Controller annotation enables your class to bind your
 * methods to a view trough the {@link ViewHandler} annotation
 * 
 * @author Luigi
 *
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Controller {

	/**
	 * The pageId used to scan your html page and bind your annotated
	 * {@link ViewHandler} methods
	 * 
	 * @return
	 */
	public String page() default "mainPage";
}
