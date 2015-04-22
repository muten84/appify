package it.appify.poc.client;

import it.appify.view.AppJsUtils;

import com.google.gwt.core.shared.GWT;

public class LogUtil {

	public static void log(String msg) {
		// _log(msg);
		if (GWT.isProdMode()) {
			AppJsUtils.alert("", msg, "ok");
		} else {
			GWT.log(msg);
		}
	}

	private final static native void _log(String msg)/*-{
		$wnd.console(msg);
	}-*/;

}
