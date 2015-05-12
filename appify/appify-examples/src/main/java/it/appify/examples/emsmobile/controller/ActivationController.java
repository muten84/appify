package it.appify.examples.emsmobile.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;

@Controller(page = "activationPage")
public class ActivationController {

	private WebApp<EmsMobileModel> app;

	public ActivationController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@ViewHandler(eventType = "click", viewId = "confirmModalBtn")
	public void onActivatioConfirm() {
		app.getCurrentPage().closeModal("intervIncomeModal");		
	}

	@ViewHandler(eventType = "click", viewId = "itemEmergencyData")
	public void showEmergencyData() {
		disablaAll();
		enableSection("EmergencyData");

	}

	@ViewHandler(eventType = "click", viewId = "itemAddressData")
	public void showAddressData() {
		disablaAll();
		enableSection("AddressData");

	}

	@ViewHandler(eventType = "click", viewId = "itemNoteData")
	public void showNoteData() {
		disablaAll();
		enableSection("NoteData");

	}

	private void disableSection(String suffix) {
		if (app.getCurrentPage().hasStyle("item" + suffix, "active")) {
			app.getCurrentPage().toggleClassViewStyle("item" + suffix, "active");
		}
		if (app.getCurrentPage().hasStyle("card" + suffix, "active")) {
			app.getCurrentPage().toggleClassViewStyle("card" + suffix, "active");
		}
	}

	private void enableSection(String suffix) {
		if (!app.getCurrentPage().hasStyle("item" + suffix, "active")) {
			app.getCurrentPage().toggleClassViewStyle("item" + suffix, "active");
		}
		if (!app.getCurrentPage().hasStyle("card" + suffix, "active")) {
			app.getCurrentPage().toggleClassViewStyle("card" + suffix, "active");
		}
	}

	protected void disablaAll() {
		disableSection("EmergencyData");
		disableSection("NoteData");
		disableSection("AddressData");

	}

}
