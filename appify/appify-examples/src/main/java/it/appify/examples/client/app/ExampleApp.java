package it.appify.examples.client.app;

import it.appify.annotations.Battery;
import it.appify.annotations.Geolocation;
import it.appify.app.WebApp;
import it.appify.examples.client.model.AppModel;


@it.appify.annotations.WebApp(appStateType = AppModel.class) //appify your app and bind to your model
@Battery //inject battery status service in your app
@Geolocation(enableHighAccuracy=true, maxAge = 5000, timeout = 5000) //inject geolocation service in your app
public interface ExampleApp extends WebApp<AppModel> {

}
