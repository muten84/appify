package it.appify.server.gps;

import it.appify.server.channel.IChannel;
import it.appify.server.data.GPSData;

public interface IGps extends IChannel {

	public String TYPE_GPS = "TYPE_GPS";

	public GPSData getPosition();

}
