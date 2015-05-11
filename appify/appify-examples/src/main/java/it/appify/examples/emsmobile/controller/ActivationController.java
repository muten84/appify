package it.appify.examples.emsmobile.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.app.WebApp;

@Controller(page = "activationPage")
public class ActivationController {

	private WebApp<EmsMobileModel> app;

	public ActivationController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@ViewHandler(eventType = "click", viewId = "confirmModalBtn")
	public void onActivatioConfirm() {
		app.getCurrentPage().closeModal("intervIncomeModal");
	}

}
