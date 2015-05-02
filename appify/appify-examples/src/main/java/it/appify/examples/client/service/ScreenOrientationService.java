package it.appify.examples.client.service;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.annotations.ViewHandler;
import it.appify.api.Screen;
import it.appify.api.ScreenOrientation;
import it.appify.app.WebApp;
import it.appify.examples.client.model.AppModel;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.ScheduledCommand;
import com.google.gwt.core.shared.GWT;

@Service
public class ScreenOrientationService {

	private WebApp<AppModel> webapp;

	public ScreenOrientationService(final WebApp<AppModel> webapp) {
		this.webapp = webapp;
		// just injected your screen orientation service try to request full
		// screen

	}

	@Start
	public void start() {
		final Screen screen = this.webapp.getScreenOrientationService()
				.getScreen();
		final ScreenOrientation screenOrientation = this.webapp
				.getScreenOrientationService().getScreenOrientation();
		final AppModel model = webapp.getCurrentAppState();

		Scheduler.get().scheduleDeferred(new ScheduledCommand() {

			@Override
			public void execute() {
				GWT.log("screen: " + screen.getAvailWidth() + " - "
						+ screen.getAvailHeight());
				model.setScreen(screen);
				model.setScreenOrientation(screenOrientation);
				webapp.updateAppState(model);
				webapp.getStorageService().store(AppModel.class.toString(),
						model);

			}
		});

	}

}
