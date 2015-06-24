package it.appify.server.data;

public class Coordinates {

	private float altitude;

	private double latitude;

	private double longitude;

	public float getAltitude() {
		return altitude;
	}

	public Coordinates(float altitude, double latitude, double longitude) {
		this.altitude = altitude;
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public Coordinates(double latitude, double longitude) {
		super();
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public void setAltitude(float altitude) {
		this.altitude = altitude;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public double bearingAngle(Coordinates target) {
		double latRad1 = Math.toRadians(latitude);
		double latRad2 = Math.toRadians(target.getLatitude());

		double dLon = Math.toRadians(target.getLongitude() - longitude);

		double y = Math.sin(dLon) * Math.cos(latRad2);
		double x = Math.cos(latRad1) * Math.sin(latRad2) - Math.sin(latRad1) * Math.cos(latRad2) * Math.cos(dLon);

		double angle = (Math.toDegrees(Math.atan2(y, x)) + 360) % 360;

		return angle;
	}

	public double haversineDistance(Coordinates coords) {
		double phi1 = Math.toRadians(latitude);
		double phi2 = Math.toRadians(coords.getLatitude());

		double lambda1 = Math.toRadians(longitude);
		double lambda2 = Math.toRadians(coords.getLongitude());

		return haversineDistance(phi1, lambda1, phi2, lambda2);
	}

	private double haversineDistance(double phi1, double lambda1, double phi2, double lambda2) {
		double dlat = phi2 - phi1;
		double dlon = lambda2 - lambda1;
		double a = Math.sin(dlat / 2.0) * Math.sin(dlat / 2.0) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(dlon / 2.0) * Math.sin(dlon / 2.0);
		double c = 2.0 * Math.asin(Math.min(1.0, Math.sqrt(a)));
		return 6367000.0 * c;
	}

	public float azimuthTo(Coordinates to) {
		return vincentyDistance(to, false);
	}

	public double distance(Coordinates to) {
		// return haversineDistance(to);
		return vincentyDistance(to, true);
	}

	/**
	 * formula di vincenty
	 * 
	 * @param to
	 *           coordinata
	 * @param distance
	 *           flag calcolo distanza
	 * @return distanza
	 */
	private float vincentyDistance(Coordinates to, boolean distance) {
		if (to == null)
			return 0.0f;

		if (!distance && (latitude == 90.0) && (to.latitude != 90.0))
			return 180.0f;
		if (!distance && (latitude == -90.0) && (to.latitude != -90.0))
			return 0.0f;

		double phi1 = Math.toRadians(latitude);
		double lambda1 = Math.toRadians(longitude);
		double phi2 = Math.toRadians(to.latitude);
		double lambda2 = Math.toRadians(to.longitude);
		double L = Math.abs(lambda1 - lambda2);

		// valori precalcolati (per usi successivi ricorrenti)
		double U1 = Math.atan((1 - Common.FLATTENING) * Math.tan(phi1));
		double U2 = Math.atan((1 - Common.FLATTENING) * Math.tan(phi2));
		double cosU1 = Math.cos(U1);
		double cosU2 = Math.cos(U2);
		double sinU1 = Math.sin(U1);
		double sinU2 = Math.sin(U2);
		double cosU1sinU2 = cosU1 * sinU2;
		double sinU1cosU2 = sinU1 * cosU2;
		double sinU1sinU2 = sinU1 * sinU2;
		double cosU1cosU2 = cosU1 * cosU2;
		double f_a = (1.0 + Common.FLATTENING) * Common.FLATTENING / 4.0;
		double f_b = Common.FLATTENING * 0.1875 * Common.FLATTENING;

		// definizione delle variabili che saranno calcolate
		double sigma = Double.NaN;
		double cosSigma = Double.NaN;
		double sinSigma = Double.NaN;
		double sin2Sigma = Double.NaN;
		double cos2Alpha = Double.NaN;
		double sin2Alpha = Double.NaN;
		double cos2Sigma_m = Double.NaN;
		double sinLambda = Double.NaN;
		double cosLambda = Double.NaN;
		double twocos22Sigma_m = Double.NaN;

		// trova lambda per iterazione finchè non converge
		// (lambda_ memorizza l'ultimo risultato)
		double lambda = L;
		double lambda_ = 2 * Math.PI;

		// soglia per la convergenza
		double converge = 1e-9;
		// numero massimo di iterazioni
		int maxIterations = 10;

		int i;
		for (i = 0; (i < maxIterations) && (Math.abs(lambda - lambda_) > converge); i++) {
			lambda_ = lambda;
			sinLambda = Math.sin(lambda);
			cosLambda = Math.cos(lambda);
			sin2Sigma = square(cosU2 * sinLambda) + square(cosU1sinU2 - sinU1cosU2 * cosLambda);

			if (sin2Sigma == 0.0)
				return 0.0F;

			sinSigma = Math.sqrt(sin2Sigma);
			cosSigma = sinU1sinU2 + cosU1cosU2 * cosLambda;
			sigma = Math.atan2(sinSigma, cosSigma);
			sin2Alpha = square(cosU1cosU2 * sinLambda / sinSigma);
			cos2Alpha = 1.0 - sin2Alpha;
			cos2Sigma_m = cosSigma - 2.0 * sinU1sinU2 / cos2Alpha;

			if (Double.isNaN(cos2Sigma_m)) {
				if (distance)
					return (float) (Common.EARTH_RADIUS * lambda);
				if (isEast(lambda1, lambda2))
					return 90.0f;
				return 270.0f;
			}
			double C = cos2Alpha * (f_a - f_b * cos2Alpha);
			double sinAlpha = Math.sqrt(sin2Alpha);
			twocos22Sigma_m = 2.0 * square(cos2Sigma_m);
			double part1 = C * cosSigma * (twocos22Sigma_m - 1.0);
			double part2 = C * sinSigma * (cos2Sigma_m + part1);
			lambda = L + (1 - C) * Common.FLATTENING * sinAlpha * (sigma + part2);
		}
		double a2 = square(Common.SEMI_MAJOR);
		double b2 = square(Common.SEMI_MINOR);
		double u2 = (cos2Alpha * (a2 - b2)) / b2;

		double A = 1.0 + u2 / 16384.0 * (4096.0 + u2 * (-768.0 + u2 * (320.0 - 175.0 * u2)));
		double B = u2 / 1024.0 * (256.0 + u2 * (-128.0 + u2 * (74.0 - 47.0 * u2)));
		double deltaSigma = B * sinSigma * (cos2Sigma_m + B / 4.0 * (cosSigma * (-1.0 + twocos22Sigma_m) - B / 6.0 * cos2Sigma_m * (-3.0 + 4.0 * sin2Sigma) * (-3.0 + 2.0 * twocos22Sigma_m)));

		if (distance) {
			double s = A * Common.SEMI_MINOR * (sigma - deltaSigma);
			return (float) s;
		}

		double top = cosU2 * sinLambda;
		double bottom = cosU1sinU2 - sinU1cosU2 * cosLambda;
		double alpha1 = Math.atan2(top, bottom);
		double azimuth = Math.toDegrees(alpha1);

		// atan2 gives -180 to 180, we want 0 to 360
		if (azimuth < 0) {
			azimuth = 360 + azimuth;
		}

		boolean azimuthNorth = false;
		if ((azimuth >= 270) || (azimuth <= 90)) {
			azimuthNorth = true;
		}
		boolean azimuthEast = false;
		if ((azimuth >= 0) || (azimuth <= 180)) {
			azimuthEast = true;
		}
		boolean east = isEast(lambda1, lambda2);
		boolean north = isNorth(phi1, phi2);

		if (!east && azimuthEast)
			return (float) (360.0 - azimuth);
		if (north && !azimuthNorth)
			return (float) (180.0 - azimuth);

		return (float) azimuth;
	}

	private double square(double x) {
		return x * x;
	}

	private static boolean isEast(double fromLongitude, double toLongitude) {
		double diff = toLongitude - fromLongitude;
		if (((diff >= 0.0) && (diff <= 180.0)) || (diff <= -180.0))
			return true;
		return false;
	}

	private static boolean isNorth(double fromLatitude, double toLatitude) {
		double diff = toLatitude - fromLatitude;
		if ((diff >= 0.0) && (diff <= 90.0))
			return true;
		return false;
	}

}