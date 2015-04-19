package it.appify.api;

import com.google.gwt.dom.client.Element;

public interface Page extends HasViewHandlers {

	public String getPageId();

	public Element getElementInPage(String elemId);

}
