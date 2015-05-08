package it.appify.examples.emsmobile.service;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;
import com.google.gwt.core.shared.GWT;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.api.Geolocation.GeolocationCallback;
import it.appify.api.Geoposition;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.util.ViewUtils;

@Service
public class GeolocationService {

	private WebApp<EmsMobileModel> app;

	public GeolocationService(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@Start
	public void startGeolocationService() {
		Scheduler.get().scheduleFixedPeriod(new RepeatingCommand() {

			@Override
			public boolean execute() {
				check();
				return true;
			}
		}, 5000);

	}

	protected void check() {
		// updateBtnStatus("status-idle", "gpsStateBtn");
		this.app.getGeolocationService().getCurrentPosition(
				new GeolocationCallback() {

					@Override
					public void onPosition(Geoposition position) {
						GWT.log("onPosition geolocation service");
						EmsMobileModel model = app
								.<EmsMobileModel> getCurrentAppState();
						model.setPosition(position);
						model.getBarStatus().setGpsStatus("status-on");
						app.updateAppState(model);
						app.getCurrentPage().popover(
								"gpsStateBtn",
								"Stato GPS",
								position.getCoords().getLatitude() + " "
										+ position.getCoords().getLongitude(),
								"fade");

					}

					@Override
					public void onError(int code, String msg) {
						GWT.log("onError geolocation service");
						EmsMobileModel model = app
								.<EmsMobileModel> getCurrentAppState();
						model.getBarStatus().setGpsStatus("status-off");
						app.updateAppState(model);

					}
				});
	}

}
