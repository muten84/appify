package it.appify.examples.client;

import it.appify.examples.client.app.ExampleApp;
import it.appify.examples.client.model.AppModel;
import it.appify.examples.client.model.ChildModel;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.shared.GWT;

public class AppifyEntryPoint implements EntryPoint {

	@Override
	public void onModuleLoad() {
		// exportJsAPI();
		ExampleApp myApp = GWT.create(ExampleApp.class);
		myApp.startApp(initializeAppState());
		AppModel model = myApp.getCurrentAppState();
		GWT.log("Current App state is: "+model.getTitle()+" - "+model.getContent());
		model = myApp.getStorageService().get(AppModel.class.toString());
		GWT.log("Stored App state is: "+model.getTitle()+" - "+model.getContent());
		model = myApp.getCurrentAppState();
		myApp.getStorageService().store(AppModel.class.toString(), myApp.getCurrentAppState());
		GWT.log("New Stored App state is: "+model.getTitle()+" - "+model.getContent());
	}

	// public void exportJsAPI() {
	// Exporter exporter = (Exporter) GWT.create(ExportableAppify.class);
	// }

	public AppModel initializeAppState() {
		final AppModel m = new AppModel("Main Page App Title");
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
