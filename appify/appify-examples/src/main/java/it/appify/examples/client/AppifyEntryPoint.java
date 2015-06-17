package it.appify.examples.client;

import it.appify.app.WebApp;
import it.appify.app.WebApp.AppListener;
import it.appify.examples.client.app.ExampleApp;
import it.appify.examples.client.model.AppModel;
import it.appify.examples.client.model.ChildModel;
import it.appify.logging.ConsoleLogger;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.shared.GWT;

public class AppifyEntryPoint implements EntryPoint {

	@Override
	public void onModuleLoad() {
		// exportJsAPI();
		final ExampleApp myApp = GWT.create(ExampleApp.class);
		myApp.startApp(initializeAppState(), new AppListener<AppModel>() {

			@Override
			public void onAppStart(WebApp<AppModel> app) {
				AppModel model = myApp.getCurrentAppState();
				ConsoleLogger.getConsoleLogger().log("onAppStart Current App state is: " + model.getTitle() + " - " + model.getContent());
				app.updateAppState(model);

			}
		});
		AppModel model = myApp.getCurrentAppState();
		ConsoleLogger.getConsoleLogger().log("Current App state is: " + model.getTitle() + " - " + model.getContent());

	}

	// public void exportJsAPI() {
	// Exporter exporter = (Exporter) GWT.create(ExportableAppify.class);
	// }

	public AppModel initializeAppState() {
		final AppModel m = new AppModel("Appify Examples");
		m.setContent("Lorem Ipsum Content");
		m.setChilePageTitle("Child Page Title");
		m.setChildPageContent("Child Page Content");
		m.setInput("Input text injected");
		ChildModel c = new ChildModel();
		c.setTitle("Child object Title");
		c.setContent("Child object content");
		m.setChild(c);
		return m;
	}

}
