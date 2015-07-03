package it.appify.examples.emsmobile.service;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.api.Battery.BatteryStatusCallback;
import it.appify.api.BatteryStatus;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;

@Service
public class BatteryStatusService implements GenericService {

	private WebApp<EmsMobileModel> app;

	public BatteryStatusService(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	private boolean stop = false;

	private boolean started = false;

	@Start
	public void startBatteryMonitor() {
		ServiceHelper.register("BatteryStatusService", this);
		if (!started) {
			started = true;			
			Scheduler.get().scheduleFixedPeriod(new RepeatingCommand() {

				@Override
				public boolean execute() {
					if (stop) {
						return false;
					}
					check();
					return true;
				}
			}, 10000);
		}
	}

	protected void check() {
		this.app.getBatteryService().getBatteryStatus(new BatteryStatusCallback() {

			@Override
			public void onBatteryStatus(BatteryStatus currentStatus) {
				double level = currentStatus.getLevel();
				EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();

				if (level < 0.4) {
					model.getBarStatus().setBatteryStatus("status-off");
				} else if (level > 0.4 && level < 0.6) {
					model.getBarStatus().setBatteryStatus("status-idle");
				} else if (level > 0.6) {
					model.getBarStatus().setBatteryStatus("status-on");
				}
				app.updateAppState(model);
				app.getCurrentPage().popover("batteryStateBtn", "Stato Batteria", "" + currentStatus.getLevel() * 100 + "%", "fade");
			}
		});
	}

	@Override
	public void start() {
		stop = false;
		startBatteryMonitor();

	}

	@Override
	public void stop() {
		stop = true;
		started = false;

	}

}
