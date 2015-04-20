package it.appify.poc.client.model;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

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
	private List<String> items;
	private ChildModel child;
	private List<String> picked;

	public Model() {
		picked = Arrays.asList(new String[] { "one", "two" });
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

	public List<String> getItems() {
		return items;
	}

	public void setItems(List<String> items) {
		this.items = items;
	}

	public List<String> getPicked() {
		return picked;
	}

	public void setPicked(List<String> picked) {
		this.picked = picked;
	}

	@Override
	public String toString() {
		return "Model [title=" + title + ", content=" + content + ", input="
				+ input + ", message=" + message + "]";
	}

}
