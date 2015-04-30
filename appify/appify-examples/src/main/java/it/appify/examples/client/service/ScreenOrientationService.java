package it.appify.examples.client.service;

import com.google.gwt.core.shared.GWT;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;

@Controller
public class ScreenOrientationService {

	private WebApp<?> webapp;

	public ScreenOrientationService(WebApp<?> webapp) {
		this.webapp = webapp;
		// just injected your screen orientation service try to request full screen

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
