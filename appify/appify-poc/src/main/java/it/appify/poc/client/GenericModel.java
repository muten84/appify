package it.appify.poc.client;

import java.util.HashMap;
import java.util.Map;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
@Export("appState")
@ExportPackage("appify")
public class GenericModel {

	private Map<String, String> objects;

	public GenericModel(){
		this.objects = new HashMap<String, String>();
	}

	public Map<String, String> getObjects() {
		return objects;
	}

	public void setObjects(Map<String, String> objects) {
		this.objects = objects;
	}

}
