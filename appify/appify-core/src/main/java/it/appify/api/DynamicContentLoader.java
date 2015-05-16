package it.appify.api;

import com.google.gwt.dom.client.Element;

public interface DynamicContentLoader {

	public static interface ContentLoadedListener {
		public void done();

		public void error();
	}

	public void load(String selector, String url, ContentLoadedListener l);

	public void load(Element element, String url, ContentLoadedListener l);

	public Element[] scanDynamicMarkerElements(String attribute);

}
