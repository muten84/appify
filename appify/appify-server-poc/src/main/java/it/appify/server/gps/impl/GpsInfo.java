package it.appify.server.gps.impl;

public class GpsInfo implements Cloneable {

	public String date;

	public String time;

	public double latitude;

	public int latitudeAge;

	public String hemisph;

	public int hemisphAge;

	public double longitude;

	public int longitudeAge;

	public String direction;

	public int directionAge;

	public float height;

	public int heightAge;

	public String heightUnit;

	public double geoidalHeight;

	public int geoidalHeightAge;

	public String geoidalHeightUnit;

	public float course;

	public int courseAge;

	public double magnCourse;

	public int magnCourseAge;

	public float speed;

	public int speedAge;

	public String status;

	public int quality;

	public int qualityAge;

	public int satellites;

	public float hdop;

	public int hdopAge;

	public float vdop;

	public int vdopAge;

	public double pdop;

	public int pdopAge;

	public double diffCorrection;

	public int diffCorrectionAge;

	public int diffStationID;

	public double magnVariation;

	public String magnVarDirection;

	public String mode;

	public GpsInfo() {
	}

	public Object clone() throws CloneNotSupportedException {
		return super.clone();
	}

}