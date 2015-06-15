package it.appify.examples.emsmobile.util;

import it.appify.api.Storable;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.Activation;
import it.appify.examples.emsmobile.model.AddressDetail;
import it.appify.examples.emsmobile.model.EmsMobileModel;

public class Utils {

	public static Activation createActivation() {
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
		address.setLocalityNote("ACCESSO LATERALE CHIUSO AI MEZZI PESANTI");
		address.setpLocationNote(" - ");
		a.setAddress(address);
		return a;
	}

	public static boolean checkStorableFreshness(Storable model, long timeout) {
		long timestamp = model.getTimestamp();
		long now = System.currentTimeMillis();
		long diff = now - timestamp;
		return diff < timeout;
	}

	public static Activation restoreActivation(WebApp<EmsMobileModel> app) {
		EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();
		Activation act = model.getActivation();
		if (act != null) {
			long activationTimestamp = act.getTimestamp();
			long now = System.currentTimeMillis();
			long diff = now - activationTimestamp;
			diff = diff / 1000 / 60;
			if (diff <= 480) {
				return act;
			}
		}
		return null;
	}

}
