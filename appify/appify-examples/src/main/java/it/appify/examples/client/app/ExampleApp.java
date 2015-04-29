package it.appify.examples.client.app;

import it.appify.annotations.Battery;
import it.appify.annotations.Geolocation;
import it.appify.annotations.Storage;
import it.appify.app.WebApp;
import it.appify.examples.client.model.AppModel;

//appify your app and bind to your model
@it.appify.annotations.WebApp(appStateType = AppModel.class)
// inject battery status service in your app
@Battery
// inject geolocation service in your app
@Geolocation(enableHighAccuracy = true, maxAge = 5000, timeout = 5000)
// inject storage service of type LOCAL STORAGE for storing and reading AppModel type
@Storage(type = it.appify.api.Storage.LOCAL_STORAGE, modelType = AppModel.class)
public interface ExampleApp extends WebApp<AppModel> {

}
