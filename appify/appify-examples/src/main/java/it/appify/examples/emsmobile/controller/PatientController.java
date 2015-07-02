package it.appify.examples.emsmobile.controller;

import com.google.gwt.dom.client.Element;

import it.appify.annotations.Controller;
import it.appify.annotations.OnPageReady;
import it.appify.annotations.ViewElement;
import it.appify.annotations.ViewHandler;
import it.appify.annotations.ViewModelHandler;
import it.appify.api.HasViewHandlers;
import it.appify.app.WebApp;
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
//		EmsMobileModel model = app.<EmsMobileModel>getCurrentAppState();
//		Activation act = model.getActivation();
//		if(act!=null){
//			Patient p = act.getPatients().get(0);
//			if(p!=null){
//				int sanEval = p.getSanEval();
//			}
//		}
			
		app.getCurrentPage().addViewsHandler("backModal", "click", new HasViewHandlers.ViewHandler() {
			
			@Override
			public void onEvent(String type, String source) {
				app.getCurrentPage().closeCurrentModal();
				
			}
		});
	}
	
	
	@ViewModelHandler(modelType = Item.class, viewId = "sanEvalList")
	public void onSanEvalReceived(final Item i) {
		ConsoleLogger.getConsoleLogger().log("onSanEvalReceived: "+i.getCode());
		EmsMobileModel model = app.<EmsMobileModel>getCurrentAppState();
		Patient currP = model.getActivation().getCurrentPatient();
		currP.setSanEval(Integer.valueOf(i.getCode()));
		model.getActivation().updateCurrentPatient(currP);
		app.updateAppState(model);
		app.getCurrentPage().closeModal("sanEvalModal");
	}
	
	
	
	@ViewModelHandler(modelType = Item.class, viewId = "critictyEndList")
	public void onCriticityEndReceived(final Item i) {
		ConsoleLogger.getConsoleLogger().log("onCriticityEndReceived: "+i.getCode());
		EmsMobileModel model = app.<EmsMobileModel>getCurrentAppState();
		Patient currP = model.getActivation().getCurrentPatient();
		currP.setCriticityEnd(i);
		model.getActivation().updateCurrentPatient(currP);
		app.updateAppState(model);
		app.getCurrentPage().closeModal("criticityEndModal");
	}
	
	@ViewModelHandler(modelType = Item.class, viewId = "resultsList")
	public void onResultReceived(final Item i) {
		ConsoleLogger.getConsoleLogger().log("onResultReceived: "+i.getCode());
		EmsMobileModel model = app.<EmsMobileModel>getCurrentAppState();
		Patient currP = model.getActivation().getCurrentPatient();
		currP.setResult(i);
		model.getActivation().updateCurrentPatient(currP);
		app.updateAppState(model);
		app.getCurrentPage().closeModal("resultsModal");
	}
	
	@ViewHandler(eventType = "click", viewId = "resultChoice")
	public void selectResult() {
		ConsoleLogger.getConsoleLogger().log("selectResult resultChoice");
		app.getCurrentPage().showModal("resultsModal");
	}
	

	@ViewHandler(eventType = "click", viewId = "sanEvalChoice")
	public void selectSanEval() {
		ConsoleLogger.getConsoleLogger().log("selectSanEval sanEvalChoice");
		app.getCurrentPage().showModal("sanEvalModal");
	}
	

	@ViewHandler(eventType = "click", viewId = "criticityEndChoice")
	public void selectCritEnd() {
		ConsoleLogger.getConsoleLogger().log("selectCritEnd criticityEndChoice");
		app.getCurrentPage().showModal("criticityEndModal");
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
	
	@ViewHandler(eventType = "click", viewId = "itemSanEvalData")
	public void showSanEvalData() {		
		//disablaAll();
		disableSection("ResultData");
		enableSection("SanEvalData");
		

	}
	
	@ViewHandler(eventType = "click", viewId = "itemResultData")
	public void showResultData() {		
		disableSection("SanEvalData");
		enableSection("ResultData");
		

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
		ConsoleLogger.getConsoleLogger().log("enableSection: "+suffix);
		if (!app.getCurrentPage().hasStyle("item" + suffix, "active")) {
			ConsoleLogger.getConsoleLogger().log("toggleClassViewStyle: item" + suffix);
			app.getCurrentPage().toggleClassViewStyle("item" + suffix, "active");
		}
		if (!app.getCurrentPage().hasStyle("card" + suffix, "active")) {
			ConsoleLogger.getConsoleLogger().log("toggleClassViewStyle: card" + suffix);
			app.getCurrentPage().toggleClassViewStyle("card" + suffix, "active");
		}
	}
	
	protected void disablaAll() {
		disableSection("SanEvalData");
		disableSection("ResultData");
	}


	public Element getSanEvalChoice() {
		return sanEvalChoice;
	}

	public void setSanEvalChoice(Element sanEvalChoice) {
		this.sanEvalChoice = sanEvalChoice;
	}
	
	

}
