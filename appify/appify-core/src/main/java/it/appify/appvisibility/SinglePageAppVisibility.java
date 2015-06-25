package it.appify.appvisibility;

import it.appify.api.AppVisibility;
import it.appify.logging.ConsoleLogger;

public class SinglePageAppVisibility implements AppVisibility {

    private VisibilityCallback callback;

    @Override
    public boolean isAppVisible() {
	return _checkVisible();
    }

    @Override
    public void addVisibilityHandler(VisibilityCallback callback) {
	ConsoleLogger.getConsoleLogger().log("addVisibilityHandler");
	if (this.callback == null) {
	    this.callback = callback;
	    _addVisibilityHandler();
	}

    }

    protected void onVisible() {
	if (callback != null) {
	    callback.onVisible();
	}
    }

    protected void onHidden() {
	if (callback != null) {
	    callback.onHidden();
	}
    }

    private native void _addVisibilityHandler()/*-{
        	console.log('_addVisibilityHandler');
		var _self = this;
		function onchange(evt) {
			console.log('on visibility change: ' + evt.type);
			var v = _self.@it.appify.appvisibility.SinglePageAppVisibility::isAppVisible()();
			if (v == true) {
				console.log('on visible');
				_self.@it.appify.appvisibility.SinglePageAppVisibility::onVisible()();
			} else if (v == false) {
				console.log('on hidden');
				_self.@it.appify.appvisibility.SinglePageAppVisibility::onHidden()();
			}

		}
		console.log('check page visibility api');
		var hidden = "hidden";

		// Standards:
		if (hidden in $doc){
			$doc.addEventListener("visibilitychange", onchange);
			console.log('visibilitychange supported');			
		}
		else if ((hidden = "mozHidden") in $doc){
			$doc.addEventListener("mozvisibilitychange", onchange);
			console.log('mozvisibilitychange supported');
		}
		else if ((hidden = "webkitHidden") in $doc){
			$doc.addEventListener("webkitvisibilitychange", onchange);
			console.log('webkitvisibilitychange supported');
		}
		else if ((hidden = "msHidden") in $doc){
			$doc.addEventListener("msvisibilitychange", onchange);
			console.log('msvisibilitychange supported');
		}
		// IE 9 and lower:
		else if ("onfocusin" in $doc){
			$doc.onfocusin = $doc.onfocusout = onchange;
		}
		// All others:
		else{
			$wnd.onpageshow = $wnd.onpagehide = $wnd.onfocus = $wnd.onblur = onchange;
		}
		console.log('done');

    }-*/;

    private native boolean _checkVisible()/*-{
		var hidden = "hidden";
		if (hidden in $doc) {
			var hidden = $doc.hidden;
			return !hidden;
		} else {
			console.log('warning hidden property not known');
			return true;
		}
    }-*/;

}
