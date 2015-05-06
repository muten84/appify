package it.appify.api;

public interface PageManager<E> {
	/*
	 * fade scale-in scale-out rotate-left rotate-right cube-left cube-right
	 * swap-left swap-right explode-in explode-out slide-left slide-right
	 * slide-up slide-down
	 */
	public static interface Transitions {
		public static final String FADE = "fade";
		public static final String SCALE_IN = "scale-in";
		public static final String SCALE_OUT = "scale-out";
		public static final String EXPLODE_IN = "explode-in";
		public static final String EXPLODE_OUT = "explode-out";
		public static final String ROTATE_LEFT = "rotate-left";
		public static final String ROTATE_RIGHT = "rotate-right";
		public static final String CUBE_LEFT = "cube-left";
		public static final String CUBE_RIGHT = "cube-right";
		public static final String SWAP_LEFT = "swap-left";
		public static final String SWAP_RIGHT = "swap-right";
		public static final String SLIDE_LEFT = "slide-left";
		public static final String SLIDE_RIGHT = "slide-right";
		public static final String SLIDE_UP = "slide-up";
		public static final String SLIDE_DOWN = "slide-down";

	}

	public static interface PageListener<E> {
		public void onPageCreate(Page<E> page);

		public void onPageReady(Page<E> page);

		public void onPageShow(Page<E> page);

		public void onPageHide(Page<E> page);
	}

	public void showPage(String name);

	public Page<E> getCurrentPage();

	public void setPageListener(PageListener<E> pageListener);

	public void setDefaultTransition(String transitionName);

	public void openContextMenu(String viewId);

	public void closeContextMenu();

	public boolean isContextMenuOpened();

	public void showPage(String pageName, String transitionType);

}
