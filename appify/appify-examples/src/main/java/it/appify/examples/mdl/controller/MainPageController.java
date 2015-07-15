package it.appify.examples.mdl.controller;

import com.google.gwt.dom.client.Element;

import it.appify.annotations.Controller;
import it.appify.annotations.OnPageReady;
import it.appify.annotations.ViewElement;
import it.appify.app.WebApp;
import it.appify.examples.mdl.MdlModel;
import it.appify.logging.ConsoleLogger;

@Controller(page = "mdlmain")
public class MainPageController {
	
	@ViewElement("header")
	public Element el;

	private WebApp<MdlModel> app;

	public MainPageController(WebApp<MdlModel> app) {
		this.app = app;
	}

	@OnPageReady
	public void init() {
		ConsoleLogger.getConsoleLogger().log("on mdlmain page ready");
		_updateDom();
	}
	
	private  native void _updateDom()/*-{
		$wnd.componentHandler.upgradeDom();
	}-*/;
	//

	
}
