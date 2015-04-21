package it.appify.api;

public interface HasHandlers {

	public interface Handler {
		public void onEvent(String type, String source);
	}

	public void addHandler(String type, Handler h);
}
