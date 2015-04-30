package it.appify.screenorientation;

import com.google.gwt.dom.client.Element;

import it.appify.api.ScrOrientation;
import it.appify.api.Screen;
import it.appify.api.ScreenOrientation;

public class WebScreenOrientation implements ScrOrientation<Element> {

	private ScreenOrientationJsObject screenObject;

	@Override
	public void requestFullScreen(Element e) {
		screenObject._requestFullScreen(e);

	}

	@Override
	public void exitFullScreen() {
		screenObject._exitFullScreen();

	}

	@Override
	public void lockOrientation(String orientationType) {
		screenObject._screenOrientationLock(orientationType);

	}

	@Override
	public void unlockOrientation() {
		screenObject._screenOrientationUnlock();

	}

	@Override
	public void addHandler(final String type, final Handler h) {
		if (type.equals("change")) {
			this.addOrientationChangeHandler(new ScreenOrientationCallback() {

				@Override
				public void onScreenOrientationChange(ScreenOrientation newOrientation) {
					h.onEvent(type, "screen.orientation");

				}
			});
		}

	}

	@Override
	public Screen getScreen() {
		return screenObject.getScreenDetails();
	}

	@Override
	public ScreenOrientation getScreenOrientation() {
		return screenObject.getScreenOrientationDetails();
	}

	@Override
	public void addOrientationChangeHandler(it.appify.api.ScrOrientation.ScreenOrientationCallback callback) {
		screenObject.addChangeHandler(callback);

	}

}
