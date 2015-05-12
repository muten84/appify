package it.appify.examples.emsmobile.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Activation implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2407300215715794538L;
	private String emergencyId;
	private String emergencyDate;
	private String place;
	private String pathology;
	private String criticity;
	private String addressSummary;
	private String noteSummary;
	private AddressDetail address;

	public Activation() {
	}

	public Activation(String emergencyId) {
		this.emergencyId = emergencyId;
	}

	public String getEmergencyId() {
		return emergencyId;
	}

	public void setEmergencyId(String emergencyId) {
		this.emergencyId = emergencyId;
	}

	public String getEmergencyDate() {
		return emergencyDate;
	}

	public void setEmergencyDate(String emergencyDate) {
		this.emergencyDate = emergencyDate;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public String getPathology() {
		return pathology;
	}

	public void setPathology(String pathology) {
		this.pathology = pathology;
	}

	public String getCriticity() {
		return criticity;
	}

	public void setCriticity(String criticity) {
		this.criticity = criticity;
	}

	public String getAddressSummary() {
		return addressSummary;
	}

	public void setAddressSummary(String addressSummary) {
		this.addressSummary = addressSummary;
	}

	public String getNoteSummary() {
		return noteSummary;
	}

	public void setNoteSummary(String noteSummary) {
		this.noteSummary = noteSummary;
	}

	public AddressDetail getAddress() {
		return address;
	}

	public void setAddress(AddressDetail address) {
		this.address = address;
	}

}
