package it.appify.server.data;

public class QualifiedCoordinates extends Coordinates {

	private float horizontalAccuracy;

	private float verticalAccuracy;

	public QualifiedCoordinates() {
		this(Float.NaN, Float.NaN);
	}

	public QualifiedCoordinates(double latitude, double longitude) {
		this(latitude, longitude, Float.NaN, Float.NaN);
	}

	public QualifiedCoordinates(double latitude, double longitude, float horizontalAccuracy, float verticalAccuracy) {
		super(latitude, longitude);
		this.horizontalAccuracy = horizontalAccuracy;
		this.verticalAccuracy = verticalAccuracy;
	}

	public float getHorizontalAccuracy() {
		return horizontalAccuracy;
	}

	public void setHorizontalAccuracy(float horizontalAccuracy) {
		this.horizontalAccuracy = horizontalAccuracy;
	}

	public float getVerticalAccuracy() {
		return verticalAccuracy;
	}

	public void setVerticalAccuracy(float verticalAccuracy) {
		this.verticalAccuracy = verticalAccuracy;
	}

}
