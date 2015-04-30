package it.appify.api;

public interface ScrOrientation<Element> extends HasHandlers {

	public interface ScreenOrientationCallback {
		public void onScreenOrientationChange(ScreenOrientation newOrientation);

	}

	public final static String ANY = "any";
	public final static String NATURAL = "natural";
	public final static String PORTRAIT = "portrait";
	public final static String PORTRAIT_PRIMARY = "portrait-primary";
	public final static String PORTRAIT_SECONDARY = "portrait-secondary";
	public final static String LANDSCAPE_SECONDARY = "landscape-secondary";
	public final static String LANDSCAPE_PRIMARY = "landscape-primary";

	// https://github.com/muten84/HTML5-API-demos/blob/master/demos/screen-orientation-api-demo.html

	public void requestFullScreen();

	public void exitFullScreen();

	public void lockOrientation(String orientationType);

	public void unlockOrientation();

	public void addOrientationChangeHandler(ScreenOrientationCallback callback);

	public Screen getScreen();

	public ScreenOrientation getScreenOrientation();
}
