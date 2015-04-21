package it.appify.poc.client;

import it.appify.api.ModelView;
import it.appify.api.PageManager;
import it.appify.poc.client.model.ExampleViewModel;
import it.appify.poc.client.model.Model;
import it.appify.view.AppJsPageManager;
import it.appify.view.PageLoader;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.dom.client.Element;

public class AppifyApplicationCacheTest implements EntryPoint {

	PageManager<Element> pm;

	ModelView<Model, Element> vm;

	Model m;

	@Override
	public void onModuleLoad() {
//		final ApplicationCache cache = new HTML5ApplicationCache();
//		Handler h = new Handler() {
//
//			@Override
//			public void onEvent(String type, String source) {
//				LogUtil.log(type + "event received");
//				if (type.equals(CacheEvent.UPDATEREADY)) {
//					try {
//						cache.swapCache();
//					} catch (Exception e) {
//						LogUtil.log("error while swapping cache: " + e.getMessage());
//					}
//				}
//
//			}
//		};
//		cache.addHandler(CacheEvent.CACHED, h);
//		cache.addHandler(CacheEvent.CHECKING, h);
//		cache.addHandler(CacheEvent.DOWNLOADING, h);
//		cache.addHandler(CacheEvent.ERROR, h);
//		cache.addHandler(CacheEvent.NOUPDATE, h);
//		cache.addHandler(CacheEvent.PROGRESS, h);
//		cache.addHandler(CacheEvent.UPDATEREADY, h);

		m = createModel();
		// inject pagemanager
		pm = new AppJsPageManager();
		// define a view model
		vm = new ExampleViewModel();

		final PageLoader<Element, Model> loader = new PageLoader<Element, Model>(pm, vm);
		loader.loadPage("mainPage", m);

	}

	private Model createModel() {
		return new Model("Offline POC");
	}

}
