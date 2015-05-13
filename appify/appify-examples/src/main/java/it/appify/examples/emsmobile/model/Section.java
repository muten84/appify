package it.appify.examples.emsmobile.model;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Section implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1810529595959540417L;

	private String sectionName;

	private List<Item> items;

	public Section() {

	}

	public Section(String name, List<Item> items) {
		this.sectionName = name;
		this.items = items;
	}

	public List<Item> getItems() {
		return items;
	}

	public void setItems(List<Item> items) {
		this.items = items;
	}

	public String getSectionName() {
		return sectionName;
	}

	public void setSectionName(String sectionName) {
		this.sectionName = sectionName;
	}

}
