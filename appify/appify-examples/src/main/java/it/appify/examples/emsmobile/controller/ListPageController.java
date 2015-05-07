package it.appify.examples.emsmobile.controller;

import com.google.gwt.core.shared.GWT;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.annotations.ViewModelHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.model.Item;

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

	@ViewModelHandler(modelType = Item.class, viewId = "listOfItems1")
	public void onItemReceived(Item i) {
		GWT.log("Received item from listOfItems1: " + i.getCode() + " - " + i.getName());
	}

}
