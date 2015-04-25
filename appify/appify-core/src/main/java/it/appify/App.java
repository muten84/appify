package it.appify;

import com.google.gwt.core.shared.GWT;

import it.appify.app.WebApp;

public class App {

	public static <AppState> WebApp<AppState> appify(WebApp<AppState> app) {
		return GWT.create(app.getClass());
	}
}
