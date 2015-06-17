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

import it.appify.api.Screen;
import it.appify.api.ScreenOrientation;
import it.appify.logging.ConsoleLogger;

public class WebScreenOrientationImpl implements WebScreenOrientation {

	private ScreenOrientationJsObject screenObject;

	public WebScreenOrientationImpl() {
		screenObject = new ScreenOrientationJsObject();
	}

	@Override
	public void requestFullScreen() {
		ConsoleLogger.getConsoleLogger().log("requestFullScreen:_ ");
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
				public void onScreenOrientationChange(
						ScreenOrientation newOrientation) {
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
	public void addOrientationChangeHandler(
			it.appify.api.ScrOrientation.ScreenOrientationCallback callback) {
		screenObject.addChangeHandler(callback);

	}

}
