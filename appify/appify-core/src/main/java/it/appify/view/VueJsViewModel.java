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
package it.appify.view;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import com.github.nmorel.gwtjackson.client.ObjectMapper;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsonUtils;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.Element;
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.user.client.Event;

public abstract class VueJsViewModel<M> implements WebModelView<M> {

	private Element el;

	private M model;

	private Map<VMKey, ViewModelHandlerHolder<?>> handlers;

	protected abstract ObjectMapper<M> getObjectMapper();

	public VueJsViewModel() {
		handlers = new HashMap<VMKey, ViewModelHandlerHolder<?>>();
	}

	@Override
	public String getModelId() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public M getCurrentModel() {
		if (this.model == null) {
			M dummyM = getObjectMapper().read("{}");
			return dummyM;
		}
		this.model = getModel();
		return this.model;
	}

	@Override
	public Element getCurrentView() {
		return el;
	}

	@Override
	public String getViewId() {
		Element e = _getView().cast();
		return e.getId();

	}

	@Override
	public void bindModelToView(String viewId, M instance) {
		this.model = instance;
		String json = getObjectMapper().write(instance);
		JavaScriptObject jsObj = JsonUtils.safeEval(json);
		_create(viewId, jsObj);
	}

	protected void onDataReceived(JavaScriptObject view, JavaScriptObject model, JavaScriptObject event) {
		Element e = view.cast();
		JSONObject modelJson = new JSONObject(model);
		Event gwtEvent = event.cast();
		// GWT.log("getViewId: " + getViewId());
		// GWT.log("onDataReceived View  is: " + e.toString());
		// GWT.log("onDataReceived Model is: " + modelJson.toString());
		// GWT.log("onDataReceived Event is: " + gwtEvent.getType());
		// GWT.log("getCurrentEventTarget: "
		// + gwtEvent.getCurrentEventTarget().toString());
		// GWT.log("getParentElement: " + e.getParentElement().getId());
		String viewId = getViewId();
		String parentId = e.getParentElement().getId();
		VMKey key = new VMKey(viewId, parentId);
		JSONArray array = modelJson.isArray();
		if (array != null) {
			modelJson = array.get(0).isObject();
		}
		Set<String> keySet = modelJson.keySet();
		if(keySet.size()==1) {
			modelJson = modelJson.get(keySet.iterator().next()).isObject();
					
		}		
		// TODO: important!! model event disaptching!!
		ViewModelHandlerHolder<?> holder = handlers.get(key);
		if (holder != null) {
			GWT.log("-->" + modelJson.toString());
			Serializable o = (Serializable) holder.getObjectMapper().read(modelJson.toString());
			holder.getHandler().onEvent(gwtEvent.getType(), getViewId(), e.getParentElement().getId(), o);
		} else {
			GWT.log("holder is null: " + viewId + " - " + parentId);
		}
		// TODO: important!! model event disaptching!!

	}

	@Override
	public void addViewModelHandler(String pageId, String viewId, ViewModelHandlerHolder holder) {
		VMKey key = new VMKey(pageId, viewId);
		handlers.put(key, holder);
	}

	private native JavaScriptObject _create(String viewId, JavaScriptObject json)/*-{
		var that = this;
		$wnd.vm = new $wnd.Vue(
				{
					el : '#' + viewId,
					data : json,
					methods : {
						onData : function(item, e) {
							console.log('on data...');
							that.@it.appify.view.VueJsViewModel::onDataReceived(Lcom/google/gwt/core/client/JavaScriptObject;Lcom/google/gwt/core/client/JavaScriptObject;Lcom/google/gwt/core/client/JavaScriptObject;)(item.$el,item.$data,e);
						}
					}
				});
		return $wnd.vm;
	}-*/;

	@Override
	public void watchModel(it.appify.api.ModelView.ModelListener<M> listener) {
		// TODO Auto-generated method stub

	}

	@Override
	public void updateModel(M model) {
		String json = getObjectMapper().write(model);
		JavaScriptObject jsObj = JsonUtils.safeEval(json);
		_updateModel(jsObj);
	}

	private native void _updateModel(JavaScriptObject newModel)/*-{
		$wnd.vm.$data = newModel;
	}-*/;

	private M getModel() {
		JavaScriptObject jso = _getModel();
		JSONObject jsonObj = new JSONObject(jso);
		M m = getObjectMapper().read(jsonObj.toString());
		return m;
	}

	private native JavaScriptObject _getView()/*-{
		return $wnd.vm.$el;
	}-*/;

	private native JavaScriptObject _getModel()/*-{
		return $wnd.vm.$data;
	}-*/;

}
