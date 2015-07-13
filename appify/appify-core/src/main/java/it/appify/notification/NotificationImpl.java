package it.appify.notification;

import it.appify.api.Notification;

public class NotificationImpl implements Notification {
	
	@Override
	public void notify(int type, String message) {
		_showNotification(message, null);

	}

	@Override
	public void notify(int type, String message, NotificationCallback callback) {
		_showNotification(message, callback);

	}

	private native final void _showNotification(String message, NotificationCallback callback)/*-{
		var notification = new $wnd.NotificationFx(
				{
					message : '<p class="font-xlarge" style="color: white">'+message+'</p>',
//					layout : 'bar',
//					effect : 'slidetop',
					layout : 'growl',
					effect : 'genie',

					type : 'notice', // notice, warning, error or success
					onClose : function() {
						if(callback!=null){
							callback.@it.appify.api.Notification.NotificationCallback::onClose()();
						}
					}
				});

		// show the notification
		notification.show();
	}-*/;
}
