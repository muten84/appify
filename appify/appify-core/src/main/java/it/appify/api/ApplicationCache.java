package it.appify.api;

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

	public void update() throws Exception;

	public void swapCache() throws Exception;

	public String getStatus();

}
