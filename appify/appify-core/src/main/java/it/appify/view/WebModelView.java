package it.appify.view;

import com.google.gwt.dom.client.Element;

import it.appify.api.ModelView;

public interface WebModelView<M> extends ModelView<M, Element> {

	public void addViewModelHandler(String pageId, String viewId, ViewModelHandlerHolder holder);

}
