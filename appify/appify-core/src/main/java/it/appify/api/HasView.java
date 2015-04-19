package it.appify.api;

public interface HasView<V> {

	public V getCurrentView();

	public String getViewId();

}
