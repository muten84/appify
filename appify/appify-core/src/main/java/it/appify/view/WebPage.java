package it.appify.view;

import it.appify.api.HasView;
import it.appify.api.Page;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.dom.client.Element;

public class WebPage implements Page<Element>, HasView<Element> {

	public static class ViewHandlerHolder {
		private String viewId;
		private String eventType;
		private ViewHandler handler;

		public String getViewId() {
			return viewId;
		}

		public void setViewId(String viewId) {
			this.viewId = viewId;
		}

		public String getEventType() {
			return eventType;
		}

		public void setEventType(String eventType) {
			this.eventType = eventType;
		}

		public ViewHandler getHandler() {
			return handler;
		}

		public void setHandler(ViewHandler handler) {
			this.handler = handler;
		}

	}

	private Element pageElement;

	private List<ViewHandlerHolder> handlers;

	public WebPage(Element el) {
		this.pageElement = el;
		this.handlers = new ArrayList<WebPage.ViewHandlerHolder>();
	}

	@Override
	public void addViewHandler(String id, String type, ViewHandler h) {
		ViewHandlerHolder holder = new ViewHandlerHolder();
		holder.viewId = id;
		holder.eventType = type;
		holder.handler = h;
		this.handlers.add(holder);
		JavaScriptObject obj = pageElement.cast();
		_addViewHandler("#" + id, type, obj, h);
	}

	private native void _addViewHandler(String id, String type,
			JavaScriptObject p, ViewHandler h)/*-{
		var that = this;
		$wnd
				.$(p)
				.find(id)
				.on(
						type,
						function() {
							h.@it.appify.api.HasViewHandlers.ViewHandler::onEvent(Ljava/lang/String;)(type);
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

	private native JavaScriptObject _getElementInPage(JavaScriptObject obj,
			String elemId)/*-{
		return $wnd.$(obj).find(elemId)[0];
	}-*/;

	@Override
	public Element getRootElement() {
		return pageElement;
	}

}
