package it.appify.examples.emsmobile.controller;

import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.Element;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewElement;
import it.appify.annotations.ViewHandler;
import it.appify.annotations.ViewModelHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.model.Item;

@Controller(page = "vehiclesPage")
public class VehicleListController {

	private WebApp<EmsMobileModel> app;

	@ViewElement("waitModalText")
	private Element waitModalText;

	public VehicleListController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@ViewHandler(eventType = "click", viewId = "backBtn")
	public void back() {
		this.app.back();
	}

	@ViewHandler(eventType = "click", viewId = "closeWaitModalBtn")
	public void onCloseModal() {
		showModal("waitModal");
	}

	@ViewModelHandler(modelType = Item.class, viewId = "vehicleList")
	public void onItemReceived(Item i) {
		GWT.log("Received item from listOfItems1: " + i.getCode() + " - "
				+ i.getName());
		waitModalText.setInnerText("Hai selezionato: " + i.getCode() + " - "
				+ i.getName());
		showModal("waitModal");
		//request checkin to service
	}

	protected void showModal(String name) {
		app.getCurrentPage().toggleClassViewStyle(name, "active");
	}

	public Element getWaitModalText() {
		return waitModalText;
	}

	public void setWaitModalText(Element waitModalText) {
		this.waitModalText = waitModalText;
	}

}
