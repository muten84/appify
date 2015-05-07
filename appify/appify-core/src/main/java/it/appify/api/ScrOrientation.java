package it.appify.api;

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
