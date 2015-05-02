package it.appify.poc.client;

import it.appify.api.HasViewHandlers.ViewHandler;
import it.appify.api.HasViewHandlers.ViewHandlerHolder;
import it.appify.app.AbstractWebApp;
import it.appify.view.VueJsViewModel;
import it.appify.view.WebModelView;
import it.appify.view.WebPage;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.github.nmorel.gwtjackson.client.ObjectMapper;
import com.google.gwt.core.shared.GWT;

@ExportPackage("appify")
@Export("app")
public class App extends AbstractWebApp<GenericModel> implements Exportable {

	@ExportPackage("appify")
	@Export("model")
	public static interface GenericModelBeanMapper extends
			ObjectMapper<GenericModel> {
	}

	public App(String mainPage) {
		super(mainPage);
	}

	@Override
	@Export("startApp")
	public void startApp(GenericModel initialState) {
		// TODO Auto-generated method stub
		super.startApp(initialState);
	}

	@Override
	@Export("addHandler")
	public void addHandler(String pageId, String viewId, String eventType,
			ViewHandler handler) {
		// TODO Auto-generated method stub
		super.addHandler(pageId, viewId, eventType, handler);
	}

	@Override
	@Export("getAppStateModelView")
	protected WebModelView<GenericModel> getAppStateModelView() {
		return new VueJsViewModel<GenericModel>() {
			@Override
			protected ObjectMapper<GenericModel> getObjectMapper() {
				return GWT.create(GenericModelBeanMapper.class);
			}
		};
	}

	@Override
	@Export("back")
	public void back() {
		// TODO Auto-generated method stub
		super.back();
	}

	@Override
	@Export("bindHandlerToPage")
	protected void bindHandlerToPage(String pageId, ViewHandlerHolder holder) {
		// TODO Auto-generated method stub
		super.bindHandlerToPage(pageId, holder);
	}

	@Override
	@Export("createViewHandler")
	protected ViewHandlerHolder createViewHandler(String pageId, String viewId,
			String eventType, ViewHandler handler) {
		// TODO Auto-generated method stub
		return super.createViewHandler(pageId, viewId, eventType, handler);
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
	@Export("updateAppState")
	public void updateAppState(GenericModel state) {
		// TODO Auto-generated method stub
		super.updateAppState(state);
	}

	@Override
	protected void initializeControllers() {
		// TODO Auto-generated method stub

	}

	@Override
	protected void initializeServices() {
		// TODO Auto-generated method stub
		
	}

}
