package it.appify.view;

import it.appify.api.Page;
import it.appify.api.PageManager;

import java.util.HashMap;
import java.util.Map;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.shared.GWT;
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
		GWT.log("AppJsPageManager onPageShow: " + p.getPageId());
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
		GWT.log("AppJsPageManager onPageShowed: " + name);
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
		GWT.log("Page " + name + "destroyed");
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
