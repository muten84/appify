package it.appify.examples.emsmobile.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewElement;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;

import java.util.Date;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;
import com.google.gwt.dom.client.Element;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.i18n.client.DateTimeFormat.PredefinedFormat;

@Controller(page = "activationPage")
public class ActivationController {

	private WebApp<EmsMobileModel> app;

	@ViewElement("activationContent")
	private Element activationContent;

	@ViewElement("bottomBar")
	private Element bottomBar;

	@ViewElement("sendBtn")
	private Element sendBtn;

	public ActivationController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	// @OnPageReady
	// public void onPageReady() {
	// String currentStyle = activationContent.getAttribute("style");
	//
	// int activationHeight = activationContent.getOffsetHeight();
	// int bottomHeight = bottomBar.getOffsetHeight();
	//
	// // GWT.log("activationPage activationContent: " + activationContent.getId());
	// GWT.log("activationPage activationHeight: " + activationHeight);
	// GWT.log("activationPage bottomHeight: " + bottomHeight);
	// String[] props = currentStyle.split(";");
	// currentStyle = "";
	//
	// for (String p : props) {
	// GWT.log("activationPage currentStyle: " + p);
	// if (p.contains("height")) {
	// currentStyle += "height: " + (activationHeight - bottomHeight) + "px; ";
	// } else {
	// currentStyle += p + "; ";
	// }
	// //
	// }
	// activationContent.setAttribute("style", currentStyle);
	//
	// }

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

	@ViewHandler(eventType = "click", viewId = "sendBtn")
	public void send() {
		GWT.log("send....");
		nextStage("sendLabel");
	}
	
	@ViewHandler(eventType = "click", viewId = "placeArrivalBtn")
	public void placeArrival() {
		GWT.log("departure....");
		nextStage("placeArrivalLabel");
	}
	
	@ViewHandler(eventType = "click", viewId = "departureBtn")
	public void departure() {
		GWT.log("departure....");
		nextStage("departureLabel");
	}
	
	@ViewHandler(eventType = "click", viewId = "hospitalArrivalBtn")
	public void hospitalArrival() {
		GWT.log("hospitalArrival....");
		nextStage("hospitalArrivalLabel");
	}
	
	@ViewHandler(eventType = "click", viewId = "closureBtn")
	public void clousure() {
		GWT.log("clousure....");
		closure();
		
	}
	
	protected void closure() {
		app.getCurrentPage().setElementText("closureLabel", "Invio in corso...");
		final Date d = new Date();
		Scheduler.get().scheduleFixedDelay(new RepeatingCommand() {

			@Override
			public boolean execute() {
				String formattedTime = DateTimeFormat.getFormat(PredefinedFormat.TIME_MEDIUM).format(d);
				app.getCurrentPage().setElementText("closureLabel", formattedTime);
				app.back();
				return false;
			}
		}, 2500);
		
	}

	protected void nextStage(final String viewId) {
		app.getCurrentPage().setElementText(viewId, "Invio in corso...");
		final Date d = new Date();
		Scheduler.get().scheduleFixedDelay(new RepeatingCommand() {

			@Override
			public boolean execute() {
				String formattedTime = DateTimeFormat.getFormat(PredefinedFormat.TIME_MEDIUM).format(d);
				app.getCurrentPage().setElementText(viewId, formattedTime);
				//TODO: disable element btn
				return false;
			}
		}, 2500);
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

	public Element getBottomBar() {
		return bottomBar;
	}

	public void setBottomBar(Element bottomBar) {
		this.bottomBar = bottomBar;
	}

	public Element getSendBtn() {
		return sendBtn;
	}

	public void setSendBtn(Element sendBtn) {
		this.sendBtn = sendBtn;
	}

}
