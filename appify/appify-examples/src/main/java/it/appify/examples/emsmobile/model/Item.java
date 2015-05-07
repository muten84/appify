package it.appify.examples.emsmobile.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Item implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4066396088201664918L;

	private String name;

	private String code;

	public Item() {
		this("", "");
	}

	public Item(String code, String name) {
		this.name = name;
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

}
