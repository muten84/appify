package it.appify.api;

public interface HasViewHandlers {

	public static interface ViewHandler {

		public void onEvent(String type);
	}

	public void addViewHandler(String id, String type, ViewHandler h);

}
