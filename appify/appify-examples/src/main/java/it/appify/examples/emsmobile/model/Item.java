package it.appify.examples.emsmobile.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Item implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4066396088201664918L;

	private String itemName;

	private String code;

	public Item() {
		this("", "");
	}

	public Item(String code, String name) {
		this.itemName = name;
		this.code = code;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

}
