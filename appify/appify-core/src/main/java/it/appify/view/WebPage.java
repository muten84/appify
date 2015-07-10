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
import it.appify.logging.ConsoleLogger;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.dom.client.Element;

public class WebPage implements Page<Element>, HasView<Element> {

	private String currentModalId;

	private Element pageElement;

	private List<ViewHandlerHolder> handlers;

	public WebPage(Element el) {
		this.pageElement = el;
		this.handlers = new ArrayList<WebPage.ViewHandlerHolder>();
	}

	@Override
	public void addViewsHandler(String _class, String type, ViewHandler h) {
		ViewHandlerHolder holder = new ViewHandlerHolder();
		holder.setViewId(_class);
		holder.setEventType(type);
		holder.setHandler(h);
		this.handlers.add(holder);
		JavaScriptObject obj = pageElement.cast();
		if (!_class.startsWith(".")) {
			_class = "." + _class;
		}
		_addViewHandler(_class, type, obj, h);
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
		ConsoleLogger.getConsoleLogger().log("toggleClassViewStyle: " + viewId + " - " + className);		
		_toggleClassOnElem(viewId, className);
	}

	@Override
	public boolean hasStyle(String viewId, String className) {
		
		return _hasStyle(viewId, className);
	}

	@Override
	public boolean isModalActive(String modalId) {
		return _hasStyle(modalId, "active");
	}

	@Override
	public void showModal(String modalId) {
		this.currentModalId = modalId;
		if (!isModalActive(modalId)) {
			toggleClassViewStyle(modalId, "active");
		}
	}

	@Override
	public void closeModal(String modalId) {
		if (isModalActive(modalId)) {
			toggleClassViewStyle(modalId, "active");
		}
	}

	@Override
	public void closeCurrentModal() {
		if (this.currentModalId != null) {
			closeModal(currentModalId);
			this.currentModalId = null;
		}

	}

	@Override
	public void decorate() {
		// _pullify();
	}

	@Override
	public void addPullToRefreshHandler(PageActionCallback paCb) {
		_addPtrHandler(paCb);
	}

	private native void _addPtrHandler(final PageActionCallback paCb)/*-{
		var pullableEl = $wnd.$('#pullable');
		var innerFunction = function() {
			$wnd.$('#ptr').attr('style', 'z-index: 10');
			return new Promise(
					function(resolve, reject) {
						console.log('innerFunction....');
						var jscallback = @it.appify.view.JsCallback::create()();
						jscallback.@it.appify.view.JsCallback::setResolve(Lcom/google/gwt/core/client/JavaScriptObject;)(resolve);
						jscallback.@it.appify.view.JsCallback::setReject(Lcom/google/gwt/core/client/JavaScriptObject;)(reject);
						paCb.@it.appify.api.Page.PageActionCallback::refresh(Lcom/google/gwt/user/client/rpc/AsyncCallback;)(jscallback);
						$wnd.setTimeout(function() {
							$wnd.$('#ptr').attr('style', 'z-index: -10');
						}, 3000);

					});
		}
		if (pullableEl) {
			try {
				$wnd.WebPullToRefresh.init({
					loadingFunction : innerFunction
				});
			} catch (err) {
				console.log(err);
			}
		} else {
			console.log('page has not a pullable element...');
		}

	}-*/;

	private native void _pullify(PageActionCallback callback)/*-{
//		var pullableEl = $wnd.$('#pullable');
//		var innerFunction = function() {
//			return new Promise(
//					function(resolve, reject) {
//						console.log('innerFunction....');
//						var jscallback = @it.appify.view.WebPage.JsCallback::create()();
//						jscallback.@it.appify.view.WebPage.JsCallback::setResolve()
//						//						var myCall = callback.@it.appify.api.Page.PageActionCallback::refresh(
//
//					});
//
//		};
//		if (pullableEl) {
//			try {
//				$wnd.WebPullToRefresh.init({
//					loadingFunction : innerFunction
//				});
//			} catch (err) {
//				console.log(err);
//			}
//		} else {
//			console.log('page has not a pullable element...');
//		}
	}-*/;

	// classie.has( element, 'my-class' )
	private native boolean _hasStyle(String viewId, String className)/*-{
		console.log('_hasStyle: ' + viewId + " - " + className);
		var el = $doc.getElementById(viewId);
		//var el = $wnd.$(viewId);
		if (el != 'undefined') {
			console.log("Element found: " + el);
			return $wnd.classie.has(el, className);
		}
	}-*/;

	// classie.toggle( this, 'active' );
	private native void _toggleClassOnElem(String viewId, String className)/*-{
		console.log('_toggleClassOnElem: ' + viewId + " - " + className);
		var el = $doc.getElementById(viewId);
		//var el = $wnd.$(viewId);
		//if (el != 'undefined') {
			console.log("Element found: " + el);
			$wnd.classie.toggle(el, className);
		//}
		//else{
			console.log('_toggleClassOnElem: ' + viewId + " - " + className);
		//}
	}-*/;

	@Override
	public void popover(String viewId, String title, String content, String animation) {
		_popover(viewId, title, content, animation);

	}
	
	@Override
	public void width(String viewId, String width){
		_width(viewId, width);
	}
	
	@Override
	public String width(String viewId){
		return _width("#"+viewId);
	}
	
	private native void _width(String viewId, String widthVal)/*-{
		$wnd.$('#'+viewId).width(widthVal);
	}-*/;
	
	private native String _width(String viewId)/*-{
		return $wnd.$('#'+viewId).width();
	}-*/;
	

	@Override
	public void setElementValue(String viewId, String val) {
		_setElementValue(viewId, val);
	}

	@Override
	public String getElementValue(String viewId) {
		return _getElementValue(viewId);
	}

	@Override
	public void setElementText(String viewId, String text) {
		_setElementText(viewId, text);
	}

	@Override
	public String getElementText(String viewId) {
		return _getElementText(viewId);
	}

	private native void _setElementValue(String viewId, String val) /*-{
		$wnd.$('#' + viewId).val(val);
	}-*/;

	private native String _getElementValue(String viewId) /*-{
		return $wnd.$('#' + viewId).val();
	}-*/;

	private native void _setElementText(String viewId, String val) /*-{
		$wnd.$('#' + viewId).text(val);
	}-*/;

	private native String _getElementText(String viewId) /*-{
		return $wnd.$('#' + viewId).text();
	}-*/;

	@Override
	public void keyboard(String viewId, KeyboardActionCallback cb) {
		_keyboard(viewId, cb);
	}

	private native void _keyboard(String viewId, KeyboardActionCallback cb) /*-{
		var that = this;
		try {
			$wnd
					.$('#' + viewId)
					.keyboard(
							{
								layout : 'qwerty',
								accepted : function(event, keyboard, el) {
									console.log('The content "' + el.value
											+ '" was accepted!');
									cb.@it.appify.api.Page.KeyboardActionCallback::accepted(Ljava/lang/String;)(el.value);
								}
							});
		} catch (err) {
			console.log('error adding keyboard on element: ' + viewId);
		}
	}-*/;

	@Override
	public void triggerEvent(String viewId, String eventType) {
		_triggerEvent(viewId, eventType);
	}

	private native void _triggerEvent(String viewId, String eventType) /*-{
		$wnd.$('#' + viewId).trigger(eventType);
	}-*/;

	@Override
	public void mask(String label) {
		String pageId = getRootElement().getId();

		_mask(pageId, 50, label);
	}

	@Override
	public void unmask() {
		String pageId = getRootElement().getId();
		_unmask(pageId);
	}

	private native void _unmask(String pageId)/*-{
		console.log('>>>>>_unmask ' + pageId + '<<<<<<');
		//var myEl = $wnd.$('#' + pageId);
		var newEl = $wnd.$('#maskDiv');
		//		myEl.attr('style', 'background: rgba(0,0,0,0.5); opacity: 0.5')
		newEl.unmask();
		newEl.remove();
	}-*/;

	private native void _mask(String pageId, int spinRadius, String sLabel)/*-{
		//		var myEl = $wnd.$('#' + pageId);
		var htmlDiv = "<div id='maskDiv' style='background: rgba(0, 0, 0, 0.2); opacity: 0.9; position: absolute; left:0; top:0; width: 100%; height: 100%; z-index: 99999999'></div>";
		var maskDiv = $wnd.$(htmlDiv);
		$wnd.$('body').append(maskDiv);
		//		myEl.attr('style', 'background: rgba(0,0,0,0.5); opacity: 0.5')
		maskDiv.mask({
			label : sLabel,
			spinner : {
				length : 10,
				radius : spinRadius
			}
		});
	}-*/;

	private native void _popover(String viewId, String title, String content, String animation)/*-{
		$wnd.currentPopover = $wnd.$('#' + viewId).webuiPopover('destroy')
				.webuiPopover({
					title : title,
					content : content,
					animation : animation,
					placement : 'auto',//values: auto,top,right,bottom,left,top-right,top-left,bottom-right,bottom-left,auto-top,auto-right,auto-bottom,auto-left
					width : 'auto',//can be set with  number
					height : 'auto',//can be set with  number
					trigger : 'click',//values:click,hover
					style : '',//values:'',inverse
					constrains : null, // constrains the direction when placement is  auto,  values: horizontal,vertical
					animation : animation, //pop with animation,values: pop,fade (only take effect in the browser which support css3 transition)
					delay : {//show and hide delay time of the popover, works only when trigger is 'hover',the value can be number or object
						show : null,
						hide : 300
					},
					async : {
						before : function(that, xhr) {
						},//executed before ajax request
						success : function(that, data) {
						}//executed after successful ajax request
					},
					cache : false,//if cache is set to false,popover will destroy and recreate
					multi : true,//allow other popovers in page at same time
					arrow : true,//show arrow or not			
					padding : true,//content padding
					type : 'html',//content type, values:'html','iframe','async'
					url : ''//if not empty ,plugin will load content by url

				});
	}-*/;

	@Override
	public void disableElement(String viewId) {
		_disableElement(viewId);
	}

	@Override
	public void enableElement(String viewId) {
		_enableElement(viewId);
	}

	@Override
	public void disableElements(String clazz) {
		_disableElements(clazz);
	}

	@Override
	public void enableElements(String clazz) {
		_enableElements(clazz);
	}

	private native void _disableElements(String clazz) /*-{
		var els = $wnd.$('.' + clazz);
		console.log('trying to switch: ' + els);
		els.attr('disabled', '');

	}-*/;

	private native void _enableElements(String clazz) /*-{
		var btn = $wnd.$('.' + clazz);
		if (btn) {
			btn.removeAttr('disabled');
		}
	}-*/;

	private native void _disableElement(String viewId) /*-{
		var btn = $wnd.$('#' + viewId);
		if (btn) {
			btn.attr('disabled', '');
		}
	}-*/;

	private native void _enableElement(String viewId) /*-{
		var btn = $wnd.$('#' + viewId);
		if (btn) {
			btn.removeAttr('disabled');
		}
	}-*/;

}
