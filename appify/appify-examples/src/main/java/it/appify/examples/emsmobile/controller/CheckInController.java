package it.appify.examples.emsmobile.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;

@Controller(page = "dumpPage")
public class CheckInController {

	private WebApp<EmsMobileModel> app;

	public CheckInController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@ViewHandler(eventType = "click", viewId = "checkInBtn")
	public void onCheckIn() {
		showModal("waitModal");
	}

	@ViewHandler(eventType = "click", viewId = "closeWaitModalBtn")
	public void onCloseModal() {
		showModal("waitModal");
	}

	protected void showModal(String name) {
		app.getCurrentPage().toggleClassViewStyle(name, "active");
	}
}
