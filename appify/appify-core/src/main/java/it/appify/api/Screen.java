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
import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Screen implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8848469435432588319L;

	private int availHeight;

	private int availLeft;

	private int availTop;

	private int availWidth;

	private int colorDepth;

	public Screen() {
		availHeight = 0;
		availWidth = 0;
		availLeft = 0;
		availTop = 0;
		colorDepth = 0;
	}

	public int getAvailHeight() {
		return availHeight;
	}

	public void setAvailHeight(int availHeight) {
		this.availHeight = availHeight;
	}

	public int getAvailLeft() {
		return availLeft;
	}

	public void setAvailLeft(int availLeft) {
		this.availLeft = availLeft;
	}

	public int getAvailTop() {
		return availTop;
	}

	public void setAvailTop(int availTop) {
		this.availTop = availTop;
	}

	public int getAvailWidth() {
		return availWidth;
	}

	public void setAvailWidth(int availWidth) {
		this.availWidth = availWidth;
	}

	public int getColorDepth() {
		return colorDepth;
	}

	public void setColorDepth(int colorDepth) {
		this.colorDepth = colorDepth;
	}

}
