package it.appify.server.data;

public class NumberUtils {

	public static int compare(double lhs, double rhs) {
		if (lhs < rhs) {
			return -1;
		}
		if (lhs > rhs) {
			return +1;
		}
		long lhsBits = Double.doubleToLongBits(lhs);
		long rhsBits = Double.doubleToLongBits(rhs);
		if (lhsBits == rhsBits) {
			return 0;
		}
		if (lhsBits < rhsBits) {
			return -1;
		} else {
			return +1;
		}
	}

	public static char[] hex2char(String[] msg) {
		char[] chars = new char[msg.length];
		for (int i = 0; i < msg.length; i++) {
			String s = msg[i];
			int a = Integer.parseInt(s, 16);
			// System.out.println("Decimal:=" + i);
			char c = (char) a;
			chars[i] = c;
			// System.out.println("Char is:=" + c);
		}
		return chars;
	}

	public static String ch2hex(char a[]) {
		StringBuffer sb = new StringBuffer(100);
		sb.append("[");
		for (int i = 0; i < a.length; i++) {
			sb.append(" " + int2Hex((int) a[i]));
		}
		sb.append(" ]");
		return sb.toString();
	}

	public static long getLong(byte[] data, int offset) {
		return ((((long) data[offset + 0]) & 0xFF) << 24) + ((((long) data[offset + 1]) & 0xFF) << 16) + ((((long) data[offset + 2]) & 0xFF) << 8) + ((((long) data[offset + 3]) & 0xFF));
	}

	public static void putLong(byte[] data, int offset, long value) {
		data[offset + 0] = (byte) (value >>> 24);
		data[offset + 1] = (byte) (value >>> 16);
		data[offset + 2] = (byte) (value >>> 8);
		data[offset + 3] = (byte) (value);
	}

	/**
	 * Convert a binary string to int
	 * 
	 * @param value
	 *           binary string
	 * @return integer
	 */
	public static int bin2int(String value) {
		try {
			return Integer.parseInt(value, 2);
		} catch (Exception ex) {
			return -1;
		}
	}

	public static String int2bin(int value, int mask) {
		return toUnsignedString(value, 1, mask);
	}

	public static String int2bin(int value) {
		return toUnsignedString(value, 1, 0);
	}

	public static String int2Hex(int value) {
		return toUnsignedString(value, 4, 0);
	}

	private static String toUnsignedString(int i, int shift, int zmsk) {
		char[] buf = new char[32];
		for (int idx = 0; idx < buf.length; idx++) {
			buf[idx] = '0';
		}
		int charPos = 32;
		int radix = 1 << shift;
		int mask = radix - 1;

		do {
			buf[--charPos] = digits[i & mask];
			i >>>= shift;
		} while (i != 0);

		if (zmsk > 0)
			charPos = 32 - zmsk;

		return new String(buf, charPos, (32 - charPos));
	}

	private final static char[] digits = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };

	public static double toDouble(String str) {
		return toDouble(str, 0.0d);
	}

	public static double toDouble(String str, double defaultValue) {
		if (str == null) {
			return defaultValue;
		}
		try {
			return Double.parseDouble(str);
		} catch (NumberFormatException nfe) {
			return defaultValue;
		}
	}

	public static float toFloat(String str) {
		return toFloat(str, 0.0f);
	}

	public static float toFloat(String str, float defaultValue) {
		if (str == null) {
			return defaultValue;
		}
		try {
			return Float.parseFloat(str);
		} catch (NumberFormatException nfe) {
			return defaultValue;
		}
	}

	public static int toInt(String str) {
		return toInt(str, 0);
	}

	public static int toInt(String str, int defaultValue) {
		if (str == null) {
			return defaultValue;
		}
		try {
			return Integer.parseInt(str);
		} catch (NumberFormatException nfe) {
			return defaultValue;
		}
	}

	public static long toLong(String str) {
		return toLong(str, 0L);
	}

	public static long toLong(String str, long defaultValue) {
		if (str == null) {
			return defaultValue;
		}
		try {
			return Long.parseLong(str);
		} catch (NumberFormatException nfe) {
			return defaultValue;
		}
	}
}
