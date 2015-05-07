package it.appify.api;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

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
/**
 * Generic Battery Status model
 * 
 * @author Luigi
 *
 */
@JsonAutoDetect
public class BatteryStatus implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -605402352986631188L;

	private boolean charging;

	private double level;

	public boolean isCharging() {
		return charging;
	}

	public void setCharging(boolean charging) {
		this.charging = charging;
	}

	public double getLevel() {
		return level;
	}

	public void setLevel(double level) {
		this.level = level;
	}

	@Override
	public String toString() {
		return "BatteryStatus [charging=" + charging + ", level=" + level + "]";
	}

}
