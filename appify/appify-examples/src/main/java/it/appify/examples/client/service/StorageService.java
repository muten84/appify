package it.appify.examples.client.service;

import com.google.gwt.core.shared.GWT;

import it.appify.annotations.Controller;
import it.appify.app.WebApp;
import it.appify.examples.client.model.AppModel;

@Controller
public class StorageService {

	private WebApp<?> webapp;

	public StorageService(WebApp<?> webapp) {
		this.webapp = webapp;
		AppModel model = this.webapp.<AppModel> getCurrentAppState();
		GWT.log("StorageService initialized:  storing current app state model");
		this.webapp.getStorageService().store(AppModel.class.toString(), model);
		model = this.webapp.getStorageService().<AppModel> get(AppModel.class.toString());
		GWT.log("StorageService test, model stored: " + model);
	}

}
