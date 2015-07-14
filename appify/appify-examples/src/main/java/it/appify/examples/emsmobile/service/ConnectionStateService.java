package it.appify.examples.emsmobile.service;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.annotations.Stop;
import it.appify.api.ApplicationCache;
import it.appify.api.ApplicationCache.CheckConnectedCallback;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.logging.ConsoleLogger;

@Service(name="emsmobile_ConnectionStateService")
public class ConnectionStateService {

	private WebApp<EmsMobileModel> app;
	private boolean stop;
	private boolean started;

	public ConnectionStateService(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@Start
	public void startCheckConnectionState() {		
		if (!started) {
			stop = false;
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
		String status = this.app.getApplicationCacheService().getStatus();
		EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();
		if(status.equals(ApplicationCache.IDLE) || status.equals(ApplicationCache.UNCACHED)){
			model.getBarStatus().setCacheStatus("");
		}
		else if(status.equals(ApplicationCache.CHECKING) || status.equals(ApplicationCache.DOWNLOADING)){
			model.getBarStatus().setCacheStatus("status-idle");
		}
		else if(status.equals(ApplicationCache.UPDATEREADY)){
			model.getBarStatus().setCacheStatus("status-on");
		}
		else if(status.equals(ApplicationCache.OBSOLETE)){
			model.getBarStatus().setCacheStatus("status-off");
		}		
		app.updateAppState(model);
//		app.getCurrentPage().popover("reloadBtn", "Stato Cache", status+" - "+model.getVersion(), "fade");
		if( model.getBarStatus().getCheckInDate()!=null){
			app.getCurrentPage().popover("checkInAccels", "Orario inizio turno", model.getBarStatus().getCheckInDate(), "fade");
		}
		else{
			app.getCurrentPage().popover("checkInAccels", "Non sei in turno", "", "fade");
		}
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

	

	@Stop
	public void stop() {
		stop = true;
		started  =false;
	}

}
