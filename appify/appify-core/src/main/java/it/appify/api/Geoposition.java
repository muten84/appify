package it.appify.api;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Geoposition implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2946204850404727974L;

	private long timestamp;

	private Coordinates coords;

	public Geoposition() {

	}

	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}

	public Coordinates getCoords() {
		return coords;
	}

	public void setCoords(Coordinates coords) {
		this.coords = coords;
	}

	@Override
	public String toString() {
		return "Geoposition [timestamp=" + timestamp + ", coords=" + coords + "]";
	}
	
	

}
