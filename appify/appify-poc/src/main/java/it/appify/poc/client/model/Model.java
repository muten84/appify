package it.appify.poc.client.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Model implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -184297145959792598L;
	private String title;
	private String content;
	private String input;
	private String chilePageTitle;
	private String childPageContent;
	private String message;
	private ChildModel child;

	public Model() {

	}

	public Model(String title) {
		this.title = title;
	}

	public String getTitle() {
		return title;
	}

	public String getInput() {
		return input;
	}

	public void setInput(String input) {
		this.input = input;
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

	public String getChilePageTitle() {
		return chilePageTitle;
	}

	public void setChilePageTitle(String chilePageTitle) {
		this.chilePageTitle = chilePageTitle;
	}

	public String getChildPageContent() {
		return childPageContent;
	}

	public void setChildPageContent(String childPageContent) {
		this.childPageContent = childPageContent;
	}

	public ChildModel getChild() {
		return child;
	}

	public void setChild(ChildModel child) {
		this.child = child;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
