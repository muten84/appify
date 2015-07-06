package it.appify.examples.emsmobile.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import it.appify.api.BatteryStatus;
import it.appify.api.Geoposition;
import it.appify.api.Screen;
import it.appify.api.ScreenOrientation;
import it.appify.api.Storable;

@JsonAutoDetect
public class EmsMobileModel implements Serializable, Storable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3307757463809870356L;

	private BatteryStatus batteryStatusObject;
	private Geoposition position;
	private Screen screen;
	private ScreenOrientation screenOrientation;
	private String dumpUrl;
	private BarStatus barStatus;
	private String checkInLabel;
	private Activation activation;
	private Activation precActivation;
	private List<Section> vehicles;
	private String searchText;
	private long timestamp;
	private List<Item> sanEvals;
	private List<Item> criticityEnds;
	private List<Item> results;
	private List<Item> hospitals;

	public EmsMobileModel() {
		activation = new Activation();
		barStatus = new BarStatus();
		checkInLabel = "Inizio Turno";
		vehicles = new ArrayList<Section>();
		searchText = "";
		sanEvals = Arrays.asList(new Item[] { new Item("0", "0"), new Item("1", "1"), new Item("2", "2"), new Item("3", "3"), new Item("4", "4") });
		criticityEnds = Arrays.asList(new Item[] { new Item("0", "NON CRITICO"), new Item("1", "POCO CRITICO"), new Item("2", "MEDIAMENTE CRITICO"), new Item("3", "MOLTO CRITICO"), new Item("4", "DECEDUTO") });
		results = Arrays.asList(new Item[] { new Item("0", "N1 - NON EFFETTUATO"), new Item("1", "N1 - PAZIENTE NON REPERITO"), new Item("2", "N3 - TRASPORTO IN PRONTO SOCCORSO"), new Item("3", "N3 - TRASPORTO IN PUNTO DI PRIMO INTERVENTO"), new Item("4", "DECESSO DURANTE IL TRASPORTO") });
	}

	public BatteryStatus getBatteryStatusObject() {
		return batteryStatusObject;
	}

	public void setBatteryStatusObject(BatteryStatus batteryStatusObject) {
		this.batteryStatusObject = batteryStatusObject;
	}

	public Geoposition getPosition() {
		return position;
	}

	public void setPosition(Geoposition position) {
		this.position = position;
	}

	public Screen getScreen() {
		return screen;
	}

	public void setScreen(Screen screen) {
		this.screen = screen;
	}

	public ScreenOrientation getScreenOrientation() {
		return screenOrientation;
	}

	public void setScreenOrientation(ScreenOrientation screenOrientation) {
		this.screenOrientation = screenOrientation;
	}

	public String getDumpUrl() {
		return dumpUrl;
	}

	public void setDumpUrl(String dumpUrl) {
		this.dumpUrl = dumpUrl;
	}

	public BarStatus getBarStatus() {
		return barStatus;
	}

	public void setBarStatus(BarStatus barStatus) {
		this.barStatus = barStatus;
	}

	public String getCheckInLabel() {
		return checkInLabel;
	}

	public void setCheckInLabel(String checkInLabel) {
		this.checkInLabel = checkInLabel;
	}

	public Activation getActivation() {
		return activation;
	}

	public void setActivation(Activation activation) {
		this.activation = activation;
	}

	public List<Section> getVehicles() {
		return vehicles;
	}

	public void setVehicles(List<Section> vehicles) {
		this.vehicles = vehicles;
	}

	public String getSearchText() {
		return searchText;
	}

	public void setSearchText(String searchText) {
		this.searchText = searchText;
	}

	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}

	public boolean hasTurn() {
		return getBarStatus().getVehicleCode() != null;
	}

	public boolean hasActivation() {
		return (getActivation() != null && getActivation().getEmergencyId() != null && !getActivation().getEmergencyId().isEmpty());
	}

	public List<Item> getSanEvals() {
		return sanEvals;
	}

	public void setSanEvals(List<Item> sanEvals) {
		this.sanEvals = sanEvals;
	}

	public List<Item> getCriticityEnds() {
		return criticityEnds;
	}

	public void setCriticityEnds(List<Item> criticityEnds) {
		this.criticityEnds = criticityEnds;
	}

	public List<Item> getResults() {
		return results;
	}

	public void setResults(List<Item> results) {
		this.results = results;
	}

	public List<Item> getHospitals() {
		return hospitals;
	}

	public void setHospitals(List<Item> hospitals) {
		this.hospitals = hospitals;
	}

	public Activation getPrecActivation() {
		return precActivation;
	}

	public void setPrecActivation(Activation precActivation) {
		this.precActivation = precActivation;
	}
	
	public void backupLastEmergency(){
		Activation a = getActivation();
		precActivation = new Activation();
		if(a!=null){
			precActivation.setAddress(a.getAddress());
			precActivation.setAddressSummary(a.getAddressSummary());
			precActivation.setCriticity(a.getCriticity());
			precActivation.setEmergencyDate(a.getEmergencyDate());
			precActivation.setEmergencyId(a.getEmergencyId());
			precActivation.setNoteSummary(a.getNoteSummary());
			precActivation.setPathology(a.getPathology());
			precActivation.setPatients(a.getPatients());
			precActivation.setPhases(a.getPhases());
			precActivation.setPlace(a.getPlace());
			precActivation.setTimestamp(a.getTimestamp());
		}		
		
	}
	
	

}
