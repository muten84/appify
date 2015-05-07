package it.appify.api;

import java.io.Serializable;

public interface HasModel<M> {

	public String getModelId();

	public M getCurrentModel();

	public void updateModel(M model);

	public static interface ViewModelHandler {

		public <M> void onEvent(String eventType, String pageId, String sourceElementId, M jsonModel);
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
			result = prime * result + ((pageId == null) ? 0 : pageId.hashCode());
			result = prime * result + ((viewId == null) ? 0 : viewId.hashCode());
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
