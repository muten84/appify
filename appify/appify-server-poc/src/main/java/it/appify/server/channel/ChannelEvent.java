package it.appify.server.channel;

public class ChannelEvent {

	protected short status;

	public ChannelEvent(short status) {
		this.status = status;
	}

	public short getStatus() {
		return status;
	}

}
