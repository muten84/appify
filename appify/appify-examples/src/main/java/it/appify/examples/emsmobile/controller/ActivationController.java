package it.appify.examples.emsmobile.controller;

import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.Element;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewElement;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;

@Controller(page = "activationPage")
public class ActivationController {

	private WebApp<EmsMobileModel> app;

	@ViewElement("activationContent")
	private Element activationContent;

	public ActivationController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@ViewHandler(eventType = "click", viewId = "confirmModalBtn")
	public void onActivatioConfirm() {
		app.getCurrentPage().closeModal("intervIncomeModal");

	}

	@ViewHandler(eventType = "click", viewId = "itemEmergencyData")
	public void showEmergencyData() {
		showFooterInfo();
		disablaAll();
		enableSection("EmergencyData");

	}

	@ViewHandler(eventType = "click", viewId = "itemAddressData")
	public void showAddressData() {
		showFooterInfo();
		disablaAll();
		enableSection("AddressData");

	}

	@ViewHandler(eventType = "click", viewId = "itemNoteData")
	public void showNoteData() {
		showFooterInfo();
		disablaAll();
		enableSection("NoteData");

	}

	protected void showFooterInfo() {
		GWT.log("confirmModalBtn onActivatioConfirm ....");
		String height = activationContent.getPropertyString("height");
		GWT.log("activation content height is: " + height);
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

	public Element getActivationContent() {
		return activationContent;
	}

	public void setActivationContent(Element activationContent) {
		this.activationContent = activationContent;
	}

}
