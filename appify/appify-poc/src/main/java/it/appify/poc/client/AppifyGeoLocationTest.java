package it.appify.poc.client;

import java.util.Arrays;

import it.appify.api.GeoOptions;
import it.appify.api.Geolocation;
import it.appify.api.Geolocation.GeolocationCallback;
import it.appify.api.Geoposition;
import it.appify.api.HasViewHandlers.ViewHandler;
import it.appify.api.HasViewHandlers.ViewHandlerHolder;
import it.appify.api.PageManager;
import it.appify.geolocation.HTML5Geolocation;
import it.appify.poc.client.model.ExampleViewModel;
import it.appify.poc.client.model.Model;
import it.appify.poc.client.util.Utils;
import it.appify.view.AppJsPageManager;
import it.appify.view.AppJsUtils;
import it.appify.view.PageLoader;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.Element;

public class AppifyGeoLocationTest implements EntryPoint {

	private Geolocation geolocation;
	private Model m;
	private PageManager<Element> pm;
	private ExampleViewModel vm;

	@Override
	public void onModuleLoad() {
		GeoOptions options = new GeoOptions();
		options.setEnableHighAccuracy(true);
		options.setMaximumAge(60000);
		options.setTimeout(60000);
		geolocation = new HTML5Geolocation(options);

		// define your model
		m = Utils.createModel();
		// inject pagemanager
		pm = new AppJsPageManager();
		// define a view model
		vm = new ExampleViewModel();

		ViewHandlerHolder h = Utils.createClickHandler("getCurrentPositionBtn", new ViewHandler() {

			@Override
			public void onEvent(String type, String source) {
				GWT.log("watchPosition...");
				geolocation.watchPosition(new GeolocationCallback() {

					@Override
					public void onPosition(Geoposition position) {
						AppJsUtils.alert("Position is...", position.toString(), "OK");

					}

					@Override
					public void onError(int code, String msg) {
						AppJsUtils.alert("Error", "Error code: " + code + " - " + msg, "OK");

					}
				});

			}
		});

		final PageLoader<Element, Model> loader = new PageLoader<Element, Model>(pm, vm);
		// load the page and inject the model instance
		loader.loadPage("mainPage", m, Arrays.asList(new ViewHandlerHolder[] { h }));

	}

}
