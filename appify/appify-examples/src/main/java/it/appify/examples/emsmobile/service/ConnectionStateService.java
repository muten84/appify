package it.appify.examples.emsmobile.service;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.api.ApplicationCache.CheckConnectedCallback;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.util.ViewUtils;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;

@Service
public class ConnectionStateService {

	private WebApp<EmsMobileModel> app;

	public ConnectionStateService(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@Start
	public void startCheckConnectionState() {
		Scheduler.get().scheduleFixedPeriod(new RepeatingCommand() {

			@Override
			public boolean execute() {
				check();
				return true;
			}
		}, 5000);

	}

	protected void check() {
		this.app.getApplicationCacheService().getConnetionStatus(
				new CheckConnectedCallback() {

					@Override
					public void onOnline() {
						EmsMobileModel model = app
								.<EmsMobileModel> getCurrentAppState();
						model.getBarStatus().setConnectionStatus("status-on");
						app.updateAppState(model);
						app.getCurrentPage().popover("connectionStateBtn",
								"Stato Connessione", "Online", "fade");
					}

					@Override
					public void onOffline() {
						EmsMobileModel model = app
								.<EmsMobileModel> getCurrentAppState();
						model.getBarStatus().setConnectionStatus("status-off");
						app.updateAppState(model);
						app.getCurrentPage().popover("connectionStateBtn",
								"Stato Connessione", "Offline", "fade");
					}
				});
	}

}
