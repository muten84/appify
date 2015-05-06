package it.appify.examples.emsmobile.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;

@Controller(page = "listPage")
public class ListPageController {

	private WebApp<EmsMobileModel> app;

	public ListPageController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@ViewHandler(eventType = "click", viewId = "backBtn")
	public void back() {
		this.app.back();
	}

}
