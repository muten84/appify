package it.appify.export;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.shared.GWT;

public class ExportableEntryPoint implements EntryPoint {

	@Override
	public void onModuleLoad() {
		GWT.create(ExportableAppify.class);

	}
}
