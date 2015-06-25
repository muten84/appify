package it.appify.poc.client;

import it.appify.api.ApplicationCache;
import it.appify.api.HasViewHandlers.ViewHandler;
import it.appify.app.AbstractWebApp;
import it.appify.poc.client.model.ExampleViewModel.ModelBeanMapper;
import it.appify.poc.client.model.Model;
import it.appify.poc.client.util.Utils;
import it.appify.view.VueJsViewModel;
import it.appify.view.WebModelView;

import com.github.nmorel.gwtjackson.client.ObjectMapper;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.shared.GWT;

public class WebAppEntryPoint implements EntryPoint {

	@Override
	public void onModuleLoad() {
		Model myappState = Utils.createModel();
		final AbstractWebApp<Model> webapp = new AbstractWebApp<Model>(
				"mainPage") {

			
			@Override
			protected WebModelView<Model> getAppStateModelView() {
				return new VueJsViewModel<Model>() {

					private ObjectMapper<Model> mapper;

					@Override
					protected ObjectMapper<Model> getObjectMapper() {
						if (mapper == null) {
							mapper = GWT.create(ModelBeanMapper.class);
						}
						return mapper;
					}

				};
			}

			@Override
			protected void initializeControllers() {
				// TODO Auto-generated method stub
				
			}

			@Override
			protected void initializeServices() {
				// TODO Auto-generated method stub
				
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

		};

		webapp.startApp(myappState);

		webapp.addHandler("mainPage", "nextBtn", "click", new ViewHandler() {

			@Override
			public void onEvent(String type, String source) {
				webapp.moveTo("childPage");
				webapp.addHandler("childPage", "childPageBackBtn", "click",
						new ViewHandler() {

							@Override
							public void onEvent(String type, String source) {
								webapp.back();
							}
						});
			}
		});
	}

	
}
