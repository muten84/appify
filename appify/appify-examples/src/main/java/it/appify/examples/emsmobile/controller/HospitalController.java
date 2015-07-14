package it.appify.examples.emsmobile.controller;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;
import com.google.gwt.dom.client.Element;

import it.appify.annotations.Controller;
import it.appify.annotations.OnPageReady;
import it.appify.annotations.ViewElement;
import it.appify.annotations.ViewHandler;
import it.appify.annotations.ViewModelHandler;
import it.appify.api.HasViewHandlers;
import it.appify.api.Page.KeyboardActionCallback;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.model.Item;
import it.appify.examples.emsmobile.model.Patient;
import it.appify.examples.emsmobile.util.ViewUtils;
import it.appify.logging.ConsoleLogger;

@Controller(page = "hospitalsPage")
public class HospitalController {

	private WebApp<EmsMobileModel> app;

	@ViewElement("waitModalText")
	private Element waitModalText;

	public HospitalController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@OnPageReady
	public void onPageReady() {
		ConsoleLogger.getConsoleLogger().log("PAGE READY :) YEAAAAAAAAAAAAAAH!");
		app.getCurrentPage().keyboard("keyboard", new KeyboardActionCallback() {

			@Override
			public void accepted(String text) {
				ConsoleLogger.getConsoleLogger().log("keyboard accepted text: " + text);
				Element vehicleSearchTextEl = app.getCurrentPage().getElementInPage("vehicleSearchText");
				vehicleSearchTextEl.setInnerText(text);
				app.getCurrentPage().setElementValue("vehicleSearchText", text);
				app.getCurrentPage().triggerEvent("vehicleSearchText", "input");
			}
		});


	}

	@ViewHandler(eventType = "click", viewId = "backBtn")
	public void back() {
		this.app.back();
	}

	@ViewHandler(eventType = "focusin", viewId = "vehicleSearchText")
	public void vehicleSearchTextFocusIn() {
		Element keyboardEl = app.getCurrentPage().getElementInPage("keyboard");
		String id = keyboardEl.getAttribute("id");
		keyboardEl.setAttribute("id", "showKeyboard");
		keyboardEl = app.getCurrentPage().getElementInPage("showKeyboard");
		final Element showKeyboardEl = keyboardEl;
		app.getCurrentPage().addViewHandler("showKeyboard", "focusout", new HasViewHandlers.ViewHandler() {

			@Override
			public void onEvent(String type, String source) {
				ConsoleLogger.getConsoleLogger().log("onEvent source: " + source + " - type: " + type);
				showKeyboardEl.setAttribute("id", "keyboard");
				

			}
		});
		keyboardEl.focus();
	}

	@ViewHandler(eventType = "click", viewId = "closeWaitModalBtn")
	public void onCloseModal() {
		ViewUtils.showModal(app, "waitModal");
	}

	@ViewModelHandler(modelType = Item.class, viewId = "hospitalList")
	public void onItemReceived(final Item i) {
		ConsoleLogger.getConsoleLogger().log("Received item from hospitalList: " + i.getCode() + " - " + i.getItemName());		
//		EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();
//		Patient currP = model.getActivation().getCurrentPatient();
//		currP.setHospital(i);					
//		model.getActivation().updateCurrentPatient(currP);
		EmsMobileModel model = updatePatientData(i);
		ConsoleLogger.getConsoleLogger().log("setted hospital to current patient: " + model.getActivation().getCurrentPatient().getHospital().getItemName());
//		app.updateAppState(model);				
		Scheduler.get().scheduleFixedDelay(new RepeatingCommand() {
			
			@Override
			public boolean execute() {
				app.back();
				return false;
			}
		}, 500);
		
	}

	public Element getWaitModalText() {
		return waitModalText;
	}

	public void setWaitModalText(Element waitModalText) {
		this.waitModalText = waitModalText;
	}
	
	private EmsMobileModel updatePatientData(Item hospital) {
		ConsoleLogger.getConsoleLogger().log("updatePatientData");
		EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();
		if (model.getActivation() == null) {
			return null;
		}
		Patient p = model.getActivation().getCurrentPatient();
		if (p == null) {
			p = new Patient();
		}
		p.setHospital(hospital);
		model.getActivation().updateCurrentPatient(p);
		model.getActivation().setCurrentBackupPatient(p);
		app.updateAppState(model);
		ConsoleLogger.getConsoleLogger().log("updatePatientData sucess");
		return model;

	}

}
