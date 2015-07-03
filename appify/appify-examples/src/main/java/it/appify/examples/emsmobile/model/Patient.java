package it.appify.examples.emsmobile.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Patient implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7722179979079001143L;

	private int index;
	private String lastName;
	private String name;
	private String note;
	private int sanEval;
	private Item criticityEnd;
	private Item result;
	private Item hospital;
	private boolean show;

	public Patient() {
		index = -1;
		lastName="";
		name="";
		note="";
		sanEval=-1;
		criticityEnd = new Item("-1", "");
		result = new Item("-1", "");
		hospital = new Item("-1", "");
		show = true;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public int getSanEval() {
		return sanEval;
	}

	public void setSanEval(int sanEval) {
		this.sanEval = sanEval;
	}

	public boolean isShow() {
		return show;
	}

	public void setShow(boolean show) {
		this.show = show;
	}

	public Item getCriticityEnd() {
		return criticityEnd;
	}

	public void setCriticityEnd(Item criticityEnd) {
		this.criticityEnd = criticityEnd;
	}

	public Item getResult() {
		return result;
	}

	public void setResult(Item result) {
		this.result = result;
	}

	public Item getHospital() {
		return hospital;
	}

	public void setHospital(Item hospital) {
		this.hospital = hospital;
	}

	protected Object clone() {
		Patient copy = new Patient();
		if (this.criticityEnd != null) {
			copy.criticityEnd = new Item(this.criticityEnd.getCode(), this.criticityEnd.getItemName());
		}
		if (this.hospital != null) {
			copy.hospital = new Item(this.hospital.getCode(), this.hospital.getItemName());
		}
		copy.index = this.index;
		copy.lastName = new String(this.lastName);
		copy.name = new String(this.name);
		copy.note = new String(this.note);
		if (this.result != null) {
			copy.result = new Item(this.result.getCode(), this.result.getItemName());
		}
		copy.sanEval = this.sanEval;
		copy.show = this.show;
		return copy;
	}

	public Patient clonePatient() {
		return (Patient) this.clone();

	}

	@Override
	public String toString() {
		return "Patient [index=" + index + ", lastName=" + lastName + ", name=" + name + ", show=" + show + "]";
	}
	
	

}
