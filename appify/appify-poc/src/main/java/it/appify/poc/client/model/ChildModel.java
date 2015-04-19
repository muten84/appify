package it.appify.poc.client.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class ChildModel implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3476443026855924063L;

	private String title;

	private String content;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

}
