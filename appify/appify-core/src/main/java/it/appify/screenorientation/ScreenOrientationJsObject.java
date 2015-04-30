package it.appify.screenorientation;

import it.appify.api.ScrOrientation.ScreenOrientationCallback;
import it.appify.api.Screen;
import it.appify.api.ScreenOrientation;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.dom.client.Element;

public class ScreenOrientationJsObject {
	/*
	 * var prefix = 'orientation' in screen ? '' : 'mozOrientation' in screen ? 'moz' : 'msOrientation' in screen ? 'ms'
	 * : null; use prefix var for old version API
	 */

	private JavaScriptObject fullscreen;

	private JavaScriptObject screen;

	private JavaScriptObject screenOrientation;

	private ScreenOrientationCallback callback;

	public ScreenOrientationJsObject() {
		fullscreen = getFullScreenObject();
		screen = _getScreen();
		screenOrientation = _getScreenOrientation();
	}

	protected ScreenOrientation getScreenOrientationDetails() {
		ScreenOrientation or = new ScreenOrientation();
		or.setAngle(_getSceenAngle());
		or.setType(_getScreenType());
		return or;

	}

	protected Screen getScreenDetails() {
		Screen screen = new Screen();
		screen.setAvailHeight(_getAvailHeight());
		screen.setAvailWidth(_getAvailWidth());
		screen.setColorDepth(_getColorDepth());
		return screen;
	}

	private native final String _getScreenType() /*-{
		return $wnd.screenOrientation.type;
	}-*/;

	private native final double _getSceenAngle() /*-{
		return $wnd.screenOrientation.angle;
	}-*/;

	private native final int _getColorDepth() /*-{
		return $wnd.screen.availHeight;
	}-*/;

	private native final int _getAvailHeight() /*-{
		return $wnd.screen.availHeight;
	}-*/;

	private native final int _getAvailWidth() /*-{
		return $wnd.screen.availWidth;
	}-*/;

	protected native final JavaScriptObject _getScreen()/*-{

		return $wnd.screen;
	}-*/;

	protected native final JavaScriptObject _getScreenOrientation()/*-{
		$wnd.screenOrientation = $wnd.screen;
		if ('orientation' in screen && 'angle' in screen.orientation) {
			// The browser supports the new version of the API			
			return $wnd.screenOrientation;
		}
		return null;
	}-*/;

	protected native void _requestFullScreen(Element el) /*-{
		$wnd.Fullscreen.launch(el);
	}-*/;

	protected native void _exitFullScreen() /*-{
		$wnd.Fullscreen.exit();
	}-*/;

	protected native void _screenOrientationUnlock() /*-{
		$wnd.screenOrientation.unlock();
	}-*/;

	protected native void _screenOrientationLock(String orientationType) /*-{
		$wnd.screenOrientation.lock(orientationType);
	}-*/;

	private native JavaScriptObject _getFullScreenObject()/*-{
		$wnd.Fullscreen = {
			launch : function(element) {
				if (element.requestFullscreen) {
					element.requestFullscreen();
				} else if (element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if (element.webkitRequestFullscreen) {
					element.webkitRequestFullscreen();
				} else if (element.msRequestFullscreen) {
					element.msRequestFullscreen();
				}
			},
			exit : function() {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			}
		};
		return $wnd.Fullscreen;
	}-*/;

	protected JavaScriptObject getFullScreenObject() {
		if (fullscreen == null) {
			fullscreen = _getFullScreenObject();
		}
		return fullscreen;
	}

	private void onNewScreenDetails() {
		if (this.callback != null) {
			ScreenOrientation newOrientation = getScreenOrientationDetails();
			this.callback.onScreenOrientationChange(newOrientation);
		}
	}

	protected void addChangeHandler(ScreenOrientationCallback callback) {
		if (this.callback == null) {
			this.callback = callback;
			_addChangeHandler();
		}
		
	}

	protected native void _addChangeHandler()/*-{
		var that = this;
		$wnd.screenOrientation
				.addEventListener(
						'change',
						function() {
							//something is changed... what?? -> read all
							that
									.@it.appify.screenorientation.ScreenOrientationJsObject::onNewScreenDetails();
						});
	}-*/;

}
