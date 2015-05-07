/*
 * Appify - a tiny frontend framework to build complex mobile apps.
 * 
 * Copyright (C) 2015 Luigi Bifulco Appify is free software: you can
 * redistribute it and/or modify it under the terms of the GNU General Public
 * License as published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */
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
		if (data == null) {
			return null;
		}
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
