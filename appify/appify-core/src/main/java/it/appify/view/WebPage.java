/*
 * Appify - a tiny frontend framework to build complex mobile apps.
 * 
 * Copyright (C) 2015 Luigi Bifulco Appify is free software: you can
 * redistribute it and/or modify it under the terms of the GNU General Public
 * License as published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */
package it.appify.view;

import it.appify.api.HasView;
import it.appify.api.Page;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.shared.GWT;
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

	private native void _addViewHandler(String id, String type,
			JavaScriptObject p, ViewHandler h)/*-{
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

	private native JavaScriptObject _getElementInPage(JavaScriptObject obj,
			String elemId)/*-{
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
		GWT.log("toggleClassViewStyle: " + viewId + " - " + className);
		_toggleClassOnElem(viewId, className);
	}

	// classie.toggle( this, 'active' );
	private native void _toggleClassOnElem(String viewId, String className)/*-{
		console.log('_toggleClassOnElem: ' + viewId + " - " + className);
		var el = $doc.getElementById(viewId);
		console.log("Element found: " + el);
		$wnd.classie.toggle(el, className);
	}-*/;

}
