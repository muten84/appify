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

import it.appify.api.Page;
import it.appify.api.PageManager;
import it.appify.logging.ConsoleLogger;

import java.util.HashMap;
import java.util.Map;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.dom.client.Element;

public class AppJsPageManager implements PageManager<Element> {

	private Map<String, Page<Element>> pages;

	private String currentPage;

	private PageListener<Element> listener;

	private String menuOpened;

	public AppJsPageManager() {
		pages = new HashMap<String, Page<Element>>();
	}

	@Override
	public void showPage(String name) {
		_addPage(name);
		_showPage(name);

	}

	@Override
	public void showPage(String pageName, String transitionType) {
		_addPage(pageName);
		_showPage(pageName, transitionType);

	}

	@Override
	public Page<Element> getCurrentPage() {
		return this.pages.get(currentPage);
	}

	@Override
	public void setPageListener(PageListener<Element> pageListener) {
		this.listener = pageListener;

	}

	protected void onPageShow(Page<Element> p) {
		ConsoleLogger.getConsoleLogger().log("AppJsPageManager onPageShow: " + p.getPageId());
		currentPage = p.getPageId();
		this.pages.put(p.getPageId(), p);
		// if (p.isWasHidden()) {
		// p.reattachHandlers();
		// p.setWasHidden(false);
		// }
		if (this.listener != null) {
			this.listener.onPageShow(p);
		}
	}

	protected void onPageHide(Page<Element> p) {
		if (this.listener != null) {
			this.listener.onPageHide(p);
		}
	}

	private void onPageShowed(String name, JavaScriptObject e) {
		ConsoleLogger.getConsoleLogger().log("AppJsPageManager onPageShowed: " + name);
		Page<Element> currentPage = this.pages.get(name);
		Element el = e.cast();
		if (currentPage == null) {
			currentPage = new WebPage(el);
		} else {
			((WebPage) currentPage).setPageElement(el);
		}
		this.pages.put("name", currentPage);
		onPageShow(currentPage);
	}

	private void onPageHidden(String name, JavaScriptObject e) {
		ConsoleLogger.getConsoleLogger().log("Page " + name + "destroyed");
		Page<Element> p = this.pages.get(name);
		this.pages.remove(name);
		onPageHide(p);
		// this.pages.get(name).setWasHidden(true);
	}

	private native void _showPage(String name, String transition)/*-{
		var that = this;
		try {

			$wnd.App.load(name, transition, function() {
				console.log('page loaded ' + name)

			});
		} catch (err) {
			console.log(err);

		}
	}-*/;

	private native void _showPage(String name)/*-{
		var that = this;
		try {

			$wnd.App.load(name, function() {
				console.log('page loaded ' + name)
			$wnd.App._layout();
			console.log('layout triggered ' + name)	

			});
		} catch (err) {
			console.log(err);

		}
	}-*/;

	private void onPageCreated(String pageName, JavaScriptObject e) {
		Page<Element> currentPage = this.pages.get(pageName);
		Element el = e.cast();
		if (currentPage == null) {
			currentPage = new WebPage(el);
		} else {
			((WebPage) currentPage).setPageElement(el);
		}
		this.pages.put("name", currentPage);
		onPageCreate(currentPage);
	}

	private void onPageLoaded(String pageName, JavaScriptObject e) {
		Page<Element> currentPage = this.pages.get(pageName);
		Element el = e.cast();
		if (currentPage == null) {
			currentPage = new WebPage(el);
		} else {
			((WebPage) currentPage).setPageElement(el);
		}
		this.pages.put("name", currentPage);
		// onPageReady(currentPage);
	}

	protected void onPageCreate(Page<Element> page) {
		if (this.listener != null) {
			this.listener.onPageCreate(page);
		}
	}

	protected void onPageReady(Page<Element> page) {
		if (this.listener != null) {
			this.listener.onPageReady(page);
		}
	}

	private native void _addPage(final String pageName)/*-{
		var that = this;
		$wnd.App
				.controller(
						pageName,
						function(page) {
							that.@it.appify.view.AppJsPageManager::onPageCreated(Ljava/lang/String;Lcom/google/gwt/core/client/JavaScriptObject;)(pageName, page);
							$wnd
									.$(page)
									.on(
											'appShow',
											function() {
												that.@it.appify.view.AppJsPageManager::onPageShowed(Ljava/lang/String;Lcom/google/gwt/core/client/JavaScriptObject;)(pageName, page);
											});
							$wnd
									.$(page)
									.on(
											'appHide',
											function() {
												that.@it.appify.view.AppJsPageManager::onPageHidden(Ljava/lang/String;Lcom/google/gwt/core/client/JavaScriptObject;)(pageName, page);
											});

						});
	}-*/;

	private native void _setDefaultTransition(String transitionName)/*-{
		$wnd.App.setDefaultTransition(transitionName);
	}-*/;

	@Override
	public void setDefaultTransition(String transitionName) {
		_setDefaultTransition(transitionName);
	}

	private native String _getMenuState()/*-{
		if (typeof $wnd.snapper != 'undefined') {
			return $wnd.snapper.state().state;
		}
	}-*/;

	private native void _snapCloseMenu(String viewId)/*-{
		if (typeof $wnd.snapper != 'undefined') {
			$wnd.snapper.close();
		}
	}-*/;

	private native void _snapOpenMenu(String viewId, String from)/*-{
		$wnd.snapper = new $wnd.Snap({
			element : $doc.getElementById(viewId)
		});
		//left or right
		$wnd.snapper.open(from);
	}-*/;

	@Override
	public void openContextMenu(String viewId) {
		menuOpened = viewId;
		_snapOpenMenu(viewId, "left");
	}

	@Override
	public void closeContextMenu() {
		if (menuOpened != null) {
			_snapCloseMenu(menuOpened);
			menuOpened = null;
		}
	}

	@Override
	public boolean isContextMenuOpened() {
		return _getMenuState().equals("left");
	}

}
