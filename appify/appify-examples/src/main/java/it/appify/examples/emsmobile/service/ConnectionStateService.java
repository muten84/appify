package it.appify.examples.emsmobile.service;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.api.ApplicationCache.CheckConnectedCallback;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;

@Service
public class ConnectionStateService implements GenericService {

	private WebApp<EmsMobileModel> app;
	private boolean stop;
	private boolean started;

	public ConnectionStateService(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@Start
	public void startCheckConnectionState() {
		ServiceHelper.register("ConnectionStateService", this);
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
			}, 5000);
		}
	}

	protected void check() {
		this.app.getApplicationCacheService().getConnetionStatus(new CheckConnectedCallback() {

			@Override
			public void onOnline() {
				EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();
				model.getBarStatus().setConnectionStatus("status-on");
				app.updateAppState(model);
				app.getCurrentPage().popover("connectionStateBtn", "Stato Connessione", "Online", "fade");
			}

			@Override
			public void onOffline() {
				EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();
				model.getBarStatus().setConnectionStatus("status-off");
				app.updateAppState(model);
				app.getCurrentPage().popover("connectionStateBtn", "Stato Connessione", "Offline", "fade");
			}
		});
	}

	@Override
	public void start() {
		stop = false;
		startCheckConnectionState();

	}

	@Override
	public void stop() {
		stop = true;
		started  =false;
	}

}
