package it.appify.examples.emsmobile.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;

@Controller(page = "dump118")
public class Dump118Controller {
	private WebApp<EmsMobileModel> app;

	public Dump118Controller(WebApp<EmsMobileModel> app) {
		this.app = app;
		// TODO Auto-generated constructor stub
	}

	@ViewHandler(eventType = "click", viewId = "backBtn")
	public void back() {
		this.app.back();
	}

}
