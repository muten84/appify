package it.appify.examples.client.service;

import com.google.gwt.core.shared.GWT;

import it.appify.annotations.Controller;
import it.appify.api.Battery.BatteryStatusCallback;
import it.appify.api.BatteryStatus;
import it.appify.app.WebApp;

@Controller
public class BatteryService {

	private WebApp<?> app;

	public BatteryService(WebApp<?> app) {
		this.app = app;
		this.app.getBatteryService().getBatteryStatus(new BatteryStatusCallback() {

			@Override
			public void onBatteryStatus(BatteryStatus currentStatus) {
				GWT.log("onBatteryStatus update: " + currentStatus);
			}
		});
	}

}
