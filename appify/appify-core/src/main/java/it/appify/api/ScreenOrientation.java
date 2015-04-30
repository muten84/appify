package it.appify.api;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class ScreenOrientation implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6926984511746753661L;

	private double angle;

	private String type;

	private boolean fullscreen;

	public ScreenOrientation() {
		angle = 0.0;
		type = ScrOrientation.ANY;
		fullscreen = false;
	}

	public double getAngle() {
		return angle;
	}

	public void setAngle(double angle) {
		this.angle = angle;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public boolean isFullscreen() {
		return fullscreen;
	}

	public void setFullscreen(boolean fullscreen) {
		this.fullscreen = fullscreen;
	}

}
