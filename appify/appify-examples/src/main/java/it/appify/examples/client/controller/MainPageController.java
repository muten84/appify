package it.appify.examples.client.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;

@Controller(page = "mainPage")
public class MainPageController {

	private WebApp<?> app;

	public MainPageController(WebApp<?> app) {
		this.app = app;
	}

	@ViewHandler(viewId = "nextBtn", eventType = "click")
	public void onNextPageClick() {
		this.app.moveTo("childPage");

	}
}
