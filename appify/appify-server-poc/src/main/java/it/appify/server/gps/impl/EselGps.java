package it.appify.server.gps.impl;

import gnu.io.CommPortIdentifier;
import gnu.io.SerialPort;
import it.appify.server.channel.ChannelEvent;
import it.appify.server.channel.IChannel;
import it.appify.server.data.DateUtils;
import it.appify.server.data.GPSData;
import it.appify.server.data.LateResult;
import it.appify.server.gps.GpsEvent;
import it.appify.server.gps.GpsObservable;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Observer;
import java.util.TimeZone;

public class EselGps implements IChannel{
	public String TYPE_GPS = "TYPE_GPS";

	private GpsObservable observable;

	private short status;

	private boolean running;

	private String name;

	private GpsInfo tmpGpsInfo;

	private GpsInfo lastGpsInfo;

	private NMEAParser parser;

	private GpsReader gpsReader;

	private GpsConnector gpsConnector;

	private short unreadedAge;

	public EselGps() {
		name = "ESEL_GPS";
		observable = new GpsObservable(this);
		parser = new NMEAParser();
		status = STATUS_TEMP_UNAVAILABLE;
		gpsReader = new GpsReader();
		gpsConnector = new GpsConnector();
		unreadedAge = 0;
	}

	private void changeStatus(final short status) {
		short oldStatus = this.status;
		this.status = status;

		if (oldStatus != status) {
			Thread thd = new Thread() {
				public void run() {
					ChannelEvent evt = new ChannelEvent(status);
					observable.setAction(evt);
				}
			};
			thd.setPriority(Thread.MIN_PRIORITY);
			thd.setDaemon(true);
			thd.start();
		}
	}

	public String getName() {
		return name;
	}

	public GPSData getPosition() {
		return info2data(lastGpsInfo);
	}

	public void config(String port, String rate) {

		try {
			gpsConnector.setPort(port);
			gpsConnector.setBaudRate(Integer.parseInt(rate));
		} catch (Exception e) {
			e.printStackTrace();
			
		}

	}

	public boolean isRunning() {
		return running;
	}

	public boolean startup() {
		running = true;

		gpsConnector.start();
		gpsReader.start();

		return running;
	}

	public void shutdown(LateResult lateResult) {
		running = false;

		gpsConnector.stop();
		gpsReader.stop();
	}

	public void restart() {
		shutdown(null);
		startup();
	}

	public void suspend() {
	}

	public void resume() {
	}

	public boolean isType(String type) {
		return (TYPE_GPS.equals(type));
	}

	public void addObserver(Observer observer) {
		if (observer == null) {
			return;
		}
		observable.addObserver(observer);
	}

	public void remObserver(Observer observer) {
		if (observer == null) {
			return;
		}
		observable.deleteObserver(observer);
	}

	public short getStatus() {
		return status;
	}

	private double DM2DD(double c) {
		double deg = Math.floor(c * 1e-2);
		double min = c - deg * 1e2;
		return deg + min / 60.0;
	}

	private class GpsConnector implements Runnable {

		private boolean halted;

		private Thread thread;

		private String port;

		private int baudRate;

		private InputStream input;

		private OutputStream output;

		private SerialPort serialPort;

		public GpsConnector() {
			thread = new Thread(this, "GpsConnectorthread");
			thread.setPriority(Thread.MIN_PRIORITY);
			thread.setDaemon(true);
		}

		public void start() {
			thread.start();
		}

		public void stop() {
			changeStatus(STATUS_OUT_OF_ORDER);
			halted = true;
			thread.interrupt();
		}

		private void connect() {
			//logger.debug("gps device connecting ...");
			try {
				serialPort = (SerialPort) CommPortIdentifier.getPortIdentifier(port).open("GPSDriver", 60);
				serialPort.setSerialPortParams(baudRate, SerialPort.DATABITS_8, SerialPort.STOPBITS_1, SerialPort.PARITY_NONE);

				input = serialPort.getInputStream();
				output = serialPort.getOutputStream();

				try {
					// consume first reading
					readLine();
				} catch (Exception e) {
					e.printStackTrace();
					//logger.error("first reading failure");
				}

				changeStatus(STATUS_AVAILABLE);

				//logger.debug("gps device connected.");
			} catch (Exception e) {
				
				e.printStackTrace();
				//logger.error("gps startup failure.", e);
				changeStatus(STATUS_OUT_OF_ORDER);
			}
		}

		private void disconnect() {
			//logger.debug("gps device disconnecting ...");
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (output != null) {
				try {
					output.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (serialPort != null) {
				serialPort.close();
			}
			input = null;
			output = null;
			serialPort = null;

			changeStatus(STATUS_TEMP_UNAVAILABLE);

			//logger.debug("gps device disconnected");
		}

		public void run() {
			changeStatus(STATUS_TEMP_UNAVAILABLE);
			while (!halted) {
				// synchronized (SYNCH_STATUS) {
				while (!halted && STATUS_AVAILABLE == status) {
					//logger.debug("gps::run available and sleeping");
					Thread.yield();
					try {
						Thread.sleep(5000);
						// wait(5000);
					} catch (Exception e) {
						//logger.error(e.getMessage());
						e.printStackTrace();
					}
				}
				// }

				if (!halted) {
					// //logger.debug("gps::run connection not available");
					if (serialPort != null) {
						disconnect();
					}
					connect();
				}
			}

			disconnect();
		}

		// public int getBaudRate() {
		// return baudRate;
		// }

		public void setBaudRate(int baudRate) {
			this.baudRate = baudRate;
		}

		// public String getPort() {
		// return port;
		// }

		public void setPort(String port) {
			this.port = port;
		}

		public String readLine() throws IOException {
			StringBuffer line = new StringBuffer();

			byte buffer;
			while ((buffer = (byte) input.read()) != -1) {
				if ((buffer == 13) || (buffer == 10)) {
					break;
				} else {
					line.append((char) buffer);
				}
			}

			return line.toString();
		}
	}

	private class GpsReader implements Runnable {

		private Thread thread;

		private boolean halted;

		public GpsReader() {
			thread = new Thread(this, "GpsReaderThread");
			thread.setPriority(Thread.MIN_PRIORITY);
			thread.setDaemon(true);
			halted = false;
		}

		public void start() {
			thread.start();
		}

		public void stop() {
			halted = true;
		}

		public void run() {
			tmpGpsInfo = new GpsInfo();
			lastGpsInfo = new GpsInfo();

			long t1 = System.currentTimeMillis();
			long t2 = t1;

			while (!halted) {
				if (STATUS_AVAILABLE == status) {
					try {
						String msg = gpsConnector.readLine();

						t2 = System.currentTimeMillis();

						if (msg != null && msg.length() > 0) {
							// //logger.debug("gps msg : " + msg);

							unreadedAge = 0;

							if (parser.parse(msg, tmpGpsInfo)) {
								tmpGpsInfo.latitude = DM2DD(tmpGpsInfo.latitude);
								tmpGpsInfo.longitude = DM2DD(tmpGpsInfo.longitude);

								lastGpsInfo = (GpsInfo) tmpGpsInfo.clone();

								int offset = 2000;
								if (t2 - t1 > offset) {
									t1 = t2;
									GpsEvent evt = new GpsEvent(info2data(lastGpsInfo));
									observable.setAction(evt, true);
								}
							}
						} else {
							unreadedAge++;

							if (unreadedAge > 100) {
								//logger.warn("GPS INACTIVE!");
								changeStatus(STATUS_TEMP_UNAVAILABLE);
								unreadedAge = 0;
							}
						}
					} catch (Exception e) {
						e.printStackTrace();
						//logger.error("Gps reading failure", e);
						changeStatus(STATUS_TEMP_UNAVAILABLE);
					}
				} else {
					try {
						Thread.sleep(500);
					} catch (Exception e) {
						e.printStackTrace();
						//logger.error(e.getMessage());
						e.printStackTrace();
					}
				}

				Thread.yield();
			}
		}
	}

	private GPSData info2data(GpsInfo info) {
		// Location loc = new Location();
		// loc.setCourse(info.course);
		// loc.setSpeed(info.speed);
		// loc.setTimestamp(normalizeTimestamp(info));
		// loc.setValid(true);
		// loc.setQualifiedCoordinates(new QualifiedCoordinates(info.latitude,
		// info.longitude));
		GPSData gpsData = new GPSData();

		gpsData.setAltitude(info.height);
		gpsData.setCourse(info.course);
		gpsData.setHdop(info.hdop);
		gpsData.setLatitude(info.latitude);
		gpsData.setLongitude(info.longitude);
		gpsData.setSatellite(info.satellites);
		gpsData.setSpeed(info.speed);
		gpsData.setTimestamp(normalizeTimestamp(info));
		gpsData.setVdop(info.vdop);
		gpsData.setValid(true);

		return gpsData;
	}

	public static long normalizeTimestamp(GpsInfo info) {
		String timestamp = "";
		String pattern = "";
		if (info.date != null && info.date.length() > 0) {
			timestamp += info.date;
			pattern += DateUtils.PATTERN_DDMMYY;
		} else {
			timestamp += DateUtils.format(DateUtils.getDate(), DateUtils.PATTERN_DDMMYY, TimeZone.getTimeZone("UTC"));
			pattern += DateUtils.PATTERN_DDMMYY;
		}
		if (info.time != null && info.time.length() > 0) {
			timestamp += info.time;
			pattern += DateUtils.PATTERN_HHMMSSmmm;
		} else {
			timestamp += DateUtils.format(DateUtils.getDate(), DateUtils.PATTERN_HHMMSSmmm, TimeZone.getTimeZone("UTC"));
			pattern += DateUtils.PATTERN_HHMMSSmmm;
		}

		long normtime = DateUtils.getUTCDate().getTime();
		if (timestamp.length() > 0) {
			normtime = DateUtils.parse(timestamp, pattern, TimeZone.getTimeZone("UTC")).getTime();
		}
		return normtime;
	}

}
