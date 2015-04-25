package it.appify.poc.client;

import it.appify.poc.client.model.Model;
import it.appify.poc.client.util.Utils;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.shared.GWT;

public class GeneratedWebAppEntryPoint implements EntryPoint {

	@Override
	public void onModuleLoad() {
		MyWebApp app = GWT.create(MyWebApp.class);
		Model m = Utils.createModel();
		app.startApp(m);
		m.setTitle("Modified Title");
		app.updateAppState(m);
	}

}
