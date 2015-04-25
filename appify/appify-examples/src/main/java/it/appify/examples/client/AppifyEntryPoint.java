package it.appify.examples.client;

import it.appify.examples.client.app.ExampleApp;
import it.appify.examples.client.model.AppModel;
import it.appify.examples.client.model.ChildModel;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.shared.GWT;

public class AppifyEntryPoint implements EntryPoint {

	@Override
	public void onModuleLoad() {
		ExampleApp myApp = GWT.create(ExampleApp.class);
		myApp.startApp(initializeAppState());

	}

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
