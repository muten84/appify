package it.appify.api;

public interface PageManager<E> {

	public static interface PageListener<E> {
		public void onPageShow(Page<E> page);

		public void onPageHide(Page<E> page);
	}

	public void showPage(String name);

	public Page<E> getCurrentPage();

	public void setPageListener(PageListener<E> pageListener);
}
