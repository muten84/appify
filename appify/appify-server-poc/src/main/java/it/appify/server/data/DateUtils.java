package it.appify.server.data;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Locale;
import java.util.TimeZone;

/**
 * @author felice
 * @since 22-mar-2006
 */
public class DateUtils {

	public static final String PATTERN_STANDARD_DDMMYYYYHHMMSS = "dd/MM/yyyy HH:mm:ss";

	public static final String PATTERN_STANDARD_DDMMYYYHHMM = "dd/MM/yyyy HH:mm";

	public static final String PATTERN_ISO8601 = "dd/MM/yyyy'T'HH:mm:ssZ";

	public static final String PATTERN_HHMMSSDDMMYYY = "HH.mm.ss dd/MM/yyyy";

	public static final String PATTERN_HHMMSSmmm = "HHmmss.SSS";

	public static final String PATTERN_YYMMDD = "yyddMM";

	public static final String PATTERN_DDMMYY = "ddMMyy";

	public static final String PATTERN_DDMMYYYY = "ddMMyyyy";

	public static final String PATTERN_STANDARD_DDMMYYYY = "dd/MM/yyyy";

	public static final String PATTERN_STANDARD_HHMMSS = "HH:mm:ss";

	public static final String PATTERN_STANDARD_HHMM = "HH:mm";

	public static SystemTime getLocalSystemTime() {
		return getSystemTime(TimeZone.getDefault());
	}

	public static SystemTime getUTCSystemTime() {
		return getSystemTime(TimeZone.getTimeZone("UTC"));
	}

	public static SystemTime getSystemTime(TimeZone tz) {
		Calendar cal = GregorianCalendar.getInstance(tz);
		return cal2sys(cal);
	}

	public static SystemTime getLocalSystemTime(long timestamp) {
		return getSystemTime(timestamp, TimeZone.getDefault());
	}

	public static SystemTime getUTCSystemTime(long timestamp) {
		return getSystemTime(timestamp, TimeZone.getTimeZone("UTC"));
	}

	public static SystemTime getSystemTime(long timestamp, TimeZone tz) {
		Calendar cal = GregorianCalendar.getInstance(tz);
		cal.setTimeInMillis(timestamp);

		return cal2sys(cal);
	}

	public static SystemTime getLocalSystemTime(Date date) {
		return getSystemTime(date, TimeZone.getDefault());
	}

	public static SystemTime getUTCSystemTime(Date date) {
		return getSystemTime(date, TimeZone.getTimeZone("UTC"));
	}

	public static SystemTime getSystemTime(Date date, TimeZone tz) {
		Calendar cal = GregorianCalendar.getInstance(tz);
		cal.setTime(date);

		return cal2sys(cal);
	}

	public static SystemTime cal2sys(Calendar cal) {
		SystemTime st = new SystemTime();
		st.setDay((short) cal.get(Calendar.DAY_OF_MONTH));
		st.setMonth((short) (cal.get(Calendar.MONTH) + 1));
		st.setYear((short) cal.get(Calendar.YEAR));
		st.setHour((short) cal.get(Calendar.HOUR_OF_DAY));
		st.setMinutes((short) cal.get(Calendar.MINUTE));
		st.setSeconds((short) cal.get(Calendar.SECOND));
		st.setOffset((short) (cal.get(Calendar.ZONE_OFFSET) / 3600000 + cal.get(Calendar.DST_OFFSET) / 3600000));
		return st;
	}

	public static Date getDate() {
		return GregorianCalendar.getInstance(Locale.ITALY).getTime();
	}

	public static Date getDate(long time) {
		Date date = GregorianCalendar.getInstance(Locale.ITALY).getTime();
		date.setTime(time);
		return date;
	}

	public static Calendar getUTCCalendar() {
		return GregorianCalendar.getInstance(TimeZone.getTimeZone("UTC"));
	}

	public static Date getUTCDate() {
		return GregorianCalendar.getInstance(TimeZone.getTimeZone("UTC")).getTime();
	}

	public static long getUTCTimestamp() {
		return GregorianCalendar.getInstance(TimeZone.getTimeZone("UTC")).getTimeInMillis();
	}

	public static Date getUTCDate(long time) {
		Calendar cal = GregorianCalendar.getInstance(TimeZone.getTimeZone("UTC"));
		cal.setTimeInMillis(time);
		return cal.getTime();
	}

	public static Date getDate(String timezone) {
		Calendar cal = GregorianCalendar.getInstance(TimeZone.getTimeZone(timezone));
		return cal.getTime();
	}

	public static String format(Date date, String pattern) {
		return format(date, pattern, TimeZone.getTimeZone("Europe/Rome"));
	}

	public static String format(Date date, String pattern, TimeZone timezone) {
		SimpleDateFormat sdf = new SimpleDateFormat(pattern);
		sdf.setTimeZone(timezone);

		String output = null;
		try {
			return sdf.format(date);
		} catch (Exception e) {
		}
		return output;
	}

	public static String format(long date, String pattern) {
		return format(date, pattern, TimeZone.getTimeZone("Europe/Rome"));
	}

	public static String formatUTC(long date, String pattern) {
		return format(date, pattern, TimeZone.getTimeZone("UTC"));
	}

	public static String format(long date, String pattern, TimeZone timezone) {
		Calendar cal = GregorianCalendar.getInstance(timezone);
		cal.setTimeInMillis(date);

		SimpleDateFormat sdf = new SimpleDateFormat(pattern);
		sdf.setTimeZone(timezone);

		String output = null;
		try {
			return sdf.format(cal.getTime());
		} catch (Exception e) {
		}
		return output;
	}

	public static Date toLocal(long time) {
		Calendar calUTC = GregorianCalendar.getInstance(TimeZone.getTimeZone("UTC"));
		calUTC.setTimeInMillis(time);

		Calendar calLOC = GregorianCalendar.getInstance(TimeZone.getTimeZone("Europe/Rome"));
		calLOC.setTimeInMillis(calUTC.getTimeInMillis());

		return calLOC.getTime();
	}

	public static Date parse(String date, String pattern) {
		return parse(date, pattern, TimeZone.getDefault());
	}

	public static Date parse(String date, String[] patterns) {
		return parse(date, patterns, TimeZone.getDefault());
	}

	public static Date parse(String date, String pattern, TimeZone timezone) {
		SimpleDateFormat sdf = new SimpleDateFormat(pattern);
		sdf.setTimeZone(timezone);

		Date output = null;
		try {
			output = sdf.parse(date);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return output;
	}

	public static Date parse(String date, String[] patterns, TimeZone timezone) {
		Date output = null;
		for (int idx = 0; idx < patterns.length; idx++) {
			SimpleDateFormat sdf = new SimpleDateFormat(patterns[idx]);
			sdf.setTimeZone(timezone);
			try {
				output = sdf.parse(date);
				break;
			} catch (Exception e) {
			}
		}
		return output;
	}

	public static int age(Date date) {
		Calendar fromCalendar = GregorianCalendar.getInstance();
		fromCalendar.setTime(date);

		return ageBetween(fromCalendar, GregorianCalendar.getInstance());
	}

	public static int ageBetween(Date fromDate, Date toDate) {
		Calendar fromCalendar = GregorianCalendar.getInstance();
		fromCalendar.setTime(fromDate);

		Calendar toCalendar = GregorianCalendar.getInstance();
		toCalendar.setTime(toDate);

		return ageBetween(fromCalendar, toCalendar);
	}

	public static int ageBetween(Calendar fromCalendar, Calendar toCalendar) {
		int age = toCalendar.get(Calendar.YEAR) - fromCalendar.get(Calendar.YEAR);
		if ((fromCalendar.get(Calendar.MONTH) > toCalendar.get(Calendar.MONTH)) || (fromCalendar.get(Calendar.MONTH) == toCalendar.get(Calendar.MONTH) && fromCalendar.get(Calendar.DAY_OF_MONTH) > toCalendar.get(Calendar.DAY_OF_MONTH))) {
			age--;
		}
		return age;
	}

	public static Date convertUTCtoLocalTime(String p_UTCDateTime, String dateFormat) {

		String lv_dateFormateInLocalTimeZone = "";// Will hold the final converted
																// date
		Date lv_localDate = null;
		String lv_localTimeZone = "Europe/Rome";
		SimpleDateFormat lv_formatter;
		SimpleDateFormat lv_parser;

		lv_parser = new SimpleDateFormat(dateFormat);
		lv_parser.setTimeZone(TimeZone.getTimeZone("UTC"));
		try {
			lv_localDate = lv_parser.parse(p_UTCDateTime);
		} catch (ParseException e) {
			e.printStackTrace();

		}

		lv_formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss z'('Z')'");
		// System.out.println("convertUTCtoLocalTime " + "Europe/Rome" + ": " +
		// "The Date in the UTC time zone(UTC) " +
		// lv_formatter.format(lv_localDate));

		// Convert the UTC date to Local timezone
		lv_formatter.setTimeZone(TimeZone.getTimeZone(lv_localTimeZone));
		lv_dateFormateInLocalTimeZone = lv_formatter.format(lv_localDate);
		// System.out.println("convertUTCtoLocalTime: " + "Europe/Rome" + ": " +
		// "The Date in the LocalTime Zone time zone " +
		// lv_formatter.format(lv_localDate));

		return lv_localDate;
	}

	public static String formatUTCtoLocalTime(String p_UTCDateTime, String dateFormat) {

		String lv_dateFormateInLocalTimeZone = "";// Will hold the final converted
																// date
		Date lv_localDate = null;
		String lv_localTimeZone = "Europe/Rome";
		SimpleDateFormat lv_formatter;
		SimpleDateFormat lv_parser;

		lv_parser = new SimpleDateFormat(dateFormat);
		lv_parser.setTimeZone(TimeZone.getTimeZone("UTC"));
		try {
			lv_localDate = lv_parser.parse(p_UTCDateTime);
		} catch (ParseException e) {
			e.printStackTrace();
		}

		lv_formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss z'('Z')'");
		// System.out.println("convertUTCtoLocalTime " + "Europe/Rome" + ": " +
		// "The Date in the UTC time zone(UTC) " +
		// lv_formatter.format(lv_localDate));

		// Convert the UTC date to Local timezone
		lv_formatter.setTimeZone(TimeZone.getTimeZone(lv_localTimeZone));
		lv_dateFormateInLocalTimeZone = lv_formatter.format(lv_localDate);
		// System.out.println("convertUTCtoLocalTime: " + "Europe/Rome" + ": " +
		// "The Date in the LocalTime Zone time zone " +
		// lv_formatter.format(lv_localDate));

		return lv_dateFormateInLocalTimeZone;
	}

}
