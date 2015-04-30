package it.appify.poc.client;

import it.appify.api.ScrOrientation;
import it.appify.api.ScrOrientation.ScreenOrientationCallback;
import it.appify.api.ScreenOrientation;
import it.appify.poc.client.model.Model;
import it.appify.poc.client.util.Utils;
import it.appify.screenorientation.WebScreenOrientationImpl;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;

public class ScreenOrientationEntryPoint implements EntryPoint {

	private ScrOrientation<Element> so;

	@Override
	public void onModuleLoad() {	
		MyWebApp app = GWT.create(MyWebApp.class);		
		Model m = Utils.createModel();
		app.startApp(m);
		so = app.getScreenOrientationService();
		so.addOrientationChangeHandler(new ScreenOrientationCallback() {

			@Override
			public void onScreenOrientationChange(ScreenOrientation newOrientation) {
				GWT.log("onScreenOrientationChange: " + newOrientation.getType() + " - " + newOrientation.getAngle());

			}
		});

		
	}
}
