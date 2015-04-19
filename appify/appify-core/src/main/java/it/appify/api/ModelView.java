package it.appify.api;

public interface ModelView<M, V> extends HasModel<M>, HasView<V> {

	public static interface ModelListener<M> {
		public void onChange(M oldValue, M newValue);
	}

	public void bindModelToView(String viewId, M instance);

	public void watchModel(ModelListener<M> listener);
}
