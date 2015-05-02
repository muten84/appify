package it.appify.app;

import it.appify.api.Battery;
import it.appify.api.Geolocation;
import it.appify.api.Storage;
import it.appify.screenorientation.WebScreenOrientation;

/**
 * WebApp interface to control navigation, the app state and its service
 * providers such as Geolocation, Battery etc..
 * 
 * @author Luigi
 *
 * @param <AppState>
 *            the type of your app model state
 */
public interface WebApp<AppState> {

	public interface AppListener<AppState> {
		public void onAppStart(WebApp<AppState> app);
	}

	public void updateAppState(AppState state);

	@SuppressWarnings("hiding")
	public <AppState> AppState getCurrentAppState();

	public void startApp(AppState initialState);

	public void startApp(AppState initialAppState,
			AppListener<AppState> callback);

	public void moveTo(String pageId);

	public void back();

	public Geolocation getGeolocationService();

	public Battery getBatteryService();

	public Storage getStorageService();

	public WebScreenOrientation getScreenOrientationService();

}
