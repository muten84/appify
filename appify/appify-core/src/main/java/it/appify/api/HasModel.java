package it.appify.api;

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
/**
 * Generic has model interface
 * 
 * @author Luigi
 *
 * @param <M>
 */
public interface HasModel<M> {

	public String getModelId();

	public M getCurrentModel();

	public void updateModel(M model);

	public static interface ViewModelHandler<I> {

		public void onEvent(String eventType, String pageId,
				String sourceElementId, I jsonModel);
	}

	public static class VMKey {
		private String pageId;
		private String viewId;

		public VMKey(String pageId, String viewId) {
			this.pageId = pageId;
			this.viewId = viewId;
		}

		public String getPageId() {
			return pageId;
		}

		public void setPageId(String pageId) {
			this.pageId = pageId;
		}

		public String getViewId() {
			return viewId;
		}

		public void setViewId(String viewId) {
			this.viewId = viewId;
		}

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result
					+ ((pageId == null) ? 0 : pageId.hashCode());
			result = prime * result
					+ ((viewId == null) ? 0 : viewId.hashCode());
			return result;
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			VMKey other = (VMKey) obj;
			if (pageId == null) {
				if (other.pageId != null)
					return false;
			} else if (!pageId.equals(other.pageId))
				return false;
			if (viewId == null) {
				if (other.viewId != null)
					return false;
			} else if (!viewId.equals(other.viewId))
				return false;
			return true;
		}

	}

}
