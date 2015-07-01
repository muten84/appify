package it.appify.examples.emsmobile.service;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.api.Sound;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.Activation;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.util.Registry;
import it.appify.examples.emsmobile.util.Utils;
import it.appify.logging.ConsoleLogger;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;

@Service
public class ActivationService {

	private WebApp<EmsMobileModel> app;

	private boolean scheduling;

	public ActivationService(WebApp<EmsMobileModel> app) {
		ConsoleLogger.getConsoleLogger().log("ActivationService built..");
		this.app = app;
	}

	@Start
	public void startActivationService() {
		ConsoleLogger.getConsoleLogger().log("ActivationService start..");
		Registry.register("ActivationService", this);
		scheduleActivation();

	}

	public void scheduleActivation() {
		if (!scheduling) {
			Scheduler.get().scheduleFixedPeriod(new RepeatingCommand() {

				@Override
				public boolean execute() {
					ConsoleLogger.getConsoleLogger().log(">>Activation scheduled...");
					EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();
					String vehicleCode = model.getBarStatus().getVehicleCode();
					Activation current = model.getActivation();
					if (vehicleCode == null || vehicleCode.isEmpty() || current != null) {
						// not in turn retry next iteration
						ConsoleLogger.getConsoleLogger().log(">>Activation terminal not in turn or activation stored...");
						scheduling = true;
						return true;
					} else {
						try {
							Sound sound = Registry.get("activationSound");
							sound.play();
						} catch (Exception e) {
							ConsoleLogger.getConsoleLogger().log("unable to play sound", e);
						}
						EmsMobileModel currentModel = app.<EmsMobileModel> getCurrentAppState();
						Activation a = Utils.restoreActivation(app);

						if (currentModel.getActivation() != null) {
							if (a == null) {
								a = Utils.createActivation(true);
								if (currentModel.getActivation().getPhases() != null) {
									ConsoleLogger.getConsoleLogger().log("ACTIVATION REFRESHED: " + currentModel.getActivation().getPhases().size());
								} else {
									ConsoleLogger.getConsoleLogger().log("ACTIVATION REFRESHED WITHOUT PHASES");
								}
								ConsoleLogger.getConsoleLogger().log("ACTIVATION CREATED");
							} else {
								if (currentModel.getActivation().getPhases() != null) {
									ConsoleLogger.getConsoleLogger().log("ACTIVATION REFRESHED: " + currentModel.getActivation().getPhases().size());
								} else {
									ConsoleLogger.getConsoleLogger().log("ACTIVATION REFRESHED WITHOUT PHASES");
								}
								ConsoleLogger.getConsoleLogger().log("ACTIVATION RESTORED");
							}
						} else {
							currentModel.setActivation(Utils.createActivation(true));
							app.updateAppState(currentModel);
						}
						ConsoleLogger.getConsoleLogger().log(">>Activation showing...");

						app.getCurrentPage().showModal("intervIncomeModal");
						scheduling = false;
						return false;
					}
				}
			}, 5000);
		}
	}

}
