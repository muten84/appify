package it.appify.server.gps.impl;

import it.appify.server.data.NumberUtils;
import it.appify.server.data.StringUtils;

public class NMEAParser {	

	public boolean parse(String sentence, GpsInfo info) {
		if (sentence == null || sentence.length() == 0) {
			return false;
		}
		String[] sentenceTokens = StringUtils.split(sentence, ",*", true);
		if (sentenceTokens != null && sentenceTokens.length > 0) {
			if ("$GPGGA".equals(sentenceTokens[0])) {
				try {
					return parseGGA(sentenceTokens, info);
				} catch (Exception e) {
					//logger.error("GGA sentence parsing failure : " + sentence);
				}
			} else if ("$GPRMC".equals(sentenceTokens[0])) {
				try {
					return parseRMC(sentenceTokens, info);
				} catch (Exception e) {
					//logger.error("RMC sentence parsing failure : " + sentence);
				}
			}
		}
		return false;
	}

	private boolean parseGGA(String[] sentence, GpsInfo info) {
		int idx = 1;

		info.time = sentence[idx++];
		info.latitude = NumberUtils.toDouble(sentence[idx++]);
		info.latitudeAge = 0;
		info.hemisph = sentence[idx++];
		info.hemisphAge = 0;
		info.longitude = NumberUtils.toDouble(sentence[idx++]);
		info.longitudeAge = 0;
		info.direction = sentence[idx++];
		info.directionAge = 0;
		info.quality = NumberUtils.toInt(sentence[idx++]);
		info.qualityAge = 0;
		info.satellites = NumberUtils.toInt(sentence[idx++]);
		info.hdop = NumberUtils.toFloat(sentence[idx++]);
		info.hdopAge = 0;
		info.height = NumberUtils.toFloat(sentence[idx++]);
		info.heightAge = 0;
		info.heightUnit = sentence[idx++];
		info.geoidalHeight = NumberUtils.toDouble(sentence[idx++]);
		info.geoidalHeightAge = 0;
		info.geoidalHeightUnit = sentence[idx++];
		info.diffCorrection = NumberUtils.toDouble(sentence[idx++]);
		info.diffCorrectionAge = 0;
		info.diffStationID = NumberUtils.toInt(sentence[idx++]);

		return true;
	}

	private boolean parseRMC(String[] sentence, GpsInfo info) {
		int idx = 1;

		info.time = sentence[idx++];
		info.status = sentence[idx++];
		info.latitude = NumberUtils.toDouble(sentence[idx++]);
		info.latitudeAge = 0;
		info.hemisph = sentence[idx++];
		info.hemisphAge = 0;
		info.longitude = NumberUtils.toDouble(sentence[idx++]);
		info.longitudeAge = 0;
		info.direction = sentence[idx++];
		info.directionAge = 0;
		info.speed = NumberUtils.toFloat(sentence[idx++]) * 1.8520000000035852f;
		info.speedAge = 0;
		info.course = NumberUtils.toFloat(sentence[idx++]);
		info.courseAge = 0;
		info.date = sentence[idx++];
		info.magnVariation = NumberUtils.toDouble(sentence[idx++]);
		info.magnVarDirection = sentence[idx++];

		return true;
	}

	public String checkSum(String msg) {
		int chk = 0;
		for (int i = 1; i < msg.length(); i++) {
			chk ^= msg.charAt(i);
		}

		String chk_s = Integer.toHexString(chk).toUpperCase();

		while (chk_s.length() < 2) {
			chk_s = "0" + chk_s;
		}

		return chk_s;
	}

	public boolean verifyChecksum(String msg) {
		int msglen = (msg != null) ? msg.length() : 0;
		if (msglen > 4) {
			if (msg.charAt(msglen - 3) == '*') {
				String chk_s = checkSum(msg.substring(0, msglen - 3));
				return (msg.substring(msglen - 2, msglen).equals(chk_s));
			} else {
				return true;
			}
		}
		return false;
	}

}
