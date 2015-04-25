package it.appify.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * You can annotate the methods of your Controller class with this annotation
 * 
 * @author Luigi
 *
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface ViewHandler {

	/**
	 * The viewId of your page
	 * @return
	 */
	public String viewId();
	
	/**
	 * The event type such as: 'click', 'change'
	 * @return
	 */
	public String eventType();
}
