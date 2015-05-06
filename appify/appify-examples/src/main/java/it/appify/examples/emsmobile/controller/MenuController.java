package it.appify.examples.emsmobile.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;

@Controller(page="dumpPage")
public class MenuController {

	private WebApp<EmsMobileModel> app;

	public MenuController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@ViewHandler(eventType = "click", viewId = "showMenuBtn")
	public void controlMenu() {
		if (app.isMenuOpen()) {
			app.closeContextMenu();
		} else {
			app.openContextMenu("content");
		}
	}

}
