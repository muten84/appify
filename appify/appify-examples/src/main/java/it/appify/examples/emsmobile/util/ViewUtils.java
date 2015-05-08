package it.appify.examples.emsmobile.util;

import it.appify.app.WebApp;

import com.google.gwt.core.shared.GWT;

public class ViewUtils {

	public static <E> void updateBtnStatus(WebApp<E> app, String current, String viewId) {
		GWT.log("updateBtnStatus");
		if (app.getCurrentPage().hasStyle(viewId, current)) {
			return;
		} else {
			// disable all
			if (app.getCurrentPage().hasStyle(viewId, "status-on")) {
				app.getCurrentPage().toggleClassViewStyle(viewId, "");
			}
			if (app.getCurrentPage().hasStyle(viewId, "status-off")) {
				app.getCurrentPage().toggleClassViewStyle(viewId, "");
			}
			if (app.getCurrentPage().hasStyle(viewId, "status-idle")) {
				app.getCurrentPage().toggleClassViewStyle(viewId, "");
			}
			app.getCurrentPage().toggleClassViewStyle(viewId, current);

		}

	}
}
