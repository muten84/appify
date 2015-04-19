package it.appify.api;

import java.util.Iterator;

public interface HasViewHandlers {

	public static class Util {
		public static ViewHandlerHolder createHandler(String viewId,
				String eventType, ViewHandler handler) {
			ViewHandlerHolder h = new ViewHandlerHolder();
			h.setEventType(eventType);
			h.setViewId(viewId);
			h.setHandler(handler);
			return h;
		}
	}

	public static interface ViewHandler {

		public void onEvent(String type, String source);
	}

	public static class ViewHandlerHolder {
		private String viewId;
		private String eventType;
		private ViewHandler handler;

		public String getViewId() {
			return viewId;
		}

		public void setViewId(String viewId) {
			this.viewId = viewId;
		}

		public String getEventType() {
			return eventType;
		}

		public void setEventType(String eventType) {
			this.eventType = eventType;
		}

		public ViewHandler getHandler() {
			return handler;
		}

		public void setHandler(ViewHandler handler) {
			this.handler = handler;
		}

	}

	public void addViewHandler(String id, String type, ViewHandler h);

	public Iterator<ViewHandlerHolder> getViewHandlers();

}
