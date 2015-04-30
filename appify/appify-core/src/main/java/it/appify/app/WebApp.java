package it.appify.app;

import com.google.gwt.dom.client.Element;

import it.appify.api.Battery;
import it.appify.api.Geolocation;
import it.appify.api.ScrOrientation;
import it.appify.api.Storage;
import it.appify.screenorientation.WebScreenOrientation;

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
	
	@SuppressWarnings("hiding")
	public <AppState> AppState getCurrentAppState();

	public void startApp(AppState initialState);

	public void moveTo(String pageId);

	public void back();	
	
	public Geolocation getGeolocationService();
	
	public Battery getBatteryService();
	
	public Storage getStorageService();
	
	public WebScreenOrientation getScreenOrientationService();
	
}
