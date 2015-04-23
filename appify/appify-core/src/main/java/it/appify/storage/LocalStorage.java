package it.appify.storage;

import com.github.nmorel.gwtjackson.client.ObjectMapper;
import com.google.gwt.storage.client.Storage;

public abstract class LocalStorage extends AbstractStorage {
	public LocalStorage() {
		super();
	}

	@Override
	public String getType() {
		return LOCAL_STORAGE;
	}

	@Override
	protected Storage getStorage() {
		return Storage.getLocalStorageIfSupported();
	}

	protected abstract <M> ObjectMapper<M> getObjectMapper();
}
