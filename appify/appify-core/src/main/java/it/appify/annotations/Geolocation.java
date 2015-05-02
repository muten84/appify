package it.appify.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Annotation enabling Geolocation service for your app
 * 
 * @author Luigi
 *
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Geolocation {

	public final static int HTML5 = 0;

	public final static int WS_PROVIDED = 1;

	public int type() default HTML5;

	public boolean enableHighAccuracy() default true;

	public int maxAge();

	public long timeout();
}
