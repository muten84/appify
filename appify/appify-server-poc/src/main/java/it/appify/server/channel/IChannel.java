package it.appify.server.channel;

public interface IChannel {

	public short STATUS_AVAILABLE = 1;

	public short STATUS_TEMP_UNAVAILABLE = 0;

	public short STATUS_OUT_OF_ORDER = -1;

	public short getStatus();

}
