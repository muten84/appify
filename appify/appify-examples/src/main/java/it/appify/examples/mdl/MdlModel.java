package it.appify.examples.mdl;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import it.appify.api.Storable;

@JsonAutoDetect
public class MdlModel implements Serializable, Storable {

	private long timestamp;

	/**
	 * 
	 */
	private static final long serialVersionUID = 3113389301625363544L;

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}

	@Override
	public long getTimestamp() {
		return timestamp;
	}

}
