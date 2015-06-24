package it.appify.server.data;

public class Satellite {

	private int id;

	private float elevation;

	private float azimuth;

	private float snr;

	public Satellite(int id) {
		this.id = id;
	}

	public Satellite(int id, float elevation, float azimuth, float snr) {
		this.id = id;
		this.elevation = elevation;
		this.azimuth = azimuth;
		this.snr = snr;
	}

	public float getAzimuth() {
		return azimuth;
	}

	public void setAzimuth(float azimuth) {
		this.azimuth = azimuth;
	}

	public float getElevation() {
		return elevation;
	}

	public void setElevation(float elevation) {
		this.elevation = elevation;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public float getSnr() {
		return snr;
	}

	public void setSnr(float snr) {
		this.snr = snr;
	}

	public boolean isValid() {
		return (snr > 40);
	}

}
