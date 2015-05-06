package it.appify.examples.client.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;

import com.google.gwt.core.shared.GWT;

@Controller
public class MenuController {

	private WebApp<?> app;

	public MenuController(WebApp<?> app) {
		this.app = app;
	}

	@ViewHandler(viewId = "firstMenuBtn", eventType = "click")
	public void onFirstBtnClicked() {
		GWT.log("First menu button clicked");
		this.app.moveTo("childPage");
	}

	@ViewHandler(viewId = "showLeft", eventType = "click")
	public void onMenuClick() {
		GWT.log("menu show clicked");	
		if (!this.app.isMenuOpen()) {
			this.app.openContextMenu("content");
		} else {
			this.app.closeContextMenu();
		}
	}

	
}
