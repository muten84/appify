package it.appify.examples.emsmobile.service;

import it.appify.annotations.Start;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;


public class SoundService {
	
	WebApp<EmsMobileModel> app;

	public SoundService(WebApp<EmsMobileModel> app) {
		this.app = app;
	}
	
	@Start
	public void start() {
		
	}
}
