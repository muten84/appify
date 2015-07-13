package it.appify.api;

public interface Notification {
	
	public static final int NOTICE = 0;;
	public static final int ERROR =1;
	public static final int WARNING =2;
	
	public static interface NotificationCallback{
		public void onClose();
	}
	
		
	public void notify(int type, String message);


	public void notify(int type, String message, NotificationCallback callback);

}
