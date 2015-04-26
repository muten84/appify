package it.appify.poc.client.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.ViewHandler;
import it.appify.app.WebApp;

import org.timepedia.exporter.client.ExporterUtil;

@Controller(page = "mainPage")
public class ExporterController {
	public ExporterController(WebApp<?> app) {

	}

	@ViewHandler(eventType = "click", viewId = "exportBtn")
	public void export() {
		ExporterUtil.exportAll();
	}
}