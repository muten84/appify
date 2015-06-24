package it.appify.server.data;

public class SystemTime {

	protected short day;

	protected short month;

	protected short year;

	protected short hour;

	protected short minutes;

	protected short seconds;

	protected short offset;

	public SystemTime() {
	}

	public short getDay() {
		return day;
	}

	public void setDay(short date) {
		this.day = date;
	}

	public short getHour() {
		return hour;
	}

	public void setHour(short hour) {
		this.hour = hour;
	}

	public short getMinutes() {
		return minutes;
	}

	public void setMinutes(short minutes) {
		this.minutes = minutes;
	}

	public short getMonth() {
		return month;
	}

	public void setMonth(short month) {
		this.month = month;
	}

	public short getSeconds() {
		return seconds;
	}

	public void setSeconds(short seconds) {
		this.seconds = seconds;
	}

	public short getYear() {
		return year;
	}

	public void setYear(short year) {
		this.year = year;
	}

	public short getOffset() {
		return offset;
	}

	public void setOffset(short offset) {
		this.offset = offset;
	}

	public String toString() {
		StringBuffer sb = new StringBuffer();

		sb.append("[SystemTime ");
		sb.append(day);
		sb.append("/");
		sb.append(month);
		sb.append("/");
		sb.append(year);
		sb.append(" ");
		sb.append(hour);
		sb.append(":");
		sb.append(minutes);
		sb.append(":");
		sb.append(seconds);
		if (offset >= 0) {
			sb.append("+");
		}
		sb.append(offset);
		sb.append("]");

		return sb.toString();
	}

}