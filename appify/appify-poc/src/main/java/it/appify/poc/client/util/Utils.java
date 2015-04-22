package it.appify.poc.client.util;

import it.appify.api.HasViewHandlers.Util;
import it.appify.api.HasViewHandlers.ViewHandler;
import it.appify.api.HasViewHandlers.ViewHandlerHolder;

public class Utils {
	
	public static ViewHandlerHolder createClickHandler(String viewId, ViewHandler h) {
		return Util.createHandler(

		viewId, "click", h);
	}

}
