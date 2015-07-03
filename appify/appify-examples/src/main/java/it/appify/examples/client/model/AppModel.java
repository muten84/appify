package it.appify.examples.client.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import it.appify.api.BatteryStatus;
import it.appify.api.Geoposition;
import it.appify.api.Screen;
import it.appify.api.ScreenOrientation;

@JsonAutoDetect
public class AppModel implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1574156008559977976L;
	private String title;
	private String content;
	private String input;
	private String chilePageTitle;
	private String childPageContent;
	private String message;
	private ChildModel child;
	private BatteryStatus batteryStatus;
	private Geoposition position;
	private Screen screen;
	private ScreenOrientation screenOrientation;

	public AppModel() {

	}

	public AppModel(String title) {
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

	public Geoposition getPosition() {
		return position;
	}

	public void setPosition(Geoposition position) {
		this.position = position;
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

	public BatteryStatus getBatteryStatus() {
		return batteryStatus;
	}

	public void setBatteryStatus(BatteryStatus batteryStatus) {
		this.batteryStatus = batteryStatus;
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

}
