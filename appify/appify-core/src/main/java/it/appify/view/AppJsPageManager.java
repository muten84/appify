package it.appify.view;

import java.util.HashMap;
import java.util.Map;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.Element;

import it.appify.api.Page;
import it.appify.api.PageManager;

public class AppJsPageManager implements PageManager {

	private Map<String, Page> pages;

	private String currentPage;

	private PageListener listener;

	public AppJsPageManager() {
		pages = new HashMap<String, Page>();
	}

	@Override
	public void showPage(String name) {
		_addPage(name);
		_showPage(name);

	}

	@Override
	public Page getCurrentPage() {
		return this.pages.get(currentPage);
	}

	@Override
	public void setPageListener(PageListener pageListener) {
		this.listener = pageListener;

	}

	protected void onPageShow(Page p) {
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

	protected void onPageHide(Page p) {

	}

	private void onPageShowed(String name, JavaScriptObject e) {
		Page currentPage = this.pages.get(name);
		if (currentPage == null) {
			Element el = e.cast();
			currentPage = new SimplePage(el);
		}
		onPageShow(currentPage);
	}

	private void onPageHidden(String name, JavaScriptObject e) {
		GWT.log("Page " + name + "destroyed");
		Page p = this.pages.get(name);
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
