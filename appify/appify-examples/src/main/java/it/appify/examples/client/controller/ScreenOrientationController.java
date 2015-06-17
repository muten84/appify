package it.appify.examples.client.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.client.model.AppModel;
import it.appify.logging.ConsoleLogger;

@Controller
public class ScreenOrientationController {
	
	private WebApp<AppModel> webapp;
	
	public ScreenOrientationController(final WebApp<AppModel> webapp) {
		this.webapp = webapp;
	}

	@ViewHandler(viewId = "fullScreenBtn", eventType = "click")
	public void requestFullScreen() {
		ConsoleLogger.getConsoleLogger().log("ScreenOrientationService requesting full screen");
		this.webapp.getScreenOrientationService().requestFullScreen();
	}

	@ViewHandler(viewId = "exitfullScreenBtn", eventType = "click")
	public void exitFullScreen() {
		ConsoleLogger.getConsoleLogger().log("ScreenOrientationService requesting exit full screen");
		this.webapp.getScreenOrientationService().exitFullScreen();
	}
}
