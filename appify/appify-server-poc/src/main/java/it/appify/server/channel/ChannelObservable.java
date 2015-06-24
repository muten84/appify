package it.appify.server.channel;

import java.util.Observable;

public class ChannelObservable extends Observable {

	protected IChannel channel;

	public ChannelObservable(IChannel channel) {
		super();
		this.channel = channel;
	}

	public IChannel getChannel() {
		return channel;
	}

	public void setAction(ChannelEvent event) {
		super.setChanged();
		notifyObservers(event);
	}

}
