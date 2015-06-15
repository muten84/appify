package it.appify.examples.emsmobile.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.OnPageReady;
import it.appify.annotations.ViewElement;
import it.appify.annotations.ViewHandler;
import it.appify.api.Sound;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.service.ActivationService;
import it.appify.examples.emsmobile.util.Registry;
import it.appify.examples.emsmobile.util.ViewUtils;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.Element;

@Controller(page = "dumpPage")
public class DumpController {

	private WebApp<EmsMobileModel> app;

	@ViewElement("dumpFrame")
	private Element dumpFrameElement;

	public DumpController(WebApp<EmsMobileModel> app) {
		this.app = app;
		
	}
	
	@OnPageReady
	public void onPageReady() {
		GWT.log("onPageReady DumpController");
		EmsMobileModel model = this.app.getCurrentAppState();
		if(model.getActivation()!=null) {		
			GWT.log("ACTIVATION IS NOT NULL MOVING TO ACTIVATION PAGE");
			app.moveTo("activationPage");
		}
		else {
			GWT.log("ACTIVATION IS NULL");
		}
	}
	
	@ViewHandler(eventType = "click", viewId = "checkInBtn")
	public void onCheckInStart() {
		GWT.log("onCheckInStart");
		app.getCurrentPage().mask("");
		if (app.<EmsMobileModel> getCurrentAppState().getBarStatus().getVehicleCode() == null) {
			// app.getScreenOrientationService().requestFullScreen();
			app.moveTo("vehiclesPage");
		} else {
			// start checkout request...
			//ViewUtils.showModal(app, "waitModal");
			Scheduler.get().scheduleFixedDelay(new RepeatingCommand() {

				@Override
				public boolean execute() {
					//ViewUtils.showModal(app, "waitModal");
					EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();
					model.getBarStatus().setVehicleCode(null);
					model.setCheckInLabel("Inizio Turno");
					app.updateAppState(model);
					app.getCurrentPage().unmask();
					ActivationService service = Registry.get("ActivationService");
					service.scheduleActivation();
					return false;
				}
			}, 5000);
		}

	}
	

	@ViewHandler(eventType = "click", viewId = "refreshDumpBtn")
	public void onRefreshDump() {
		// Element frameElement = app.<Element> getViewFragment("dumpFrame");
		EmsMobileModel model = app.getCurrentAppState();
		_refreshFrame(dumpFrameElement.cast(), model.getDumpUrl());
	}
	
	@ViewHandler(eventType = "click", viewId = "confirmModalBtn")
	public void onActivatioConfirm() {
		app.getCurrentPage().closeModal("intervIncomeModal");
		Sound sound = Registry.get("activationSound");
		sound.stop();
		app.moveTo("activationPage");
	}

	private native void _refreshFrame(JavaScriptObject frame, String url)/*-{
		frame.src = url;
	}-*/;

	/* getter and setter */
	public Element getDumpFrameElement() {
		return dumpFrameElement;
	}

	public void setDumpFrameElement(Element dumpFrameElement) {
		this.dumpFrameElement = dumpFrameElement;
	}

}
