package it.appify.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Geolocation {

	public boolean enableHighAccuracy() default true;
	
	public int maxAge();
	
	public long timeout();
}
