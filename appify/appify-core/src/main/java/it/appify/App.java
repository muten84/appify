package it.appify;

import it.appify.app.WebApp;

import com.google.gwt.core.shared.GWT;

public class App {

	public static <AppState> WebApp<AppState> appify(WebApp<AppState> app) {
		return GWT.create(app.getClass());
	}
}
