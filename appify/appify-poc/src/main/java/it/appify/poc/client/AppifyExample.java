package it.appify.poc.client;

import it.appify.api.HasViewHandlers.ViewHandler;
import it.appify.api.ModelView;
import it.appify.api.Page;
import it.appify.api.PageManager;
import it.appify.api.PageManager.PageListener;
import it.appify.poc.client.model.ChildModel;
import it.appify.poc.client.model.ExampleViewModel;
import it.appify.poc.client.model.Model;
import it.appify.view.AppJsPageManager;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.Element;

public class AppifyExample implements EntryPoint {

	@Override
	public void onModuleLoad() {
		// define your model
		final Model m = new Model("Model View View Model POC");
		m.setContent("Lorem Ipsum Content");
		m.setChilePageTitle("Child Page Title");
		m.setChildPageContent("Child Page Content");
		m.setInput("Input text injected");
		ChildModel c = new ChildModel();
		c.setTitle("Child object Title");
		c.setContent("Child object content");
		m.setChild(c);

		// initialize your page manager with a web page manager
		PageManager<Element> webPageManager = new AppJsPageManager();
		webPageManager.setPageListener(new PageListener<Element>() {

			@Override
			public void onPageShow(Page<Element> page) {
				GWT.log("onPageShow " + page.getPageId() + " - "
						+ page.getRootElement().getTagName());

			}

			@Override
			public void onPageHide(Page<Element> page) {
				// TODO Auto-generated method stub

			}
		});

		/*
		 * important!!! show the page before bind to model cause the show attach
		 * it to the DOM!!!!!!
		 */
		webPageManager.showPage("mainPage");

		// create a web view model and bind to the instance of your model
		final ModelView<Model, Element> vm = new ExampleViewModel();
		vm.bindModelToView("mainPage", m);

		// define your view handlers!!
		webPageManager.getCurrentPage().addViewHandler("changeValueBtn",
				"click", new ViewHandler() {

					@Override
					public void onEvent(String type) {
						GWT.log("changing Title");
						m.setTitle("Titolo Modificato");
						m.setContent("Loer Ipsum Modified");
						vm.updateModel(m);
					}
				});

	}
}
