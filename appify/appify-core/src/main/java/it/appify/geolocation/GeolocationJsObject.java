package it.appify.geolocation;

import com.google.gwt.core.client.JavaScriptObject;

public class GeolocationJsObject extends JavaScriptObject {

	protected GeolocationJsObject() {

	}

	public static native final JavaScriptObject getGeolocation()/*-{
		return $wnd.navigator.geolocation;
	}-*/;

	public native final void getCurrentPosition()/*-{
		$wnd.navigator.geolocation.getCurrentPosition(function(position) {
		}, function(error) {
		})
	}-*/;

}
