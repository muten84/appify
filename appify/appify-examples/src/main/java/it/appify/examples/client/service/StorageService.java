package it.appify.examples.client.service;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.app.WebApp;
import it.appify.examples.client.model.AppModel;
import it.appify.logging.ConsoleLogger;

@Service(name="examples.StorageService")
public class StorageService {

	private WebApp<?> webapp;

	public StorageService(WebApp<?> webapp) {
		this.webapp = webapp;

	}

	@Start
	public void start() {
		AppModel model = this.webapp.<AppModel> getCurrentAppState();
		ConsoleLogger.getConsoleLogger().log("StorageService initialized:  " + model.getTitle() + " - "
				+ model.getContent());
		this.webapp.getStorageService().store(AppModel.class.toString(), model);
		model = this.webapp.getStorageService().<AppModel> get(
				AppModel.class.toString());
		ConsoleLogger.getConsoleLogger().log("StorageService test, model stored: " + model);
	}

}
