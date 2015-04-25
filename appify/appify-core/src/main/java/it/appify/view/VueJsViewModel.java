package it.appify.view;

import it.appify.api.ModelView;

import com.github.nmorel.gwtjackson.client.ObjectMapper;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsonUtils;
import com.google.gwt.dom.client.Element;
import com.google.gwt.json.client.JSONObject;

public abstract class VueJsViewModel<M> implements WebModelView<M> {

	private Element el;

	private M model;

	protected abstract ObjectMapper<M> getObjectMapper();

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
		return el.getId();

	}

	@Override
	public void bindModelToView(String viewId, M instance) {
		this.model = instance;
		String json = getObjectMapper().write(instance);
		JavaScriptObject jsObj = JsonUtils.safeEval(json);
		_create(viewId, jsObj);
	}

	private native JavaScriptObject _create(String viewId, JavaScriptObject json)/*-{
		$wnd.vm = new $wnd.Vue({
			el : '#' + viewId,
			data : json
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

	private native JavaScriptObject _getModel()/*-{
		return $wnd.vm.$data;
	}-*/;

}
