package it.appify.examples.emsmobile.service;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.Activation;
import it.appify.examples.emsmobile.model.AddressDetail;
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
				String vehicleCode = model.getBarStatus().getVehicleCode();
				if (vehicleCode == null || vehicleCode.isEmpty()) {
					// not in turn retry next iteration
					GWT.log(">>Activation terminal not in turn...");
					return true;
				} else {
					EmsMobileModel currentModel = app.<EmsMobileModel> getCurrentAppState();
					Activation a = new Activation("16000001");
					a.setCriticity("R");
					a.setPathology("C01");
					a.setPlace("S");
					a.setAddressSummary("LARGO NIGRISOLI 22, BOLOGNA");
					StringBuffer buff = new StringBuffer();
					buff.append("C01: TRAUMATICA\n");
					buff.append("ENTI ATTIVATI: CARABINIERI\n");
					a.setNoteSummary(buff.toString());
					AddressDetail address = new AddressDetail();
					address.setStreetNote("DA VIA CALABRIA TRA I CIVICI 31 E 33 NEL TRATTO COMPRESO TRA VIA BELLARIA E VIA SARDEGNA, INCROCIA VIA UMBRIA E TERMINA SENZA USCITA. I CIVICI  3 - 4 - 5 SONO TRA VIA UMBRIA E IL TRATTO SENZA USCITA. IL 7 E' TRA VIA UMBRIA E VIA CALABRIA (SENSO UNICO)");
					a.setAddress(address);

					currentModel.setActivation(a);
					app.updateAppState(currentModel);
					GWT.log(">>Activation showing...");

					app.getCurrentPage().showModal("intervIncomeModal");
					return false;
				}
			}
		}, 10000);
	}

}
