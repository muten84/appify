package it.appify.poc.client.util;

import java.util.Arrays;

import it.appify.api.HasViewHandlers.Util;
import it.appify.api.HasViewHandlers.ViewHandler;
import it.appify.api.HasViewHandlers.ViewHandlerHolder;
import it.appify.poc.client.model.ChildModel;
import it.appify.poc.client.model.Model;

public class Utils {

	public static ViewHandlerHolder createClickHandler(String viewId, ViewHandler h) {
		return Util.createHandler(

		viewId, "click", h);
	}

	public static Model createModel() {

		final Model m = new Model("Model View View Model POC");
		m.setContent("Lorem Ipsum Content");
		m.setChilePageTitle("Child Page Title");
		m.setChildPageContent("Child Page Content");
		m.setInput("Input text injected");
		ChildModel c = new ChildModel();
		c.setTitle("Child object Title");
		c.setContent("Child object content");
		m.setChild(c);
		m.setItems(Arrays.asList(new String[] { "Dynamic Item 1", "Dynamic Item 2" }));
		return m;
	}

}
