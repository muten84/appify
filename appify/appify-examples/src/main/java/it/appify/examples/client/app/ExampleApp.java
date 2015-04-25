package it.appify.examples.client.app;

import it.appify.app.WebApp;
import it.appify.examples.client.model.AppModel;

@it.appify.annotations.WebApp(appStateType = AppModel.class)
public interface ExampleApp extends WebApp<AppModel> {

}
