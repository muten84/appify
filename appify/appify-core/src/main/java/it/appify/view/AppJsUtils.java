package it.appify.view;

public class AppJsUtils {

	public static void alert(String title, String text, String textBtn) {
		_showDialog(title, text, textBtn);
	}

	private native static void _showDialog(String title, String text, String ok)/*-{
																				$wnd.App.dialog({
																				title : title,
																				text : text,
																				okButton : ok
																				});
																				}-*/;

}
