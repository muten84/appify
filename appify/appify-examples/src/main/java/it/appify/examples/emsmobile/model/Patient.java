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
	
	

}
