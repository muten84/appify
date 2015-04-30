package it.appify.api;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Screen implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8848469435432588319L;

	private int availHeight;

	private int availLeft;

	private int availTop;

	private int availWidth;

	private int colorDepth;

	public Screen() {
		availHeight=0;
		availWidth=0;
		availLeft=0;
		availTop=0;
		colorDepth=0;
	}

	public int getAvailHeight() {
		return availHeight;
	}

	public void setAvailHeight(int availHeight) {
		this.availHeight = availHeight;
	}

	public int getAvailLeft() {
		return availLeft;
	}

	public void setAvailLeft(int availLeft) {
		this.availLeft = availLeft;
	}

	public int getAvailTop() {
		return availTop;
	}

	public void setAvailTop(int availTop) {
		this.availTop = availTop;
	}

	public int getAvailWidth() {
		return availWidth;
	}

	public void setAvailWidth(int availWidth) {
		this.availWidth = availWidth;
	}

	public int getColorDepth() {
		return colorDepth;
	}

	public void setColorDepth(int colorDepth) {
		this.colorDepth = colorDepth;
	}

}
