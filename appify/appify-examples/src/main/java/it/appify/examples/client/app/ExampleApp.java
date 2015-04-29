package it.appify.examples.client.app;

import it.appify.annotations.Geolocation;
import it.appify.app.WebApp;
import it.appify.examples.client.model.AppModel;

@Geolocation(enableHighAccuracy=true, maxAge = 5000, timeout = 5000)
@it.appify.annotations.WebApp(appStateType = AppModel.class)
public interface ExampleApp extends WebApp<AppModel> {

}
