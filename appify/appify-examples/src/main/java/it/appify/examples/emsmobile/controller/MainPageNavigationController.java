package it.appify.examples.emsmobile.controller;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;
import com.google.gwt.core.shared.GWT;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.util.ViewUtils;

//@Controller(page = "dumpPage")
public class MainPageNavigationController {

	private WebApp<EmsMobileModel> app;

	public MainPageNavigationController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	
}
