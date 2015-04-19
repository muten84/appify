package it.appify.api;

public interface PageManager {

	public static interface PageListener {
		public void onPageShow(Page page);

		public void onPageHide(Page page);
	}

	public void showPage(String name);

	public Page getCurrentPage();

	public void setPageListener(PageListener pageListener);
}
