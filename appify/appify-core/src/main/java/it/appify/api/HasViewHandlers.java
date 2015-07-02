package it.appify.api;

import java.util.Iterator;

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
	
	public void addViewsHandler(String _class, String type, ViewHandler h);

	public Iterator<ViewHandlerHolder> getViewHandlers();

}
