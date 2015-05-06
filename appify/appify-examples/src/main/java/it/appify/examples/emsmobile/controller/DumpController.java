package it.appify.examples.emsmobile.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.dom.client.Element;

@Controller(page = "dumpPage")
public class DumpController {

	private WebApp<EmsMobileModel> app;

	public DumpController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@ViewHandler(eventType = "click", viewId = "refreshDumpBtn")
	public void onRefreshDump() {
		Element frameElement = app.<Element> getViewFragment("dumpFrame");
		EmsMobileModel model = app.getCurrentAppState();
		_refreshFrame(frameElement.cast(), model.getDumpUrl());
	}

	private native void _refreshFrame(JavaScriptObject frame, String url)/*-{		
		frame.src = url;
	}-*/;
}
