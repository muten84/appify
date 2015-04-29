package it.appify.annotations;

public @interface Storage {

	public String type() default it.appify.api.Storage.LOCAL_STORAGE;
	
	public Class<?> modelType();	
}
