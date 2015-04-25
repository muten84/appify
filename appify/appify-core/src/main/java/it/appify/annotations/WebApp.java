package it.appify.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.github.nmorel.gwtjackson.client.ObjectMapper;

/**
 * The main annotation to enable generation of your webapp
 * @author Luigi
 *
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface WebApp {

	public String mainPage() default "mainPage";

	public Class<?> appStateType();


}
