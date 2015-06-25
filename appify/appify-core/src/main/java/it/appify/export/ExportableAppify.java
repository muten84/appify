package it.appify.export;

import it.appify.api.ApplicationCache;
import it.appify.api.Geolocation;
import it.appify.api.HasViewHandlers.ViewHandler;
import it.appify.api.Storage;
import it.appify.app.AbstractWebApp;
import it.appify.screenorientation.WebScreenOrientation;
import it.appify.view.ViewModelHandlerHolder;
import it.appify.view.WebModelView;
import it.appify.view.WebPage;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.dom.client.Element;

@Export("app")
@ExportPackage("appify")
public class ExportableAppify extends AbstractWebApp<JavaScriptObject>
		implements Exportable {

	public ExportableAppify() {
		super("mainPage");
	}

	@SuppressWarnings("unused")
	private static class SimpleViewModel implements
			WebModelView<JavaScriptObject> {

		private Element el;

		private JavaScriptObject model;

		@Override
		public void bindModelToView(String viewId, JavaScriptObject instance) {
			_create(viewId, instance);

		}

		@Override
		public void watchModel(
				it.appify.api.ModelView.ModelListener<JavaScriptObject> listener) {
			// TODO Auto-generated method stub

		}

		@Override
		public String getModelId() {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public JavaScriptObject getCurrentModel() {
			return _getModel();
		}

		@Override
		public void updateModel(JavaScriptObject model) {
			_updateModel(model);

		}

		@Override
		public Element getCurrentView() {
			return el;
		}

		@Override
		public String getViewId() {
			return el.getId();
		}

		private native void _updateModel(JavaScriptObject newModel)/*-{
			$wnd.vm.$data = newModel;
		}-*/;

		private native JavaScriptObject _getModel()/*-{
			return $wnd.vm.$data;
		}-*/;

		private native JavaScriptObject _create(String viewId,
				JavaScriptObject json)/*-{
			$wnd.vm = new $wnd.Vue({
				el : '#' + viewId,
				data : json
			});
			return $wnd.vm;
		}-*/;

		@Override
		public void addViewModelHandler(String pageId, String viewId, ViewModelHandlerHolder holder) {
			// TODO Auto-generated method stub
			
		}

	}

	public ExportableAppify(String mainPage) {
		super(mainPage);
		// TODO Auto-generated constructor stub
	}

	@Override
	protected WebModelView<JavaScriptObject> getAppStateModelView() {
		return new SimpleViewModel();
	}

	@Override
	protected void initializeControllers() {
		// TODO Auto-generated method stub

	}

	@Override
	@Export("back")
	public void back() {
		// TODO Auto-generated method stub
		super.back();
	}

	@Override
	@Export("getCurrentPage")
	public WebPage getCurrentPage() {
		// TODO Auto-generated method stub
		return super.getCurrentPage();
	}

	@Override
	@Export("moveTo")
	public void moveTo(String pageId) {
		// TODO Auto-generated method stub
		super.moveTo(pageId);
	}

	@Override
	@Export("addHandler")
	public void addHandler(String pageId, String viewId, String eventType,
			ViewHandler handler) {
		// TODO Auto-generated method stub
		super.addHandler(pageId, viewId, eventType, handler);
	}

	@Override
	@Export("startApp")
	public void startApp(JavaScriptObject initialState) {
		// TODO Auto-generated method stub
		super.startApp(initialState);
	}

	@Override
	@Export("updateAppState")
	public void updateAppState(JavaScriptObject state) {
		// TODO Auto-generated method stub
		super.updateAppState(state);
	}

	@Override
	public Geolocation getGeolocationService() {
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
	protected void initializeServices() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public <E> E getViewFragment(String viewId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ApplicationCache getApplicationCacheService() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected void storeCurrentAppState() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean isVisible() {
	    // TODO Auto-generated method stub
	    return false;
	}

	

}
