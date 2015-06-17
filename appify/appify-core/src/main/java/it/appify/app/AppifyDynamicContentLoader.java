package it.appify.app;

import it.appify.api.DynamicContentLoader;
import it.appify.logging.ConsoleLogger;

import com.google.gwt.dom.client.Element;

public class AppifyDynamicContentLoader implements DynamicContentLoader {

	@Override
	public void load(String selector, String url, ContentLoadedListener l) {
		_load(selector, url);
	}

	@Override
	public Element[] scanDynamicMarkerElements(String attribute) {
		return _scanDynamicMarkerElements(attribute);
	}

	@Override
	public Element[] scanDynamicMarkerElementsExcept(String inAttribute,
			String notAttribute) {
		return _scanDynamicMarkerElements(inAttribute, notAttribute);

	}

	@Override
	public void load(Element element, String url, ContentLoadedListener l) {
		_load(element, url, l);

	}

	private native Element[] _scanDynamicMarkerElements(String attribute)/*-{
		return $wnd.$("[" + attribute + "]");
	}-*/;

	private native Element[] _scanDynamicMarkerElements(String attribute1,
			String attribute2)/*-{
		return $wnd.$("[" + attribute1 + "]:not([" + attribute2 + "])");
	}-*/;

	private void done() {
		ConsoleLogger.getConsoleLogger().log("done...");
	}

	private native void _load(Element el, String url, ContentLoadedListener l)/*-{
		console.log("loading element: " + url);
		var that = this;
		$wnd
				.$(el)
				.load(
						url,
						function(response, status, xhr) {
							if (status == "success") {
								console.log("dynamic content loaded: "+response+" - "+status+" - "+xhr);
								l.@it.appify.api.DynamicContentLoader.ContentLoadedListener::done()();

							} else if (status == "error") {
								console.log("Error: " + xhr.status + ": "
										+ xhr.statusText);
								l
										.@it.appify.api.DynamicContentLoader.ContentLoadedListener::error();
							}
						});
		//		$wnd.$.ajax({
		//			url : resource,
		//			context : document.body
		//		}).done(function() {
		//			$(this).addClass("done");
		//		});

	}-*/;

	private native void _load(String selector, String url)/*-{
		$wnd.$(selector).load(url, function(response, status, xhr) {
			if (status == "success") {
				console.log("dynamic content loaded: "+response+" - "+status+" - "+xhr);
			} else if (status == "error") {
				console.log("Error: " + xhr.status + ": " + xhr.statusText);
			}
		});
		//		$wnd.$.ajax({
		//			url : resource,
		//			context : document.body
		//		}).done(function() {
		//			$(this).addClass("done");
		//		});

	}-*/;

}
