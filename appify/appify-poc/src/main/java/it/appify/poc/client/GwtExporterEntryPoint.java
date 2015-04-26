package it.appify.poc.client;

import it.appify.export.ExportableAppify;

import org.timepedia.exporter.client.Exporter;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.shared.GWT;

public class GwtExporterEntryPoint implements EntryPoint {

	@Override
	public void onModuleLoad() {
		// this is working :) GWT.create(App.class);

		Exporter exporter = (Exporter) GWT.create(ExportableAppify.class);

	}

}
