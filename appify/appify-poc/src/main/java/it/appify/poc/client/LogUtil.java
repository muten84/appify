package it.appify.poc.client;

public class LogUtil {

	public static void log(String msg) {
		_log(msg);
	}

	private final static native void _log(String msg)/*-{
		$wnd.console(msg);
	}-*/;

}
