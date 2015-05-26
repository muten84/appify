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

import it.appify.api.HasViewHandlers.ViewHandlerHolder;
import it.appify.api.ModelView;
import it.appify.api.Page;
import it.appify.api.PageManager;
import it.appify.api.PageManager.PageListener;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;
import com.google.gwt.core.shared.GWT;

public class PageLoader<V, M> {

	private PageManager<V> pm;

	private ModelView<M, V> vm;

	private M modelInstance;

	private Map<String, List<ViewHandlerHolder>> pageHandlers;

	private Page<V> currentShowingPage;

	private PageListener<V> outerPl = null;

	private String currentTransition = null;

	private final static boolean USE_MASK = false;

	private final static boolean AUTO_UNMASK = true;

	private final PageListener<V> pl = new PageListener<V>() {
		@Override
		public void onPageHide(Page<V> page) {
			GWT.log("PageLoader onPageHide: " + page.getPageId());
			if (outerPl != null) {
				outerPl.onPageHide(page);
			}
		}

		@Override
		public void onPageShow(Page<V> page) {
			if (USE_MASK) {
				pm.getCurrentPage().mask("");
			}
			GWT.log("PageLoader onPageShow: " + page.getPageId());
			// vm.bindModelToView(page.getPageId(), modelInstance);
			// currentShowedPage = page;
			List<ViewHandlerHolder> h = pageHandlers.get(page.getPageId());
			if (h != null) {
				for (ViewHandlerHolder viewHandlerHolder : h) {
					page.addViewHandler(viewHandlerHolder.getViewId(), viewHandlerHolder.getEventType(), viewHandlerHolder.getHandler());
				}
			}
			if (outerPl != null) {
				outerPl.onPageShow(page);
			}
		}

		@Override
		public void onPageCreate(Page<V> page) {
			currentShowingPage = page;
			GWT.log("PageLoader onPageCreate: " + page.getPageId());
			if (outerPl != null) {
				outerPl.onPageCreate(page);
			}

		}

		@Override
		public void onPageReady(Page<V> page) {
			GWT.log("PageLoader onPageReady: " + page.getPageId());
			// page.unmask();
			page.decorate();
			if (outerPl != null) {
				outerPl.onPageReady(page);
			}
			if (AUTO_UNMASK) {
				pm.getCurrentPage().unmask();
			}
		}

	};

	public PageLoader(PageManager<V> pm, final ModelView<M, V> vm) {
		this(pm, vm, null);
	}

	public PageLoader(PageManager<V> pm, final ModelView<M, V> vm, final PageListener<V> pl) {
		this.pageHandlers = new HashMap<String, List<ViewHandlerHolder>>();
		this.pm = pm;
		this.vm = vm;
		pm.setPageListener(this.pl);
		this.outerPl = pl;
	}

	public void addPageViewHandler(String pageId, ViewHandlerHolder handler) {
		List<ViewHandlerHolder> pageHandlers = this.pageHandlers.get(pageId);
		if (pageHandlers == null) {
			pageHandlers = new ArrayList<ViewHandlerHolder>();
			this.pageHandlers.put(pageId, pageHandlers);
		}
		this.pageHandlers.get(pageId).add(handler);
		// if current page is attached to DOM
		if (pageId.equals(pm.getCurrentPage().getPageId())) {
			pm.getCurrentPage().addViewHandler(handler.getViewId(), handler.getEventType(), handler.getHandler());
		}

	}

	public void loadPage(String pageId, M model) {
		loadPage(pageId, model, null);
	}

	public void loadPage(final String pageId, final M model, List<ViewHandlerHolder> handlers) {
		this.modelInstance = model;
		if (handlers != null) {
			List<ViewHandlerHolder> pageHandlers = this.pageHandlers.get(pageId);
			if (pageHandlers == null) {
				pageHandlers = new ArrayList<ViewHandlerHolder>();
				this.pageHandlers.put(pageId, pageHandlers);
			}
			this.pageHandlers.get(pageId).clear();
			this.pageHandlers.get(pageId).addAll(handlers);
		}
		final boolean showed = false;
		final boolean bound = false;
		GWT.log("SCHEULING LOAD PAGE: " + pageId);
		Scheduler.get().scheduleFixedPeriod(new RepeatingCommand() {
			private boolean _showed = showed;
			private boolean _bound = bound;

			@Override
			public boolean execute() {
				try {
					GWT.log(pageId + " executing: " + _showed + " - " + _bound);
					if (!_showed) {
						if (getCurrentTransition() == null) {
							pm.showPage(pageId);
						} else {
							pm.showPage(pageId, getCurrentTransition());
						}
						/*
						 * if view model binding starts here times results faster.This is because the compilation of
						 * view elements is hidden and execute while page transition. There is no grants about model
						 * binding success compilation because the shoe page callback is not called here
						 */
						vm.bindModelToView(pageId, model);
						_showed = true;
						return true;
					}
					if (_showed && !_bound) {
						/*
						 * if view model binding starts here times results slower. Here we have the grant to page showed
						 * in DOM
						 */
						// vm.bindModelToView(pageId, model);
						_showed = true;
						_bound = true;
						return true;
					}
					if (_showed && _bound) {
						pl.onPageReady(currentShowingPage);
						return false;
					}
					return false;
				} catch (Exception e) {
					GWT.log(" error: " + e.getMessage(), e);
					return false;
				}
			}
		}, 500);

	}

	public String getCurrentTransition() {
		return currentTransition;
	}

	public void setCurrentTransition(String currentTransition) {
		this.currentTransition = currentTransition;
	}

}
