package it.appify.examples.emsmobile;

import it.appify.app.WebApp;
import it.appify.app.WebApp.AppListener;
import it.appify.examples.emsmobile.model.BarStatus;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.model.Item;
import it.appify.examples.emsmobile.model.Section;
import it.appify.examples.emsmobile.util.Utils;

import java.util.Arrays;
import java.util.List;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;
import com.google.gwt.core.shared.GWT;

public class EmsMobileEntryPoint implements EntryPoint {

	@Override
	public void onModuleLoad() {
		EmsMobileApp app = GWT.create(EmsMobileApp.class);
		app.startApp(createOrRestoreState(app), new AppListener<EmsMobileModel>() {

			@Override
			public void onAppStart(final WebApp<EmsMobileModel> app) {
				GWT.log("App started: " + app.<EmsMobileModel> getCurrentAppState().getBarStatus().getGpsStatus());				
				Scheduler.get().scheduleFixedDelay(new RepeatingCommand() {

					@Override
					public boolean execute() {
						EmsMobileModel model = app.getCurrentAppState();

						if (model.hasTurn() && model.hasActivation()) {
							GWT.log("ACTIVATION IS NOT NULL MOVING TO ACTIVATION PAGE");
							app.moveTo("activationPage");
						} else {
							model.setActivation(null);
							app.updateAppState(model);
							GWT.log("ACTIVATION IS NULL");
						}
						return false;
					}
				}, 2000);

			}
		});

	}

	private EmsMobileModel createOrRestoreState(EmsMobileApp app) {
		EmsMobileModel persistentModel = app.getStorageService().get(EmsMobileModel.class.toString());
		if (persistentModel != null && Utils.checkStorableFreshness(persistentModel, (60 * 60 * 1000))) {
			if (persistentModel.getActivation() != null && persistentModel.getActivation().getPhases() != null) {
				GWT.log("MODEL REFRESHED: " + persistentModel.getActivation().getPhases().size());
			} else {
				GWT.log("MODEL REFRESHED WITHOUT PHASES");
			}
			return persistentModel;
		} else {
			EmsMobileModel appState = new EmsMobileModel();
			appState.setDumpUrl("http://10.118.32.98/dump118/dumpMobileServlet");
			appState.setBarStatus(new BarStatus());
			List<Section> sections = Arrays.asList(new Section[] { //
			new Section("TEST", Arrays.asList(//
			new Item[] { new Item("1", "RADIO MAURO"), new Item("2", "RADIO MAX") }))//
			, new Section("BOLOGNA", Arrays.asList(//
			new Item[] { new Item("3", "MIKE 01"), new Item("4", "MIKE 02") })) //
			});

			appState.setVehicles(sections);
			return appState;
		}
	}

}
