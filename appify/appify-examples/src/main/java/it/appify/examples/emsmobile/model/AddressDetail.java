package it.appify.examples.emsmobile.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class AddressDetail implements Serializable {

	private String streetNote;

	public String getStreetNote() {
		return streetNote;
	}

	public void setStreetNote(String streetNote) {
		this.streetNote = streetNote;
	}

}
