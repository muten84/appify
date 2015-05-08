package it.appify.offline;

import it.appify.offline.OnlineChecker.CheckOnlineCallback;

import com.google.gwt.user.client.Timer;

public class OfflineMonitor {

	protected OnlineChecker checker;

	private OfflineMonitorListener listener;

	public OfflineMonitor() {
		this.checker = new OnlineChecker();
	}

	public OfflineMonitor(OnlineChecker checker) {
		this.checker = checker;
	}

	public static interface OfflineMonitorListener {
		public void onOnline();

		public void onOffline();
	}

	public void start(final OfflineMonitorListener listener) {
		this.listener = listener;
		Timer t = new Timer() {

			@Override
			public void run() {
				checker.checkOnline(new CheckOnlineCallback() {

					@Override
					public void onOnline() {
						listener.onOnline();

					}

					@Override
					public void onOffline() {
						listener.onOffline();

					}
				});

			}
		};
		t.scheduleRepeating(5000);
	}

	public OfflineMonitorListener getListener() {
		return listener;
	}

	public void setListener(OfflineMonitorListener listener) {
		this.listener = listener;
	}

	public OnlineChecker getChecker() {
		return checker;
	}

	public void setChecker(OnlineChecker checker) {
		this.checker = checker;
	}
}