package it.appify.examples.emsmobile.controller;

import com.google.gwt.dom.client.Element;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewElement;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;

@Controller(page = "dumpPage")
public class CheckInController {

	private WebApp<EmsMobileModel> app;

	@ViewElement("waitModalText")
	private Element waitModalText;

	public CheckInController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@ViewHandler(eventType = "click", viewId = "checkInBtn")
	public void onCheckIn() {		
		showModal("waitModal");
		waitModalText.setInnerText("Richiesta di inizio turno in corso...");
	}

	@ViewHandler(eventType = "click", viewId = "closeWaitModalBtn")
	public void onCloseModal() {
		showModal("waitModal");
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
