package it.appify.examples.emsmobile.service;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.api.ScrOrientation.ScreenOrientationCallback;
import it.appify.api.Screen;
import it.appify.api.ScreenOrientation;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.logging.ConsoleLogger;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.ScheduledCommand;

@Service
public class ScreenOrientationService {

	private WebApp<EmsMobileModel> webapp;

	public ScreenOrientationService(WebApp<EmsMobileModel> webapp) {
		this.webapp = webapp;
		// just injected your screen orientation service try to request full
		// screen

	}

	@Start
	public void start() {
		ConsoleLogger.getConsoleLogger().log(">>>>>>>>>>>>>>>>>>>>>>>>>>>><ScreenOrientationService start");
		webapp.getScreenOrientationService().addOrientationChangeHandler(new ScreenOrientationCallback() {
			
			@Override
			public void onScreenOrientationChange(ScreenOrientation newOrientation) {
				ConsoleLogger.getConsoleLogger().log("orientation screen changed: "+newOrientation.getType());
				
			}
		});
//		final Screen screen = this.webapp.getScreenOrientationService()
//				.getScreen();
//		final ScreenOrientation screenOrientation = this.webapp
//				.getScreenOrientationService().getScreenOrientation();
//		final EmsMobileModel model = webapp.getCurrentAppState();
//
//		Scheduler.get().scheduleDeferred(new ScheduledCommand() {
//
//			@Override
//			public void execute() {
//				ConsoleLogger.getConsoleLogger().log("screen: " + screen.getAvailWidth() + " - "
//						+ screen.getAvailHeight());
//				model.setScreen(screen);
//				model.setScreenOrientation(screenOrientation);
//				webapp.updateAppState(model);
//				webapp.getStorageService().store(EmsMobileModel.class.toString(),
//						model);
//
//			}
//		});
		
	

	}
	
	

}
