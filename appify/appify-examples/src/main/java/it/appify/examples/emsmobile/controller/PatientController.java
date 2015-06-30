package it.appify.examples.emsmobile.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.OnPageReady;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.logging.ConsoleLogger;

@Controller(page = "patientPage")
public class PatientController {

	private WebApp<EmsMobileModel> app;

	public PatientController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}
	
	//@OnPageReady
	public void onPatientsPageReady() {
		disableAllSanEval();		
	}
	
	@ViewHandler(eventType = "click", viewId = "backBtn")
	public void backBtnClicked() {
		app.back();
	}

	@ViewHandler(eventType = "click", viewId = "showPatientMenuBtn")
	public void controlPatientMenu() {
		ConsoleLogger.getConsoleLogger().log("controlPatientMenu");
		if (app.isMenuOpen()) {
			app.closeContextMenu();
		} else {
			app.openContextMenu("content");
		}
	}
	
	@ViewHandler(eventType = "click", viewId = "sanEval0")
	public void sanEval0() {
		enableSanEval("0");
	}
	
	@ViewHandler(eventType = "click", viewId = "sanEval1")
	public void sanEval1() {
		enableSanEval("1");
	}
	
	@ViewHandler(eventType = "click", viewId = "sanEval2")
	public void sanEval2() {
		enableSanEval("2");
	}
	
	@ViewHandler(eventType = "click", viewId = "sanEval3")
	public void sanEval3() {
		enableSanEval("3");
	}
	
	 @ViewHandler(eventType = "click", viewId = "sanEval4")
	public void sanEval4() {
		enableSanEval("4");
	}

	private void disableAllSanEval() {
		for (int i = 0; i < 5; i++) {
			disableSanEval("" + i);
		}
	}

	private void enableSanEval(String code) {
		if (!app.getCurrentPage().hasStyle("sanEval" + code, "active")) {
			app.getCurrentPage().toggleClassViewStyle("sanEval" + code, "active");
		}
	}

	private void disableSanEval(String code) {
		if (app.getCurrentPage().hasStyle("sanEval" + code, "active")) {
			app.getCurrentPage().toggleClassViewStyle("sanEval" + code, "active");
		}
	}

}
