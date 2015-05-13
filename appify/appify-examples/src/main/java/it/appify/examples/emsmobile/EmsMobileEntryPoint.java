package it.appify.examples.emsmobile;

import it.appify.app.WebApp;
import it.appify.app.WebApp.AppListener;
import it.appify.examples.emsmobile.model.BarStatus;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.model.Item;
import it.appify.examples.emsmobile.model.Section;

import java.util.Arrays;
import java.util.List;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.shared.GWT;

public class EmsMobileEntryPoint implements EntryPoint {

	@Override
	public void onModuleLoad() {
		EmsMobileApp app = GWT.create(EmsMobileApp.class);
		app.startApp(createInitialState(), new AppListener<EmsMobileModel>() {

			@Override
			public void onAppStart(WebApp<EmsMobileModel> app) {
				GWT.log("App started: " + app.<EmsMobileModel> getCurrentAppState().getBarStatus().getGpsStatus());
				app.updateAppState(app.<EmsMobileModel> getCurrentAppState());
				app.getCurrentPage().popover("gpsStateBtn", "Stato GPS", "", "fade");
			}
		});

	}

	private EmsMobileModel createInitialState() {
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
