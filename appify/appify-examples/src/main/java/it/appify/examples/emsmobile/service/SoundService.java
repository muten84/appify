package it.appify.examples.emsmobile.service;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.util.Registry;
import it.appify.sound.BuzzSound;


@Service
public class SoundService {
	
	WebApp<EmsMobileModel> app;
	
	private BuzzSound activationSound;

	public SoundService(WebApp<EmsMobileModel> app) {
		this.app = app;
	}
	
	@Start
	public void start() {
		activationSound = new BuzzSound("to-cache/sounds/sound");
		Registry.register("activationSound", activationSound);
	}
}
