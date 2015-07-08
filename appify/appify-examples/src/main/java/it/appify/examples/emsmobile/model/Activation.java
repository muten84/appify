package it.appify.examples.emsmobile.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import it.appify.logging.ConsoleLogger;

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
	private List<Phase> phases;
	private List<Patient> patients;
	private long timestamp;
	private Patient currentPatient;
	private Patient currentBackupPatient;
	

	public Activation() {
		phases = new ArrayList<Phase>();
		patients = new ArrayList<Patient>();
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

	public List<Phase> getPhases() {
		return phases;
	}

	public void setPhases(List<Phase> phases) {
		this.phases = phases;
	}

	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}	
	
	
	public List<Patient> getPatients() {
		return patients;
	}

	public void setPatients(List<Patient> patients) {
		this.patients = patients;
	}

	public void addPhase(Phase p) {
		if(getPhases()==null) {
			this.phases = new ArrayList<Phase>();			
		}
		getPhases().add(p);
	}
	
	public void addPatient(Patient p) {
		ConsoleLogger.getConsoleLogger().log("adding patient: "+p.getIndex());
		if(p.getIndex()>=0){
			return;
		}
		if(getPatients()==null) {
			this.patients = new ArrayList<Patient>();			
		}		
		p.setIndex(patients.size());
		getPatients().add(p);
	}

	public Patient getCurrentPatient() {
//		if(getPatients()!=null) {
//			for (Patient patient : patients) {
//				if(patient.isShow()){
//					currentPatient = patient;
//					break;
//				}
//			}
//		}
		if(currentPatient==null){
			currentPatient = new Patient();
		}
		
		return currentPatient;
	}

	public void setCurrentPatient(Patient newP) {
//		if(getPatients()!=null) {
//			for (Patient p : patients) {
//				ConsoleLogger.getConsoleLogger().log("setCurrentPatient: "+p.getIndex()+" - "+newP.getIndex());
//				if(p.getIndex()==newP.getIndex()){
//					ConsoleLogger.getConsoleLogger().log("setCurrentPatient");
//					p = null;
//					p = newP;
//					p.setIndex(newP.getIndex());
//					newP.setShow(true);
//					p.setShow(newP.isShow());
//					break;
//				}
//			}
//		}
		this.currentPatient = newP;
	}
	
	public void updateCurrentPatient(Patient newPatient){
		setCurrentPatient(newPatient);
	}

	public Patient getCurrentBackupPatient() {
		return currentBackupPatient;
	}

	public void setCurrentBackupPatient(Patient currentBackupPatient) {
		this.currentBackupPatient = currentBackupPatient;
	}
	
	
	
	
	
	

}
