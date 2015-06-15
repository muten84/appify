package it.appify.examples.emsmobile.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Phase implements Serializable {

	public static final int SEND = 0;
	public static final int PL_ARRIVAL = 1;
	public static final int PL_DEPARTURE = 2;
	public static final int HOSP_ARRIVAL = 3;
	public static final int CLOSURE = 4;

	/**
	 * 
	 */
	private static final long serialVersionUID = 1951507997532122042L;
	private long timestamp;

	private int code;
	
	public Phase() {
		
	}
	
	public Phase(int code, long timestamp) {
		this.code = code;
		this.timestamp = timestamp;
	}

	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

}
