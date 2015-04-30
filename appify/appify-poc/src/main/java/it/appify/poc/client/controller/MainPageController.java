package it.appify.poc.client.controller;

import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.api.ScrOrientation;
import it.appify.app.WebApp;

@Controller(page = "mainPage")
public class MainPageController {

	private WebApp<?> app;
	
	private ScrOrientation<Element> so;

	public MainPageController(WebApp<?> app) {
		this.app = app;
	}

	@ViewHandler(viewId = "nextBtn", eventType = "click")
	public void onNextPageClick() {
		this.app.moveTo("childPage");
	}
	
	@ViewHandler(viewId = "fullScreenBtn", eventType = "click")
	public void onRequestFullScreen() {
		so = app.getScreenOrientationService();		
		so.requestFullScreen();
		so.lockOrientation(ScrOrientation.LANDSCAPE_SECONDARY);
	}
}
