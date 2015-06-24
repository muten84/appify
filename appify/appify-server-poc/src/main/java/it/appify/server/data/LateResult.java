package it.appify.server.data;

public class LateResult {

	protected Object SYNCRECV;

	private Object value;

	private boolean received;

	private boolean timedout;

	public LateResult() {
		SYNCRECV = new Object();
		received = false;
		timedout = false;
	}

	protected boolean hasReceived() {
		return received;
	}

	public boolean isTimedout() {
		return timedout;
	}

	public void setValue(Object val) {
		synchronized (SYNCRECV) {
			if (!timedout) {
				value = val;
				received = true;
				SYNCRECV.notifyAll();
			}
		}
	}

	public Object getValue() {
		synchronized (SYNCRECV) {
			if (!hasReceived()) {
				try {
					SYNCRECV.wait();
				} catch (Exception ex) {
				}
			}
		}
		return value;
	}

	public Object getValue(long timeout) {
		synchronized (SYNCRECV) {
			if (!hasReceived()) {
				try {
					SYNCRECV.wait(timeout);
					timedout = true;
				} catch (Exception ex) {
				}
			}
		}
		return value;
	}
}
