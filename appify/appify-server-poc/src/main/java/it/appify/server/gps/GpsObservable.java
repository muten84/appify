package it.appify.server.gps;

import it.appify.server.channel.ChannelObservable;
import it.appify.server.channel.IChannel;




public class GpsObservable extends ChannelObservable {

	public GpsObservable(IChannel channel) {
		super(channel);
	}

	public void setAction(final GpsEvent event, boolean asynch) {
		super.setChanged();
		if (asynch) {
			Thread thd = new Thread("GpsObservableThread") {
				public void run() {
					notifyObservers(event);
				}
			};
			thd.setDaemon(true);
			thd.start();
		} else {
			notifyObservers(event);
		}
	}

}
