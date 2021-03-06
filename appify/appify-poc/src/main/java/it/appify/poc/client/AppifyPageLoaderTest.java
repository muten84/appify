package it.appify.poc.client;

import it.appify.api.Battery;
import it.appify.api.Battery.BatteryStatusCallback;
import it.appify.api.BatteryStatus;
import it.appify.api.HasViewHandlers.ViewHandler;
import it.appify.api.HasViewHandlers.ViewHandlerHolder;
import it.appify.api.ModelView;
import it.appify.api.PageManager;
import it.appify.api.Storage;
import it.appify.battery.AdvancedJSBattery;
import it.appify.poc.client.model.ChildModel;
import it.appify.poc.client.model.ExampleViewModel;
import it.appify.poc.client.model.ExampleViewModel.ModelBeanMapper;
import it.appify.poc.client.model.Model;
import it.appify.poc.client.util.Utils;
import it.appify.storage.LocalStorage;
import it.appify.view.AppJsPageManager;
import it.appify.view.AppJsUtils;
import it.appify.view.PageLoader;

import java.util.Arrays;
import java.util.List;

import com.github.nmorel.gwtjackson.client.ObjectMapper;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.Element;

public class AppifyPageLoaderTest implements EntryPoint {

	PageManager<Element> pm;

	ModelView<Model, Element> vm;

	Model m;

	Storage storage;

	Battery battery;

	@Override
	public void onModuleLoad() {
		// define your model
		m = createModel();
		// inject pagemanager
		pm = new AppJsPageManager();
		// define a view model
		vm = new ExampleViewModel();
		// inject battery
		battery = new AdvancedJSBattery();
		// inject storage
		storage = new LocalStorage() {

			@Override
			protected <M> ObjectMapper<M> getObjectMapper() {
				return GWT.create(ModelBeanMapper.class);
			}
		};
		// define your view handlersut
		ViewHandlerHolder changeValueBtnHandler = Utils.createClickHandler(
				"changeValueBtn", new ViewHandler() {

					@Override
					public void onEvent(String type, String source) {
						GWT.log("received onEvent for " + type
								+ " event type from" + source
								+ "... changing model");
						m.setTitle("Titolo Modificato");
						m.setContent("Loer Ipsum Modified");
						vm.updateModel(m);

					}
				});
		List<ViewHandlerHolder> handlers = Arrays
				.asList(new ViewHandlerHolder[] { changeValueBtnHandler });
		// inject in the application context
		final PageLoader<Element, Model> loader = new PageLoader<Element, Model>(
				pm, vm);
		// load the page and inject the model instance
		loader.loadPage("mainPage", m, handlers);
		// add an handler to the nextBt view
		loader.addPageViewHandler("mainPage",
				Utils.createClickHandler("nextBtn", new ViewHandler() {

					@Override
					public void onEvent(String type, String source) {
						ViewHandlerHolder childPageBackBtnHandler = Utils
								.createClickHandler("childPageBackBtn",
										new ViewHandler() {

											@Override
											public void onEvent(String type,
													String source) {
												GWT.log("onEvent: " + type
														+ " - " + source);
												loader.loadPage("mainPage", m);

											}
										});
						List<ViewHandlerHolder> handlers = Arrays
								.asList(new ViewHandlerHolder[] { childPageBackBtnHandler });
						loader.loadPage("childPage", m, handlers);

					}
				}));

		loader.addPageViewHandler("mainPage",
				Utils.createClickHandler("getModelBtn", new ViewHandler() {

					@Override
					public void onEvent(String type, String source) {
						Model m = vm.getCurrentModel();
						AppJsUtils.alert("Current Model...", m.toString(), "OK");
						storage.store("model", m);
					}
				}));

		loader.addPageViewHandler("mainPage", Utils.createClickHandler(
				"getModelFromStorageBtn", new ViewHandler() {

					@Override
					public void onEvent(String type, String source) {
						Model m = storage.get("model");
						AppJsUtils.alert("Current Model from storage...",
								m.toString(), "OK");

					}
				}));

		loader.addPageViewHandler("mainPage", Utils.createClickHandler(
				"getBatteryStatusBtn", new ViewHandler() {

					@Override
					public void onEvent(String type, String source) {
						battery.getBatteryStatus(new BatteryStatusCallback() {

							@Override
							public void onBatteryStatus(
									BatteryStatus currentStatus) {
								AppJsUtils.alert("Battery Status...",
										currentStatus.toString(), "OK");

							}
						});

					}
				}));

	}

	private Model createModel() {

		final Model m = new Model("Model View View Model POC");
		m.setContent("Lorem Ipsum Content");
		m.setChilePageTitle("Child Page Title");
		m.setChildPageContent("Child Page Content");
		m.setInput("Input text injected");
		ChildModel c = new ChildModel();
		c.setTitle("Child object Title");
		c.setContent("Child object content");
		m.setChild(c);
		m.setItems(Arrays.asList(new String[] { "Dynamic Item 1",
				"Dynamic Item 2" }));
		return m;
	}
}
