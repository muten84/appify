package it.appify.examples.emsmobile.controller;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;
import com.google.gwt.core.shared.GWT;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.util.ViewUtils;

@Controller(page = "dumpPage")
public class MainPageNavigationController {

	private WebApp<EmsMobileModel> app;

	public MainPageNavigationController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@ViewHandler(eventType = "click", viewId = "checkInBtn")
	public void onCheckInStart() {
		GWT.log("onCheckInStart");
		if (app.<EmsMobileModel> getCurrentAppState().getBarStatus().getVehicleCode() == null) {
			//app.getScreenOrientationService().requestFullScreen();
			app.moveTo("vehiclesPage");
		} else {
			// start checkout request...
			ViewUtils.showModal(app, "waitModal");
			Scheduler.get().scheduleFixedDelay(new RepeatingCommand() {

				@Override
				public boolean execute() {				
					ViewUtils.showModal(app, "waitModal");
					EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();
					model.getBarStatus().setVehicleCode(null);
					model.setCheckInLabel("Inizio Turno");
					app.updateAppState(model);					
					return false;
				}
			}, 5000);
		}

	}
}
