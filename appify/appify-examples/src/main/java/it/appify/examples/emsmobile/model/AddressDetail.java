package it.appify.examples.emsmobile.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class AddressDetail implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7063711643687225692L;
	private String streetNote;
	private String localityNote;
	private String pLocationNote;

	public String getStreetNote() {
		return streetNote;
	}

	public void setStreetNote(String streetNote) {
		this.streetNote = streetNote;
	}

	public String getLocalityNote() {
		return localityNote;
	}

	public void setLocalityNote(String localityNote) {
		this.localityNote = localityNote;
	}

	public String getpLocationNote() {
		return pLocationNote;
	}

	public void setpLocationNote(String pLocationNote) {
		this.pLocationNote = pLocationNote;
	}

}
