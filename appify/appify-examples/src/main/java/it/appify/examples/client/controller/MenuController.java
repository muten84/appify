package it.appify.examples.client.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;

import com.google.gwt.core.shared.GWT;

@Controller
public class MenuController {

	private WebApp<?> app;

	public MenuController(WebApp<?> app) {
		this.app = app;
	}

	@ViewHandler(viewId = "firstMenuBtn", eventType = "click")
	public void onFirstBtnClicked() {
		GWT.log("First menu button clicked");
	}

	@ViewHandler(viewId = "showLeft", eventType = "click")
	public void onMenuClick() {
		GWT.log("menu show clicked");
		showMenu();
	}

	private native void showMenu()/*-{
		var menuLeft = $doc.getElementById('cbp-spmenu-s1');
		var pushable = $doc.getElementById('pushableContent');
		//cbp-spmenu-push-toleft
		$wnd.classie.toggle(pushable, 'cbp-spmenu-push-toright');
		$wnd.classie.toggle(menuLeft, 'cbp-spmenu-open');
	}-*/;

}
