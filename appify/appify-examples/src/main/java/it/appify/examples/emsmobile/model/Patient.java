package it.appify.examples.emsmobile.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Patient implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -7722179979079001143L;
	
	private String lastName;
	private String name;
	private String note;
	private int sanEval;
	private boolean show;
	
	public Patient() {
		
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
	
	
	
	

}
