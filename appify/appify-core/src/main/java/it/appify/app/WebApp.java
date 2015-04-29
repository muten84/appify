package it.appify.app;

import it.appify.api.Geolocation;

/**
 * WebApp interface to control navigation, the app state and its service providers such as Geolocation, Battery etc..
 * 
 * @author Luigi
 *
 * @param <AppState>
 *            the type of your app model state
 */
public interface WebApp<AppState> {

	public void updateAppState(AppState state);

	public void startApp(AppState initialState);

	public void moveTo(String pageId);

	public void back();	
	
	public Geolocation getGeolocationService();
	
}
