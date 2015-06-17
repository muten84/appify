package it.appify.examples.emsmobile.util;

import it.appify.app.WebApp;
import it.appify.logging.ConsoleLogger;

public class ViewUtils {

	public static <E> void updateBtnStatus(WebApp<E> app, String current,
			String viewId) {
		ConsoleLogger.getConsoleLogger().log("updateBtnStatus");
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

	public static void showModal(WebApp<?> app, String name) {
		app.getCurrentPage().toggleClassViewStyle(name, "active");
	}
}
