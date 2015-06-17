package it.appify.examples.emsmobile.controller;

import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;

//@Controller(page = "dumpPage")
public class MainPageNavigationController {

	private WebApp<EmsMobileModel> app;

	public MainPageNavigationController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	
}
