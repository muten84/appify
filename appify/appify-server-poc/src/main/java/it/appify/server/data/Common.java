package it.appify.server.data;

public class Common {

	// raggio terra per il sistema wgs84
	public final static double EARTH_RADIUS = 6378135.0;

	public final static double FLATTENING = 0.00335281066474748;

	public final static double SEMI_MAJOR = 6378137.0;

	public final static double SEMI_MINOR = 6356752.3142;

	public static final double INV_MINOR_CIRCUMFERENCE = 360d / (2d * Math.PI * SEMI_MINOR);

}
