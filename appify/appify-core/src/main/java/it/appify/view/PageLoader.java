package it.appify.view;

import it.appify.api.HasViewHandlers.ViewHandlerHolder;
import it.appify.api.ModelView;
import it.appify.api.Page;
import it.appify.api.PageManager;
import it.appify.api.PageManager.PageListener;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PageLoader<V, M> {

	private PageManager<V> pm;

	private ModelView<M, V> vm;

	private M modelInstance;

	private Map<String, List<ViewHandlerHolder>> pageHandlers;

	public PageLoader(PageManager<V> pm, final ModelView<M, V> vm) {
		this.pageHandlers = new HashMap<String, List<ViewHandlerHolder>>();
		this.pm = pm;
		this.vm = vm;
		pm.setPageListener(new PageListener<V>() {
			@Override
			public void onPageHide(Page<V> page) {
				// TODO Auto-generated method stub

			}

			@Override
			public void onPageShow(Page<V> page) {
				vm.bindModelToView(page.getPageId(), modelInstance);
				List<ViewHandlerHolder> h = pageHandlers.get(page.getPageId());
				if (h != null) {
					for (ViewHandlerHolder viewHandlerHolder : h) {
						page.addViewHandler(viewHandlerHolder.getViewId(),
								viewHandlerHolder.getEventType(),
								viewHandlerHolder.getHandler());
					}
				}
			}

		});
	}

	public void addPageViewHandler(String pageId, ViewHandlerHolder handler) {
		List<ViewHandlerHolder> pageHandlers = this.pageHandlers.get(pageId);
		if (pageHandlers == null) {
			pageHandlers = new ArrayList<ViewHandlerHolder>();
			this.pageHandlers.put(pageId, pageHandlers);
		}
		this.pageHandlers.get(pageId).add(handler);
	}

	public void loadPage(String pageId, M model) {
		loadPage(pageId, model, null);
	}

	public void loadPage(String pageId, M model,
			List<ViewHandlerHolder> handlers) {
		this.modelInstance = model;
		if (handlers != null) {
			List<ViewHandlerHolder> pageHandlers = this.pageHandlers
					.get(pageId);
			if (pageHandlers == null) {
				pageHandlers = new ArrayList<ViewHandlerHolder>();
				this.pageHandlers.put(pageId, pageHandlers);
			}
			this.pageHandlers.get(pageId).clear();
			this.pageHandlers.get(pageId).addAll(handlers);
		}

		pm.showPage(pageId);

	}

}
