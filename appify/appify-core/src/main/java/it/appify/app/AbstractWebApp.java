package it.appify.app;

import it.appify.api.HasViewHandlers;
import it.appify.api.HasViewHandlers.ViewHandler;
import it.appify.api.HasViewHandlers.ViewHandlerHolder;
import it.appify.api.Geolocation;
import it.appify.api.Page;
import it.appify.api.PageManager;
import it.appify.view.AppJsPageManager;
import it.appify.view.PageLoader;
import it.appify.view.WebModelView;
import it.appify.view.WebPage;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;

import com.google.gwt.dom.client.Element;

public abstract class AbstractWebApp<AppState> implements WebApp<AppState> {

	protected PageLoader<Element, AppState> loader;

	protected WebModelView<AppState> modelView;

	protected PageManager<Element> pageManager;

	protected Stack<String> pageStack;

	private String mainPage;

	private Map<String, List<ViewHandlerHolder>> pageViewHandlers;

	public AbstractWebApp(String mainPage) {
		this.mainPage = mainPage;
		pageViewHandlers = new HashMap<String, List<ViewHandlerHolder>>();
		pageStack = new Stack<String>();
		pageManager = new AppJsPageManager();
		modelView = getAppStateModelView();
		loader = new PageLoader<Element, AppState>(pageManager, modelView);
		initializeControllers();
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
			loader.loadPage(mainPage, initialState,
					pageViewHandlers.get(this.mainPage));
			pageStack.add(mainPage);
		} else {
			throw new RuntimeException(
					"App just started use moveTo and back to create navigation in your app");
		}

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

	public WebPage getCurrentPage() {
		Page<Element> page = pageManager.getCurrentPage();
		return (WebPage) page;
	}
	
	@Override
	public Geolocation getGeolocationService() {
		// TODO Auto-generated method stub
		return null;
	}

	protected abstract WebModelView<AppState> getAppStateModelView();

	protected abstract void initializeControllers();

}
