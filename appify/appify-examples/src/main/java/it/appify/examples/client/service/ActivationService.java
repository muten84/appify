package it.appify.examples.client.service;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.util.ViewUtils;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;
import com.google.gwt.core.shared.GWT;

@Service
public class ActivationService {

	private WebApp<EmsMobileModel> app;

	public ActivationService(WebApp<EmsMobileModel> app) {
		GWT.log("ActivationService built..");
		this.app = app;
	}

	@Start
	public void startActivationService() {
		GWT.log("ActivationService start..");
		scheduleActivation();
	}

	protected void scheduleActivation() {
		Scheduler.get().scheduleFixedPeriod(new RepeatingCommand() {

			@Override
			public boolean execute() {
				GWT.log(">>Activation scheduled...");
				EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();
				String vehicleCode = model.getVehicleCode();
				if (vehicleCode == null || vehicleCode.isEmpty()) {
					// not in turn retry next iteration
					GWT.log(">>Activation terminal not in turn...");
					return true;
				} else {
					GWT.log(">>Activation showing...");
					showActivation();

					return false;
				}
			}
		}, 1000);
	}

	protected void showActivation() {
		app.moveTo("activationPage");

	}

	@ViewHandler(eventType = "click", viewId = "closeWaitModalBtn")
	public void onCloseModal() {
		ViewUtils.showModal(app, "waitModal");
	}
}
