package it.appify.examples.client.controller;

import com.google.gwt.core.shared.GWT;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.client.model.AppModel;

@Controller
public class ScreenOrientationController {
	
	private WebApp<AppModel> webapp;
	
	public ScreenOrientationController(final WebApp<AppModel> webapp) {
		this.webapp = webapp;
	}

	@ViewHandler(viewId = "fullScreenBtn", eventType = "click")
	public void requestFullScreen() {
		GWT.log("ScreenOrientationService requesting full screen");
		this.webapp.getScreenOrientationService().requestFullScreen();
	}

	@ViewHandler(viewId = "exitfullScreenBtn", eventType = "click")
	public void exitFullScreen() {
		GWT.log("ScreenOrientationService requesting exit full screen");
		this.webapp.getScreenOrientationService().exitFullScreen();
	}
}
