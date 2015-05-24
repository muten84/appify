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
package it.appify.app;

import it.appify.api.Battery;
import it.appify.api.DynamicContentLoader;
import it.appify.api.DynamicContentLoader.ContentLoadedListener;
import it.appify.api.Geolocation;
import it.appify.api.HasViewHandlers;
import it.appify.api.HasViewHandlers.ViewHandler;
import it.appify.api.HasViewHandlers.ViewHandlerHolder;
import it.appify.api.Page;
import it.appify.api.PageManager;
import it.appify.api.PageManager.PageListener;
import it.appify.api.PageManager.Transitions;
import it.appify.api.Service;
import it.appify.api.Storage;
import it.appify.screenorientation.WebScreenOrientation;
import it.appify.view.AppJsPageManager;
import it.appify.view.PageLoader;
import it.appify.view.WebModelView;
import it.appify.view.WebPage;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.Element;
//TODO: add an update and store method
//for enqueue all read&write request Scheduler.get().scheduleDeferred(
//new ScheduledCommand() {

public abstract class AbstractWebApp<AppState> implements WebApp<AppState> {

	protected PageLoader<Element, AppState> loader;

	protected WebModelView<AppState> modelView;

	protected PageManager<Element> pageManager;

	protected Stack<String> pageStack;

	private String mainPage;

	private Map<String, List<ViewHandlerHolder>> pageViewHandlers;

	private Map<String, List<String>> pageViewElements;

	private Map<String, List<ControllerHolder<?>>> pageControllers;

	private List<Service> services;

	private boolean firstLoad = true;

	private DynamicContentLoader dynamicLoader;

	private int _cnt = 0;

	private Map<String, WebPage> pagesCache;

	private PageListener<Element> pl = new PageListener<Element>() {

		@Override
		public void onPageShow(Page<Element> page) {
			GWT.log("AbstractWebApp onPageShow");
			loader.setCurrentTransition(null);
			// inject all ui elements in the controller....
			List<ControllerHolder<?>> controllers = pageControllers.get(page
					.getPageId());
			if (controllers != null) {
				for (ControllerHolder<?> controllerHolder : controllers) {
					GWT.log("injecting elements: " + controllerHolder.pageId
							+ " - " + controllerHolder.viewId + " - "
							+ controllerHolder.fieldName);
					controllerHolder.injectViewElements();
				}
			}
		}

		@Override
		public void onPageReady(Page<Element> page) {
			GWT.log("AbstractWebApp onPageReady: " + mainPage + " - "
					+ page.getPageId() + " - " + firstLoad);

			/**/

			// if occurs first load of main page it's a good idea to start app
			// services
			if (page.getPageId().equals(mainPage) && firstLoad) {
				firstLoad = false;
				GWT.log("Going to starting all services...");
				if (services != null && services.size() > 0) {
					for (Service s : services) {
						try {
							GWT.log("Starting service: " + s);
							s.start();
							GWT.log("Service started: " + s);
						} catch (Exception e) {
							GWT.log("error while starting service: "
									+ s.getClass());
						}
					}
				}
				// all service started launch app start
				if (callback != null) {
					callback.onAppStart(AbstractWebApp.this);
				}
			}

		}

		@Override
		public void onPageHide(Page<Element> page) {
			// TODO Auto-generated method stub

		}

		@Override
		public void onPageCreate(Page<Element> page) {
			// TODO Auto-generated method stub

		}
	};

	private it.appify.app.WebApp.AppListener<AppState> callback;

	public AbstractWebApp(String mainPage) {
		this.mainPage = mainPage;
		pagesCache = new HashMap<String, WebPage>();
		dynamicLoader = new AppifyDynamicContentLoader();
		services = new ArrayList<Service>();
		pageViewHandlers = new HashMap<String, List<ViewHandlerHolder>>();
		pageViewElements = new HashMap<String, List<String>>();
		pageControllers = new HashMap<String, List<ControllerHolder<?>>>();
		pageStack = new Stack<String>();
		pageManager = new AppJsPageManager();
		pageManager.setDefaultTransition(Transitions.SLIDE_LEFT);
		modelView = getAppStateModelView();
		loader = new PageLoader<Element, AppState>(pageManager, modelView, pl);
		// initializeControllers();
	}

	/**
	 * Add an handler to a view object
	 * 
	 * @param pageId
	 * @param viewId
	 * @param eventType
	 */
	public void addHandler(String pageId, String viewId, String eventType,
			ViewHandler handler) {
		ViewHandlerHolder holder = createViewHandler(pageId, viewId, eventType,
				handler);
		loader.addPageViewHandler(pageId, holder);
	}

	protected void bindHandlerToPage(String pageId, ViewHandlerHolder holder) {
		List<ViewHandlerHolder> holders = pageViewHandlers.get(pageId);
		if (holders == null) {
			holders = new ArrayList<HasViewHandlers.ViewHandlerHolder>();
		}
		holders.add(holder);
		pageViewHandlers.put(pageId, holders);
	}

	protected void bindControllerToPage(String pageId,
			ControllerHolder<?> holder) {
		List<ControllerHolder<?>> holders = pageControllers.get(pageId);
		if (holders == null) {
			holders = new ArrayList<ControllerHolder<?>>();
		}
		holders.add(holder);
		pageControllers.put(pageId, holders);
	}

	protected void bindElementToPage(String pageId, String viewId) {
		List<String> els = pageViewElements.get(pageId);
		if (els == null) {
			els = new ArrayList<String>();
		}
		els.add(viewId);
		pageViewElements.put(pageId, els);
	}

	protected void bindService(Service service) {
		GWT.log("bindService " + service);
		services.add(service);
	}

	protected ViewHandlerHolder createViewHandler(String pageId, String viewId,
			String eventType, ViewHandler handler) {
		ViewHandlerHolder holder = new ViewHandlerHolder();
		holder.setEventType(eventType);
		holder.setHandler(handler);
		holder.setViewId(viewId);
		return holder;
	}

	/**
	 * Start your app
	 * 
	 * @param mainPage
	 * @param initialState
	 */
	public void startApp(final AppState initialState) {
		scandDynamicContent(new ContentLoadedListener() {

			@Override
			public void error() {
				GWT.log("error while scandDynamicContent ");

			}

			@Override
			public void done() {
				GWT.log("starting app...");
				if (mainPage == null || mainPage.isEmpty()) {
					throw new RuntimeException(
							"main page cannot be null or empty");
				}
				if (pageManager.getCurrentPage() == null) {
					GWT.log("initializing services");
					initializeServices();
					GWT.log("initializing controllers");
					initializeControllers();
					List<ViewHandlerHolder> handlers = pageViewHandlers
							.get(mainPage);
					loader.loadPage(mainPage, initialState, handlers);

					pageStack.add(mainPage);
				} else {
					throw new RuntimeException(
							"App just started use moveTo and back to create navigation in your app");
				}

			}
		});

	}

	public void startApp(AppState initialAppState,
			AppListener<AppState> callback) {
		this.callback = callback;
		startApp(initialAppState);
	}

	/**
	 * Update the app state and reflect to your view
	 * 
	 * @param state
	 */
	@Override
	public void updateAppState(AppState state) {
		modelView.updateModel(state);
		storeCurrentAppState();
	}

	/**
	 * Move to a new page using the current app state *
	 * 
	 * @param pageId
	 */
	@Override
	public void moveTo(final String pageId) {
		getCurrentPage().mask("");
		Element elRef = null;
		Element[] els = dynamicLoader
				.scanDynamicMarkerElements("data-appify-ref");
		for (Element element : els) {
			if (element.getAttribute("data-appify-ref") != null
					&& element.getAttribute("data-appify-ref").equals(pageId)) {
				elRef = element;
				break;
			}
		}
		WebPage cachedPage = pagesCache.get(pageId);
		if (elRef != null && cachedPage == null) {
			final String url = elRef.getAttribute("data-appify-template");

			dynamicLoader.load(elRef, url, new ContentLoadedListener() {

				@Override
				public void error() {
					GWT.log("error while load:  " + url);

				}

				@Override
				public void done() {
					GWT.log("done  move to :  " + pageId);
					doMoveTo(pageId);
					Scheduler.get().scheduleFixedDelay(new RepeatingCommand() {

						@Override
						public boolean execute() {
							// getCurrentPage().unmask();
							return false;
						}
					}, 500);

				}
			});
		} else {
			doMoveTo(pageId);
			Scheduler.get().scheduleFixedDelay(new RepeatingCommand() {

				@Override
				public boolean execute() {
					// getCurrentPage().unmask();
					return false;
				}
			}, 500);

		}

	}

	protected void doMoveTo(String pageId) {
		if (pageManager.getCurrentPage() == null) {
			throw new RuntimeException(
					"Main page not started  maybe you need to call start app first??");
		}
		if (pageManager.getCurrentPage().getPageId().equals(pageId)) {
			// no need to move to the current page
			return;
		}
		Page<Element> currentPage = pageManager.getCurrentPage();
		pageStack.add(currentPage.getPageId());
		pagesCache.put(pageId, (WebPage) currentPage);
		loader.loadPage(pageId, modelView.getCurrentModel(),
				pageViewHandlers.get(pageId));
	}

	/**
	 * Move to previous page using the current app state
	 */
	@Override
	public void back() {
		getCurrentPage().mask("");
		String pageId = pageStack.pop();
		AppState state = modelView.getCurrentModel();
		loader.setCurrentTransition(Transitions.SLIDE_RIGHT);
		loader.loadPage(pageId, state);
		// Scheduler.get().scheduleFixedDelay(new RepeatingCommand() {
		//
		// @Override
		// public boolean execute() {
		// String pageId = pageStack.pop();
		// AppState state = modelView.getCurrentModel();
		// loader.setCurrentTransition(Transitions.SLIDE_RIGHT);
		// loader.loadPage(pageId, state);
		// return false;
		// }
		// }, 1000);

	}

	@Override
	public void openContextMenu(String viewId) {
		pageManager.openContextMenu(viewId);
	}

	@Override
	public void closeContextMenu() {
		pageManager.closeContextMenu();
	}

	@Override
	public boolean isMenuOpen() {
		return pageManager.isContextMenuOpened();
	}

	@Override
	public <AppState> AppState getCurrentAppState() {
		return (AppState) modelView.getCurrentModel();
	}

	@Override
	public WebPage getCurrentPage() {
		Page<Element> page = pageManager.getCurrentPage();
		return (WebPage) page;
	}

	@Override
	public Geolocation getGeolocationService() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Battery getBatteryService() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Storage getStorageService() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public WebScreenOrientation getScreenOrientationService() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <E> E getViewFragment(String viewId) {
		return (E) pageManager.getCurrentPage().getElementInPage(viewId);
	}

	protected void scandDynamicContent(final ContentLoadedListener l) {
		GWT.log("scandDynamicContent");
		Element[] els = dynamicLoader.scanDynamicMarkerElementsExcept(
				"data-appify-template", "data-appify-ref");
		final int size = els.length;
		GWT.log("found : " + size);
		if (size == 0) {
			l.done();
		} else {
			for (Element element : els) {
				// String lazy = element.getAttribute("data-appify-ref");
				// if (lazy != null && !lazy.isEmpty()) {
				// continue;
				// }
				String url = element.getAttribute("data-appify-template");
				dynamicLoader.load(element, url, new ContentLoadedListener() {

					@Override
					public void error() {
						l.error();
					}

					@Override
					public void done() {
						// TODO Auto-generated method stub

						if (_cnt == size - 1) {
							GWT.log("all resources loaded");
							_cnt = 0;
							l.done();
						}
						_cnt++;
					}
				});
			}
		}
	};

	protected abstract WebModelView<AppState> getAppStateModelView();

	protected abstract void initializeControllers();

	protected abstract void initializeServices();

	protected abstract void storeCurrentAppState();

}
