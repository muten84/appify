package it.appify.poc.client;

import it.appify.api.HasViewHandlers.Util;
import it.appify.api.HasViewHandlers.ViewHandler;
import it.appify.api.HasViewHandlers.ViewHandlerHolder;
import it.appify.api.ModelView;
import it.appify.api.PageManager;
import it.appify.poc.client.model.ChildModel;
import it.appify.poc.client.model.ExampleViewModel;
import it.appify.poc.client.model.Model;
import it.appify.view.AppJsPageManager;
import it.appify.view.PageLoader;

import java.util.Arrays;
import java.util.List;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.Element;

public class AppifyPageLoaderTest implements EntryPoint {

	PageManager<Element> pm;

	ModelView<Model, Element> vm;

	Model m;

	@Override
	public void onModuleLoad() {
		// define your model
		m = createModel();
		// inject pagemanager
		pm = new AppJsPageManager();
		// define a view model
		vm = new ExampleViewModel();
		// define your view handlersut
		ViewHandlerHolder changeValueBtnHandler = createClickHandler("changeValueBtn", new ViewHandler() {

			@Override
			public void onEvent(String type, String source) {
				GWT.log("received onEvent for " + type + " event type from" + source + "... changing model");
				m.setTitle("Titolo Modificato");
				m.setContent("Loer Ipsum Modified");
				vm.updateModel(m);

			}
		});
		List<ViewHandlerHolder> handlers = Arrays.asList(new ViewHandlerHolder[] { changeValueBtnHandler });
		// inject in the application context
		final PageLoader<Element, Model> loader = new PageLoader<Element, Model>(pm, vm);
		// load the page and inject the model instance
		loader.loadPage("mainPage", m, handlers);
		// add an handler to the nextBt view
		loader.addPageViewHandler("mainPage", createClickHandler("nextBtn", new ViewHandler() {

			@Override
			public void onEvent(String type, String source) {
				ViewHandlerHolder childPageBackBtnHandler = createClickHandler("childPageBackBtn", new ViewHandler() {

					@Override
					public void onEvent(String type, String source) {
						GWT.log("onEvent: " + type + " - " + source);
						loader.loadPage("mainPage", m);

					}
				});
				List<ViewHandlerHolder> handlers = Arrays.asList(new ViewHandlerHolder[] { childPageBackBtnHandler });
				loader.loadPage("childPage", m, handlers);

			}
		}));

	}

	private ViewHandlerHolder createClickHandler(String viewId, ViewHandler h) {
		return Util.createHandler(

		viewId, "click", h);
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
		return m;
	}
}
