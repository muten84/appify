package it.appify.examples.emsmobile;

import it.appify.annotations.Battery;
import it.appify.annotations.Geolocation;
import it.appify.annotations.ScreenOrientation;
import it.appify.annotations.Storage;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;

@it.appify.annotations.WebApp(mainPage = "dumpPage", appStateType = EmsMobileModel.class)
@Battery
@Geolocation(enableHighAccuracy = true, maxAge = 5000, timeout = 10000, type = Geolocation.HTML5)
@ScreenOrientation
@Storage(modelType = EmsMobileModel.class)
public interface EmsMobileApp extends WebApp<EmsMobileModel> {

}
