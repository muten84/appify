package it.appify.view;

import com.github.nmorel.gwtjackson.client.ObjectMapper;

import it.appify.api.HasModel.ViewModelHandler;

public abstract class ViewModelHandlerHolder<M> {

	private ViewModelHandler handler;

	public ViewModelHandlerHolder(ViewModelHandler handler) {
		this.handler = handler;
	}

	protected abstract ObjectMapper<M> getObjectMapper();

	public ViewModelHandler getHandler() {
		return handler;
	}

	public void setHandler(ViewModelHandler handler) {
		this.handler = handler;
	}

}
