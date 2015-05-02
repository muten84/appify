package it.appify.app;

import it.appify.api.HasViewHandlers;
import it.appify.api.HasViewHandlers.ViewHandler;
import it.appify.api.HasViewHandlers.ViewHandlerHolder;
import it.appify.api.Battery;
import it.appify.api.Geolocation;
import it.appify.api.Page;
import it.appify.api.PageManager;
import it.appify.api.PageManager.PageListener;
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
import com.google.gwt.core.client.Scheduler.ScheduledCommand;
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

	private List<Service> services;

	private boolean firstLoad = true;

	private PageListener<Element> pl = new PageListener<Element>() {

		@Override
		public void onPageShow(Page<Element> page) {
			GWT.log("AbstractWebApp onPageShow");
		}

		@Override
		public void onPageReady(Page<Element> page) {
			GWT.log("AbstractWebApp onPageReady");
			//if occurs first load of main page it's a good idea to start app services
			if (page.getPageId().equals(mainPage) && firstLoad) {
				firstLoad = false;
				if (callback != null) {
					if (services != null && services.size() > 0) {
						for (Service s : services) {
							s.start();
						}
					}
					// all service started launch app start
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
		services = new ArrayList<Service>();
		pageViewHandlers = new HashMap<String, List<ViewHandlerHolder>>();
		pageStack = new Stack<String>();
		pageManager = new AppJsPageManager();
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

	protected void bindService(Service service) {
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
	public void startApp(AppState initialState) {
		if (this.mainPage == null || this.mainPage.isEmpty()) {
			throw new RuntimeException("main page cannot be null or empty");
		}
		if (pageManager.getCurrentPage() == null) {
			initializeServices();
			initializeControllers();
			List<ViewHandlerHolder> handlers = pageViewHandlers
					.get(this.mainPage);
			loader.loadPage(mainPage, initialState, handlers);

			pageStack.add(mainPage);
		} else {
			throw new RuntimeException(
					"App just started use moveTo and back to create navigation in your app");
		}

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
	}

	/**
	 * Move to a new page using the current app state *
	 * 
	 * @param pageId
	 */
	@Override
	public void moveTo(String pageId) {
		if (pageManager.getCurrentPage() == null) {
			throw new RuntimeException(
					"Main page not started  maybe you need to call start app first??");
		}
		if (pageManager.getCurrentPage().getPageId().equals(pageId)) {
			// no need to move to the current page
			return;
		}
		pageStack.add(pageManager.getCurrentPage().getPageId());
		loader.loadPage(pageId, modelView.getCurrentModel(),
				pageViewHandlers.get(pageId));

	}

	/**
	 * Move to previous page using the current app state
	 */
	@Override
	public void back() {
		String pageId = pageStack.pop();
		AppState state = modelView.getCurrentModel();
		loader.loadPage(pageId, state);
	}

	@Override
	public <AppState> AppState getCurrentAppState() {
		return (AppState) modelView.getCurrentModel();
	}

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

	protected abstract WebModelView<AppState> getAppStateModelView();

	protected abstract void initializeControllers();

	protected abstract void initializeServices();

}
