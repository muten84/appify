package it.appify.storage;

import com.github.nmorel.gwtjackson.client.ObjectMapper;
import com.google.gwt.storage.client.Storage;

public abstract class SessionStorage extends AbstractStorage {

	public SessionStorage() {
		super();
	}
	
	@Override
	public String getType() {
		return SESSION_STORAGE;
	}

	@Override
	protected Storage getStorage() {
		return Storage.getSessionStorageIfSupported();
	}

	protected abstract <M> ObjectMapper<M> getObjectMapper();

}
