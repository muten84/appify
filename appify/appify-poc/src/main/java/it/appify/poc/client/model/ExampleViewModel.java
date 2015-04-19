package it.appify.poc.client.model;

import it.appify.view.VueJsViewModel;

import com.github.nmorel.gwtjackson.client.ObjectMapper;
import com.google.gwt.core.shared.GWT;

public class ExampleViewModel extends VueJsViewModel<Model> {

	public static interface ModelBeanMapper extends ObjectMapper<Model> {
	}

	private ObjectMapper<Model> mapper;

	@Override
	protected ObjectMapper<Model> getObjectMapper() {
		if (mapper == null) {
			mapper = GWT.create(ModelBeanMapper.class);
		}
		return mapper;
	}

}
