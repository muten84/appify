package it.appify.server.gps.impl;

import it.appify.server.channel.IChannel;
import it.appify.server.data.DateUtils;
import it.appify.server.data.GPSData;
import it.appify.server.data.LateResult;
import it.appify.server.gps.GpsEvent;
import it.appify.server.gps.GpsObservable;

import java.util.ArrayList;
import java.util.Observer;
import java.util.Random;

public class GpsEmulator implements IChannel {

	// private static Category logger = Category.getInstance(GpsEmulator.class);

	protected String name;

	protected ArrayList gpsList;

	protected Random random;

	protected GpsObservable observable;

	protected GpsReader gpsReader;

	public GpsEmulator() {
		name = "GPS EMULATOR";
		gpsList = new ArrayList();
		random = new Random(System.currentTimeMillis());
		observable = new GpsObservable(this);
		gpsReader = new GpsReader();
		initialize();
	}

	protected void initialize() {
		gpsList.add(new GPSData(44.50274, 011.31740, 47, 297, true));
		gpsList.add(new GPSData(44.50619, 011.31703, 24, 302, true));
		gpsList.add(new GPSData(44.50622, 011.31545, 2, 130, true));
		gpsList.add(new GPSData(44.50841, 011.29909, 24, 104, true));
		gpsList.add(new GPSData(44.50837, 011.29929, 32, 105, true));
		gpsList.add(new GPSData(44.50812, 011.30057, 38, 106, true));
		gpsList.add(new GPSData(44.50792, 011.30158, 33, 104, true));
		gpsList.add(new GPSData(44.50763, 011.30294, 33, 108, true));
		gpsList.add(new GPSData(44.50735, 011.30420, 40, 110, true));
		gpsList.add(new GPSData(44.50707, 011.30516, 35, 112, true));
		gpsList.add(new GPSData(44.50662, 011.30653, 39, 115, true));
		gpsList.add(new GPSData(44.50613, 011.30796, 43, 116, true));
		gpsList.add(new GPSData(44.50576, 011.30897, 35, 121, true));
		gpsList.add(new GPSData(44.50520, 011.31042, 60, 115, true));
		gpsList.add(new GPSData(44.50447, 011.31252, 71, 114, true));
		gpsList.add(new GPSData(44.50385, 011.31430, 68, 117, true));
		gpsList.add(new GPSData(44.50294, 011.31678, 68, 118, true));
		gpsList.add(new GPSData(44.50218, 011.31891, 66, 116, true));
		gpsList.add(new GPSData(44.50170, 011.32032, 56, 115, true));
		gpsList.add(new GPSData(44.50115, 011.32179, 42, 118, true));
		gpsList.add(new GPSData(44.50094, 011.32234, 14, 117, true));
		gpsList.add(new GPSData(44.50103, 011.32229, 7, 293, true));
		gpsList.add(new GPSData(44.50625, 011.31667, 13, 110, true));
		gpsList.add(new GPSData(44.50621, 011.31684, 13, 110, true));
		gpsList.add(new GPSData(44.50274, 011.31740, 47, 297, true));
		gpsList.add(new GPSData(44.50619, 011.31703, 24, 302, true));
		gpsList.add(new GPSData(44.50622, 011.31545, 2, 130, true));
		gpsList.add(new GPSData(44.50841, 011.29909, 24, 104, true));
		gpsList.add(new GPSData(44.50837, 011.29929, 32, 105, true));
		gpsList.add(new GPSData(44.50812, 011.30057, 38, 106, true));
		gpsList.add(new GPSData(44.50792, 011.30158, 33, 104, true));
		gpsList.add(new GPSData(44.50763, 011.30294, 33, 108, true));
		gpsList.add(new GPSData(44.50735, 011.30420, 40, 110, true));
		gpsList.add(new GPSData(44.50707, 011.30516, 35, 112, true));
		gpsList.add(new GPSData(44.50662, 011.30653, 39, 115, true));
		gpsList.add(new GPSData(44.50613, 011.30796, 43, 116, true));
		gpsList.add(new GPSData(44.50576, 011.30897, 35, 121, true));
		gpsList.add(new GPSData(44.50520, 011.31042, 60, 115, true));
		gpsList.add(new GPSData(44.50447, 011.31252, 71, 114, true));
		gpsList.add(new GPSData(44.50385, 011.31430, 68, 117, true));
		gpsList.add(new GPSData(44.50294, 011.31678, 68, 118, true));
		gpsList.add(new GPSData(44.50218, 011.31891, 66, 116, true));
		gpsList.add(new GPSData(44.50170, 011.32032, 56, 115, true));
		gpsList.add(new GPSData(44.50115, 011.32179, 42, 118, true));
		gpsList.add(new GPSData(44.50094, 011.32234, 14, 117, true));
		gpsList.add(new GPSData(44.50103, 011.32229, 7, 293, true));
		gpsList.add(new GPSData(44.50625, 011.31667, 13, 110, true));
		gpsList.add(new GPSData(44.50621, 011.31684, 13, 110, true));
		//
		//
		// // gpsList.add(new GPSData(44.50519, 011.31587, 1, 133, true));
		// // gpsList.add(new GPSData(44.50532, 011.31598, 22, 47, true));
		// // gpsList.add(new GPSData(44.50551, 011.31670, 17, 189, true));
		// // gpsList.add(new GPSData(44.50508, 011.31662, 36, 209, true));
		// // gpsList.add(new GPSData(44.50362, 011.31559, 38, 222, true));
		// // gpsList.add(new GPSData(44.50409, 011.31357, 77, 291, true));
		// // gpsList.add(new GPSData(44.50518, 011.31021, 75, 295, true));
		// // gpsList.add(new GPSData(44.50502, 011.30886, 54, 202, true));
		// // gpsList.add(new GPSData(44.50289, 011.30778, 59, 202, true));
		// // gpsList.add(new GPSData(44.50135, 011.30606, 90, 223, true));
		// // gpsList.add(new GPSData(44.49936, 011.30260, 114, 233, true));
		// // gpsList.add(new GPSData(44.49731, 011.29883, 115, 226, true));
		// // gpsList.add(new GPSData(44.49453, 011.29548, 128, 220, true));
		// // gpsList.add(new GPSData(44.49253, 011.29159, 119, 248, true));
		// // gpsList.add(new GPSData(44.49120, 011.28675, 126, 248, true));
		// // gpsList.add(new GPSData(44.48954, 011.28190, 132, 235, true));
		// // gpsList.add(new GPSData(44.48790, 011.27714, 123, 264, true));
		// // gpsList.add(new GPSData(44.48918, 011.27221, 129, 297, true));
		// // gpsList.add(new GPSData(44.49090, 011.26815, 116, 288, true));
		// // gpsList.add(new GPSData(44.49186, 011.26332, 121, 285, true));
		// // gpsList.add(new GPSData(44.49281, 011.25856, 111, 285, true));
		// // gpsList.add(new GPSData(44.49312, 011.25366, 121, 261, true));
		// // gpsList.add(new GPSData(44.49188, 011.24894, 119, 247, true));
		// // gpsList.add(new GPSData(44.49045, 011.24427, 122, 247, true));
		// // gpsList.add(new GPSData(44.48927, 011.23932, 128, 261, true));
		// // gpsList.add(new GPSData(44.48953, 011.23390, 114, 280, true));
		// // gpsList.add(new GPSData(44.49046, 011.23173, 47, 346, true));
		// // gpsList.add(new GPSData(44.49209, 011.23161, 35, 338, true));
		// // gpsList.add(new GPSData(44.49175, 011.22964, 70, 267, true));
		// // gpsList.add(new GPSData(44.49218, 011.22716, 38, 279, true));
		// // gpsList.add(new GPSData(44.49068, 011.22738, 75, 181, true));
		// // gpsList.add(new GPSData(44.48830, 011.22706, 64, 169, true));
		// // gpsList.add(new GPSData(44.48698, 011.22636, 74, 206, true));
		// // gpsList.add(new GPSData(44.48491, 011.22510, 60, 192, true));
		// // gpsList.add(new GPSData(44.48280, 011.22449, 87, 190, true));
		// // gpsList.add(new GPSData(44.48025, 011.22376, 85, 191, true));
		// // gpsList.add(new GPSData(44.47802, 011.22272, 78, 225, true));
		// // gpsList.add(new GPSData(44.47681, 011.21973, 93, 228, true));
		// // gpsList.add(new GPSData(44.47517, 011.21578, 87, 251, true));
		// // gpsList.add(new GPSData(44.47403, 011.21319, 60, 222, true));
		// // gpsList.add(new GPSData(44.47275, 011.21028, 93, 236, true));
		// // gpsList.add(new GPSData(44.47202, 011.20709, 79, 247, true));
		// // gpsList.add(new GPSData(44.47030, 011.20504, 83, 215, true));
		// // gpsList.add(new GPSData(44.46850, 011.20209, 75, 232, true));
		// // gpsList.add(new GPSData(44.46635, 011.20150, 101, 201, true));
		// // gpsList.add(new GPSData(44.46434, 011.19994, 35, 259, true));
		// // gpsList.add(new GPSData(44.46418, 011.19843, 62, 202, true));
		// // gpsList.add(new GPSData(44.46169, 011.19852, 93, 170, true));
		// // gpsList.add(new GPSData(44.45935, 011.19984, 64, 161, true));
		// // gpsList.add(new GPSData(44.45745, 011.19988, 57, 191, true));
		// // gpsList.add(new GPSData(44.45774, 011.19994, 58, 183, true));
		// // gpsList.add(new GPSData(44.45699, 011.19913, 0, 43, true));
		// // gpsList.add(new GPSData(44.45942, 011.19987, 57, 341, true));
		// // gpsList.add(new GPSData(44.46596, 011.20134, 60, 25, true));
		// // gpsList.add(new GPSData(44.47250, 011.20973, 61, 66, true));
		// // gpsList.add(new GPSData(44.47950, 011.22363, 93, 12, true));
		// // gpsList.add(new GPSData(44.48915, 011.22712, 77, 7, true));
		// // gpsList.add(new GPSData(44.48890, 011.23068, 49, 240, true));
		// // gpsList.add(new GPSData(44.49108, 011.24672, 126, 68, true));
		// // gpsList.add(new GPSData(44.49008, 011.27000, 117, 117, true));
		// // gpsList.add(new GPSData(44.49204, 011.28992, 110, 68, true));
		// // gpsList.add(new GPSData(44.50178, 011.30676, 85, 41, true));
		// // gpsList.add(new GPSData(44.50594, 011.31537, 4, 61, true));
		// // gpsList.add(new GPSData(44.50540, 011.31569, 15, 154, true));
		// // gpsList.add(new GPSData(44.50531, 011.31572, 17, 150, true));
	}

	public GPSData getPosition() {
		int size = gpsList.size();
		if (size > 0) {
			int index = random.nextInt(size);
			if (index > -1 && index < size) {
				GPSData gps = (GPSData) gpsList.get(index);
				gps.setTimestamp(DateUtils.getUTCDate().getTime());
				return gps;
			}
		}
		return null;
	}

	public short getStatus() {
		return STATUS_AVAILABLE;
	}

	public void addObserver(Observer observer) {
		if (observer == null) {
			return;
		}
		observable.addObserver(observer);
	}

	public void config() {
	}

	public String getName() {
		return name;
	}

	public boolean isRunning() {
		return true;
	}

	public boolean isType(String type) {
		return true;
	}

	public void remObserver(Observer observer) {
		if (observer == null) {
			return;
		}
		observable.deleteObserver(observer);
	}

	public void restart() {
	}

	public void resume() {
	}

	public void shutdown(LateResult result) {
		gpsReader.stop();
	}

	public boolean startup() {
		System.out.println(getName() + " STARTED.");
		gpsReader.start();
		return true;
	}

	public void suspend() {
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
			while (!halted) {
				try {
					GPSData data = getPosition();
					if (data != null) {
						GpsEvent evt = new GpsEvent(data);
						observable.setAction(evt, true);
					}
					Thread.sleep(1000);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
	}

}
