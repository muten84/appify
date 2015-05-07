package it.appify.app;


public abstract class ControllerHolder<Controller> {

	public String pageId;

	public String viewId;

	public String fieldName;
	
	public Controller controller;

	public ControllerHolder(String pageId, String viewId, String fieldName, Controller controller) {
		this.pageId = pageId;
		this.viewId = viewId;
		this.fieldName = fieldName;
		this.controller = controller;
	}

	public abstract void injectViewElements();

}
