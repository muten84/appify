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
/**
 * Application Cache interface
 * 
 * @author Luigi
 *
 */
public interface ApplicationCache extends HasHandlers {

	public final static String UNCACHED = "UNCACHED";// 0
	public static final String IDLE = "IDLE";// 1
	public static final String CHECKING = "CHECKING";// 2
	public static final String DOWNLOADING = "DOWNLOADING";// 3
	public static final String UPDATEREADY = "UPDATEREADY";// 4
	public static final String OBSOLETE = "OBSOLETE";// 5

	public static interface CacheEvent {
		public final static String CACHED = "cached";
		public final static String CHECKING = "checking";
		public final static String DOWNLOADING = "downloading";
		public final static String ERROR = "error";
		public final static String NOUPDATE = "noupdate";
		public final static String PROGRESS = "progress";
		public final static String UPDATEREADY = "updateready";
	}

	public static interface CheckConnectedCallback {
		public void onOnline();

		public void onOffline();
	}

	public static class Util {

		public static String getCacheStatus(int code) {
			switch (code) {
			case 0:
				return UNCACHED;
			case 1:
				return IDLE;
			case 2:
				return CHECKING;
			case 3:
				return DOWNLOADING;
			case 4:
				return UPDATEREADY;
			case 5:
				return OBSOLETE;
			default:
				break;
			}
			return null;
		}
	}

	/**
	 * Update the cache
	 * 
	 * @throws Exception
	 */
	public void update() throws Exception;

	/**
	 * Swap the old cache to the new cache
	 * 
	 * @throws Exception
	 */
	public void swapCache() throws Exception;

	/**
	 * Return the current cache status
	 * 
	 * @return
	 */
	public String getStatus();

	/**
	 * Check if user agent is connected
	 * 
	 * @return
	 */
	public void getConnetionStatus(CheckConnectedCallback callback);

	/**
	 * Check if user agent is connected
	 * 
	 * @return
	 */
	public void watchConnectionStatus(CheckConnectedCallback callback);

	
	/**
	 * Set the version of the cache
	 * @param version
	 */
	public void setVersion(String version);
	
	/**
	 * 
	 * @return
	 */
	public String getVersion();
	
	
	
}
