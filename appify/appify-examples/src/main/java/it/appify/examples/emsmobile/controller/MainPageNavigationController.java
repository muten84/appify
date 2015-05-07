package it.appify.examples.emsmobile.controller;

import com.google.gwt.core.shared.GWT;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;

@Controller(page = "dumpPage")
public class MainPageNavigationController {

	private WebApp<EmsMobileModel> app;

	public MainPageNavigationController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@ViewHandler(eventType = "click", viewId = "checkInBtn")
	public void onCheckInStart() {
		GWT.log("onCheckInStart");
		app.moveTo("vehiclesPage");

	}
}
