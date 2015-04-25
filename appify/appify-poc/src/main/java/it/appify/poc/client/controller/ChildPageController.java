package it.appify.poc.client.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;

@Controller(page = "childPage")
public class ChildPageController {

	private WebApp<?> app;

	public ChildPageController(WebApp<?> app) {
		this.app = app;
	}

	@ViewHandler(eventType = "click", viewId = "childPageBackBtn")
	public void handleBackButton() {
		app.back();
	}
}
