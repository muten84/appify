package it.appify.view;

import java.io.Serializable;

import com.google.gwt.dom.client.Element;

public interface Page extends HasHandlers, HasModel<Serializable> {

	public Element getElementInPage(String elemId);

}
