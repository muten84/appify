package it.appify.view;

import it.appify.api.HasView;
import it.appify.api.Page;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.dom.client.Element;

public class WebPage implements Page<Element>, HasView<Element> {

	private Element pageElement;

	private List<ViewHandlerHolder> handlers;

	public WebPage(Element el) {
		this.pageElement = el;
		this.handlers = new ArrayList<WebPage.ViewHandlerHolder>();
	}

	@Override
	public void addViewHandler(String id, String type, ViewHandler h) {
		ViewHandlerHolder holder = new ViewHandlerHolder();
		holder.setViewId(id);
		holder.setEventType(type);
		holder.setHandler(h);
		this.handlers.add(holder);
		JavaScriptObject obj = pageElement.cast();
		if (!id.startsWith("#")) {
			id = "#" + id;
		}
		_addViewHandler(id, type, obj, h);
	}

	private native void _addViewHandler(String id, String type, JavaScriptObject p, ViewHandler h)/*-{
		var that = this;
		$wnd
				.$(p)
				.find(id)
				.on(
						type,
						function() {
							h.@it.appify.api.HasViewHandlers.ViewHandler::onEvent(Ljava/lang/String;Ljava/lang/String;)(type,id);
						});
	}-*/;

	@Override
	public Element getCurrentView() {
		return pageElement;
	}

	@Override
	public String getViewId() {
		return pageElement.getId();
	}

	@Override
	public String getPageId() {
		return pageElement.getId();
	}

	@Override
	public Element getElementInPage(String elemId) {
		JavaScriptObject obj = pageElement.cast();
		return _getElementInPage(obj, "#" + elemId).cast();
	}

	private native JavaScriptObject _getElementInPage(JavaScriptObject obj, String elemId)/*-{
		return $wnd.$(obj).find(elemId)[0];
	}-*/;

	@Override
	public Element getRootElement() {
		return pageElement;
	}

	@Override
	public Iterator<ViewHandlerHolder> getViewHandlers() {
		return handlers.iterator();
	}

	public Element getPageElement() {
		return pageElement;
	}

	public void setPageElement(Element pageElement) {
		this.pageElement = pageElement;
	}

	@Override
	public void toggleClassViewStyle(String viewId, String className) {
		_toggleClassOnElem(viewId, className);
	}

	// classie.toggle( this, 'active' );
	private native void _toggleClassOnElem(String viewId, String className)/*-{
		var el = $doc.getElementById(viewId);
		$wnd.classie.toggle(el, className);
	}-*/;

}
