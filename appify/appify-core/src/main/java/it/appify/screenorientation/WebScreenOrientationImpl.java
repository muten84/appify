package it.appify.screenorientation;

import it.appify.api.Screen;
import it.appify.api.ScreenOrientation;

import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.Element;

public class WebScreenOrientationImpl implements WebScreenOrientation {

	private ScreenOrientationJsObject screenObject;

	public WebScreenOrientationImpl() {
		screenObject = new ScreenOrientationJsObject();
	}

	@Override
	public void requestFullScreen() {
		GWT.log("requestFullScreen:_ ");
		screenObject._requestFullScreen();

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
