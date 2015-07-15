package it.appify.examples.mdl;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;

import it.appify.app.WebApp;
import it.appify.app.WebApp.AppListener;
import it.appify.examples.mdl.controller.MainPageController;
import it.appify.logging.ConsoleLogger;

public class MdlEntryPoint implements EntryPoint {

	@Override
	public void onModuleLoad() {
		MdlApp app = GWT.create(MdlApp.class);
		app.startApp(new MdlModel(), new AppListener<MdlModel>() {

			@Override
			public void onAppVisible() {
				// TODO Auto-generated method stub

			}

			@Override
			public void onAppStart(WebApp<MdlModel> app) {
				ConsoleLogger.getConsoleLogger().log("on app start");
				//MainPageController._updateDom();

			}

			@Override
			public void onAppHidden() {
				// TODO Auto-generated method stub

			}

			@Override
			public void onAppClose() {
				// TODO Auto-generated method stub

			}
		});
	}

}
