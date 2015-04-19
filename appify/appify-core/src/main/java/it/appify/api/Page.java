package it.appify.api;

public interface Page<E> extends HasViewHandlers {

	public String getPageId();

	public E getElementInPage(String elemId);

	public E getRootElement();

}
