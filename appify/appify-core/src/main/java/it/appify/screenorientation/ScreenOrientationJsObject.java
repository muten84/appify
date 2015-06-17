/*
 * Appify - a tiny frontend framework to build complex mobile apps.
 * 
 * Copyright (C) 2015 Luigi Bifulco Appify is free software: you can
 * redistribute it and/or modify it under the terms of the GNU General Public
 * License as published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */
package it.appify.screenorientation;

import it.appify.api.ScrOrientation.ScreenOrientationCallback;
import it.appify.api.Screen;
import it.appify.api.ScreenOrientation;
import it.appify.logging.ConsoleLogger;

import com.google.gwt.core.client.JavaScriptObject;

public class ScreenOrientationJsObject {
	/*
	 * var prefix = 'orientation' in screen ? '' : 'mozOrientation' in screen ?
	 * 'moz' : 'msOrientation' in screen ? 'ms' : null; use prefix var for old
	 * version API
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
	    	ConsoleLogger.getConsoleLogger().log("getScreenOrientationDetails");
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
	    var media = $wnd.matchMedia('(orientation: portrait)');
	    if(media && media.matches){
	        return "portrait-primary";
	    }
	    else{
	        return $wnd.screenOrientation.type;
	    }
	    //return $wnd.screenOrientation.type;
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
		$wnd.screenOrientation = $wnd.screen.orientation;
		if ('orientation' in screen && 'angle' in screen.orientation) {
			// The browser supports the new version of the API			
			return $wnd.screenOrientation;
		}
		$wnd.screenOrientation = {
			type : 'any',
			angle : 0,
			fullscreen : false
		};
		return $wnd.screenOrientation;
	}-*/;

	protected native void _requestFullScreen() /*-{
		console.log('_requestFullScreen: ');
		$wnd.Fullscreen.launch($doc.documentElement);
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
				console.log('Fullscreen: ' + element);
				if (element.requestFullscreen) {
					console.log('element.requestFullscreen');
					element.requestFullscreen();
				} else if (element.mozRequestFullScreen) {
					console.log('element.mozRequestFullScreen');
					element.mozRequestFullScreen();
				} else if (element.webkitRequestFullscreen) {
					console.log('element.webkitRequestFullscreen');
					element.webkitRequestFullscreen();
				} else if (element.msRequestFullscreen) {
					console.log('element.msRequestFullscreen');
					element.msRequestFullscreen();
				} else {
					console.log('no element found :(');
				}
			},
			exit : function() {
				if ($doc.exitFullscreen) {
					$doc.exitFullscreen();
				} else if ($doc.mozCancelFullScreen) {
					$doc.mozCancelFullScreen();
				} else if ($doc.webkitExitFullscreen) {
					$doc.webkitExitFullscreen();
				} else if (document.msExitFullscreen) {
					$doc.msExitFullscreen();
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

	public void onChange() {
	    ConsoleLogger.getConsoleLogger().log("onNewScreenDetails");	    
	    ScreenOrientation newOrientation = getScreenOrientationDetails();
            this.callback.onScreenOrientationChange(newOrientation);
	    
	}

	protected void addChangeHandler(ScreenOrientationCallback callback) {		
	    this.callback = callback;
	    _addChangeHandler();		
	}
	
	private native void _addChangeHandler()/*-{
	    var media = $wnd.matchMedia('(orientation: portrait)');
	    var that = this;
	    if(media){
	        media.addListener(function(){
	            var isPortrait = media.matches;
	            console.log('orientation change portrait is: '+isPortrait);
	            that.@it.appify.screenorientation.ScreenOrientationJsObject::onChange()();
	          });
	    }
	}-*/;

//	protected native void _addChangeHandler()/*-{
//	    	console.log('add screen change handler');
//		var that = this;
//		$wnd.screenOrientation
//				.addEventListener(
//						'change',
//						function() {
//						    	console.log('screen changed');
//							//something is changed... what?? -> read all
//							that
//									.@it.appify.screenorientation.ScreenOrientationJsObject::onNewScreenDetails();
//						});
//	}-*/;

}
