package it.appify.server.freemarker;

import java.io.File;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Serializable;
import java.io.Writer;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import freemarker.template.Configuration;
import freemarker.template.DefaultObjectWrapper;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import freemarker.template.TemplateExceptionHandler;

public class IncludeTest {

	public static class Page implements Serializable {
		private String name;

		public Page() {
		}

		public Page(String name) {
			this.name = name;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

	}

	public static void main(String[] args) throws IOException,
			TemplateException {
		Configuration cfg = new Configuration();
		cfg.setDirectoryForTemplateLoading(new File("templates"));
		cfg.setDefaultEncoding("UTF-8");
		cfg.setObjectWrapper(new DefaultObjectWrapper());
		cfg.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);
		Template temp = cfg.getTemplate("appify.ftl");
		List<Page> pages = Arrays.asList(new Page[] { new Page("mainPage") });
		/* Merge data-model with template */
		Map root = new HashMap();
		root.put("title", "Generated Appify Project");
		root.put("gwtModule", "example");
		root.put("pages", pages);
		Writer out = new OutputStreamWriter(System.out);
		temp.process(root, out);
	}
}
