package it.appify.sound;

import it.appify.api.Sound;

//http://buzz.jaysalvat.com/documentation/sound/
public class BuzzSound implements Sound {

    private String path;

    public BuzzSound(String path) {
	this.path = path;

    }
    
    @Override
    public void play() {
	_play();
    }

    // TODO: change this with a key value pair map of sounds
    private native void _createSound(String path)/*-{
		$wnd.activationSound = new buzz.sound(path, {
			formats : [ "ogg", "mp3", "aac" ]
		});
    }-*/;

    private native void _play()/*-{
		$wnd.activationSound.play();
    }-*/;

    private native void _stop(String path)/*-{
		$wnd.activationSound.stop();
    }-*/;
}
