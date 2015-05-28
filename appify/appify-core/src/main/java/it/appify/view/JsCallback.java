package it.appify.view;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.user.client.rpc.AsyncCallback;

public class JsCallback implements AsyncCallback<Boolean> {
	private JavaScriptObject resolve;

	private JavaScriptObject reject;

	private JsCallback() {

	}

	public static JsCallback create() {
		return new JsCallback();
	}

	@Override
	public void onFailure(Throwable caught) {
		_callFunction(reject);
	}

	@Override
	public void onSuccess(Boolean result) {
		_callFunction(resolve);

	}

	private native void _callFunction(JavaScriptObject funk) /*-{
		if (funk.call) {
			funk.call();
		}
	}-*/;

	public JavaScriptObject getResolve() {
		return resolve;
	}

	public void setResolve(JavaScriptObject resolve) {
		this.resolve = resolve;
	}

	public JavaScriptObject getReject() {
		return reject;
	}

	public void setReject(JavaScriptObject reject) {
		this.reject = reject;
	}

}