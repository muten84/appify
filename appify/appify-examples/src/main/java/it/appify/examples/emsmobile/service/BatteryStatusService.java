package it.appify.examples.emsmobile.service;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.api.Battery.BatteryStatusCallback;
import it.appify.api.BatteryStatus;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.util.ViewUtils;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;

@Service
public class BatteryStatusService {

	private WebApp<EmsMobileModel> app;

	public BatteryStatusService(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@Start
	public void startBatteryMonitor() {
		Scheduler.get().scheduleFixedPeriod(new RepeatingCommand() {

			@Override
			public boolean execute() {
				check();
				return true;
			}
		}, 10000);

	}

	protected void check() {
		this.app.getBatteryService().getBatteryStatus(
				new BatteryStatusCallback() {

					@Override
					public void onBatteryStatus(BatteryStatus currentStatus) {
						double level = currentStatus.getLevel();
						EmsMobileModel model = app
								.<EmsMobileModel> getCurrentAppState();

						if (level < 0.4) {
							model.getBarStatus().setBatteryStatus("status-off");
						} else if (level > 0.4 && level < 0.6) {
							model.getBarStatus()
									.setBatteryStatus("status-idle");
						} else if (level > 0.6) {
							model.getBarStatus().setBatteryStatus("status-on");
						}
						app.updateAppState(model);
						app.getCurrentPage().popover("batteryStateBtn",
								"Stato Batteria",
								""+currentStatus.getLevel() * 100+"%", "fade");
					}
				});
	}

}
