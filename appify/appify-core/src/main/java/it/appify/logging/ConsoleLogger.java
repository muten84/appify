package it.appify.logging;

import com.google.gwt.core.shared.GWT;

import it.appify.api.Logger;

public class ConsoleLogger implements Logger {

	private static ConsoleLogger CONSOLE_LOGGER;

	public static ConsoleLogger getConsoleLogger() {
		if (CONSOLE_LOGGER == null) {
			CONSOLE_LOGGER = new ConsoleLogger();
		}
		return CONSOLE_LOGGER;
	}

	private ConsoleLogger() {
	}

	@Override
	public void log(String message) {
		_logToJsConsole(message);
	}

	private native void _logToJsConsole(String msg) /*-{
		console.log(msg)
	}-*/;

	@Override
	public void log(String message, Throwable t) {
		if (t != null) {
			message += " - " + t.getMessage();
			GWT.log("The error is: ", t);
		}
		_logToJsConsole(message);
	}

}
