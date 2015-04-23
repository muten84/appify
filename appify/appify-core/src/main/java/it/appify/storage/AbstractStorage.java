package it.appify.storage;

import com.github.nmorel.gwtjackson.client.ObjectMapper;
import com.google.gwt.storage.client.Storage;

public abstract class AbstractStorage implements it.appify.api.Storage {
	protected Storage storage;

	public AbstractStorage() {
		storage = getStorage();
	}

	@Override
	public <M> void store(String key, M model) {
		String data = getObjectMapper().write(model);
		storage.setItem(key, data);
	}

	@Override
	public <M> M get(String key) {
		String data = storage.getItem(key);
		M model = this.<M> getObjectMapper().read(data);
		return model;
	}

	@Override
	public void remove(String key) {
		storage.removeItem(key);
	}

	protected abstract <M> ObjectMapper<M> getObjectMapper();

	protected abstract Storage getStorage();
}
