package it.appify.examples.emsmobile;

import it.appify.examples.emsmobile.model.EmsMobileModel;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.shared.GWT;

public class EmsMobileEntryPoint implements EntryPoint {

	@Override
	public void onModuleLoad() {
		EmsMobileApp app = GWT.create(EmsMobileApp.class);
		app.startApp(createInitialState());

	}

	private EmsMobileModel createInitialState() {
		EmsMobileModel appState = new EmsMobileModel();
		appState.setDumpUrl("http://10.118.32.98/dump118/dumpMobileServlet");
		return appState;
	}

}
