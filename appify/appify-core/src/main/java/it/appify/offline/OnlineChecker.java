package it.appify.offline;

import com.google.gwt.core.client.GWT;
import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.Response;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;

public class OnlineChecker {

	public static interface CheckOnlineCallback {

		public void onOnline();

		public void onOffline();

	}

	public void checkOnline(final CheckOnlineCallback callback) {
		// logger.info("Checking online/offline status...");
		String url = GWT.getHostPageBaseURL() + "online.json";
		// logger.info("Invoking url: " + url);
		RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, url);
		builder.setTimeoutMillis(5000);
		builder.setCallback(new RequestCallback() {

			@Override
			public void onResponseReceived(Request request, Response response) {
				// logger.info("onResponseReceived: " + response.getText());
				try {
					JSONValue value = JSONParser.parseStrict(response.getText());
					JSONObject flag = value.isObject();
					boolean isOnline = Boolean.valueOf(flag.get("online").isString().stringValue());
					if (isOnline) {
						callback.onOnline();
					} else {
						callback.onOffline();
					}
				} catch (Exception e) {
					callback.onOffline();
				}

			}

			@Override
			public void onError(Request request, Throwable exception) {
				GWT.log("!!!onError!!!", exception);
				callback.onOffline();
			}
		});
		try {
			builder.send();
		} catch (RequestException e) {
			GWT.log("!!!onError!!!", e);

		}
	}
}
