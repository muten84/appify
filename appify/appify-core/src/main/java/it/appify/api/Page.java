package it.appify.api;

import com.google.gwt.user.client.rpc.AsyncCallback;

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
public interface Page<E> extends HasViewHandlers {
    
    public static interface PageActionCallback {
		public void refresh(AsyncCallback<Boolean> cb);		
    	}

    public static interface KeyboardActionCallback{
    		public void accepted(String text);
	}


	public String getPageId();

	public E getElementInPage(String elemId);

	public E getRootElement();

	public void toggleClassViewStyle(String viewId, String className);

	public boolean hasStyle(String viewId, String className);

	public boolean isModalActive(String modalId);

	public void showModal(String modalId);

	public void closeModal(String modalId);

	/*
	 * provisional api https://github.com/sandywalker/webui-popover
	 */
	public void popover(String viewId, String title, String content,
			String animation);

	public void mask(String label);

	public void unmask();

	public void decorate();

	
	public void addPullToRefreshHandler(PageActionCallback paCb);

	public void keyboard(String viewId, KeyboardActionCallback cb);

	public void triggerEvent(String viewId, String eventType);
	
	public void setElementValue(String viewId, String val);

	public String getElementValue(String viewId);

	public void setElementText(String viewId, String text);

	public String getElementText(String viewId);

	public void disableElement(String viewId);

	public void enableElement(String viewId);

	public void disableElements(String clazz);

	public void enableElements(String clazz);

}
