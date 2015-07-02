package it.appify.examples.emsmobile.controller;

import java.util.List;

import com.google.gwt.dom.client.Element;

import it.appify.annotations.Controller;
import it.appify.annotations.OnPageReady;
import it.appify.annotations.ViewElement;
import it.appify.annotations.ViewHandler;
import it.appify.annotations.ViewModelHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.Activation;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.model.Item;
import it.appify.examples.emsmobile.model.Patient;
import it.appify.logging.ConsoleLogger;

@Controller(page = "patientPage")
public class PatientController {

	private WebApp<EmsMobileModel> app;
	
	@ViewElement("sanEvalChoice")
	private Element sanEvalChoice;

	public PatientController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@OnPageReady
	public void onPatientsPageReady() {
		EmsMobileModel model = app.<EmsMobileModel>getCurrentAppState();
		Activation act = model.getActivation();
		if(act!=null){
			Patient p = act.getPatients().get(0);
			if(p!=null){
				int sanEval = p.getSanEval();
			}
		}
	}
	
	@ViewModelHandler(modelType = Item.class, viewId = "sanEvalList")
	public void onSanEvalReceived(final Item i) {
		ConsoleLogger.getConsoleLogger().log("onSanEvalReceived: "+i.getCode());
		app.getCurrentPage().closeModal("sanEvalModal");
	}
	
	@ViewHandler(eventType = "click", viewId = "backModal")
	public void onSanEvalCancel(){
		app.getCurrentPage().closeModal("sanEvalModal");
	}

	@ViewHandler(eventType = "click", viewId = "sanEvalChoice")
	public void selectSanEval() {
		ConsoleLogger.getConsoleLogger().log("selectSanEval sanEvalChoice");
		app.getCurrentPage().showModal("sanEvalModal");
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


	public Element getSanEvalChoice() {
		return sanEvalChoice;
	}

	public void setSanEvalChoice(Element sanEvalChoice) {
		this.sanEvalChoice = sanEvalChoice;
	}
	
	

}
