package it.appify.api;

public interface Storage {

	public final static String SESSION_STORAGE = "SESSION";

	public final static String LOCAL_STORAGE = "LOCAL";

	public String getType();

	public <M> void store(String id, M model);

	public <M> M get(String id);

	public void remove(String id);

}
