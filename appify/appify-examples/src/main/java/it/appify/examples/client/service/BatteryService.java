package it.appify.examples.client.service;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.api.Battery.BatteryStatusCallback;
import it.appify.api.BatteryStatus;
import it.appify.app.WebApp;
import it.appify.examples.client.model.AppModel;
import it.appify.logging.ConsoleLogger;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.ScheduledCommand;

@Service
public class BatteryService {

	private WebApp<AppModel> app;

	public BatteryService(final WebApp<AppModel> app) {
		ConsoleLogger.getConsoleLogger().log("BatteryService built...");
		this.app = app;

	}

	@Start
	public void startService() {
		ConsoleLogger.getConsoleLogger().log("BatteryService started...");
		this.app.getBatteryService().getBatteryStatus(new BatteryStatusCallback() {

			@Override
			public void onBatteryStatus(final BatteryStatus currentStatus) {
				Scheduler.get().scheduleDeferred(new ScheduledCommand() {

					@Override
					public void execute() {
						ConsoleLogger.getConsoleLogger().log("onBatteryStatus update: " + currentStatus);
						AppModel model = app.<AppModel> getCurrentAppState();
						model.setBatteryStatus(currentStatus);
						app.updateAppState((AppModel) model);
						app.getStorageService().store(AppModel.class.toString(), model);
					}
				});

			}
		});
	}

}
