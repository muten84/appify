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

	public AppJsPageManager() {
		pages = new HashMap<String, Page<Element>>();
	}

	@Override
	public void showPage(String name) {
		_addPage(name);
		_showPage(name);

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
		Page<Element> currentPage = this.pages.get(name);
		if (currentPage == null) {
			Element el = e.cast();
			currentPage = new WebPage(el);
		}
		this.pages.put("name", currentPage);
		onPageShow(currentPage);
	}

	private void onPageHidden(String name, JavaScriptObject e) {
		GWT.log("Page " + name + "destroyed");
		Page<Element> p = this.pages.get(name);
		onPageHide(p);
		// this.pages.get(name).setWasHidden(true);
	}

	private native void _showPage(String name)/*-{
		try {
			//$wnd.App.restore();
			$wnd.App.load(name, function() {
				console.log('page loaded')
			});
		} catch (err) {
			console.log(err);
			//			$wnd.App.load(name, function() {
			//				console.log('page loaded')
			//			});
		}
	}-*/;

	private native void _addPage(final String pageName)/*-{
		var that = this;
		$wnd.App
				.controller(
						pageName,
						function(page) {
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

}
