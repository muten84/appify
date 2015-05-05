package it.appify.generator;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.Serializable;
import java.io.Writer;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import freemarker.cache.ClassTemplateLoader;
import freemarker.cache.FileTemplateLoader;
import freemarker.cache.MultiTemplateLoader;
import freemarker.cache.StringTemplateLoader;
import freemarker.cache.TemplateLoader;
import freemarker.template.Configuration;
import freemarker.template.DefaultObjectWrapper;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import freemarker.template.TemplateExceptionHandler;

public class PageGenerator {
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

	public void generatePages(String matchPage, String templateDirPath,
			String outputFileName, String pageTitle, String gwtModule)
			throws IOException, TemplateException {

		FileTemplateLoader pagesTemplatesLoader = new FileTemplateLoader(
				new File(templateDirPath));
		URL url = PageGenerator.class.getResource("appify.ftl");
		StringTemplateLoader strLoader = new StringTemplateLoader();
		InputStream resourceStream = url.openStream();
		BufferedReader in = new BufferedReader(new InputStreamReader(
				resourceStream));
		String inputLine;
		StringBuffer buffer = new StringBuffer();
		while ((inputLine = in.readLine()) != null) {
			System.out.println(inputLine);
			buffer.append(inputLine);
			buffer.append("\n");
		}
		in.close();
		strLoader.putTemplate("appify", buffer.toString());
		ClassTemplateLoader ctl = new ClassTemplateLoader(getClass(),
				"it/appify/generator");
		TemplateLoader[] loaders = new TemplateLoader[] { strLoader,
				pagesTemplatesLoader, ctl };
		MultiTemplateLoader mtl = new MultiTemplateLoader(loaders);

		Configuration cfg = new Configuration();
		cfg.setTemplateLoader(mtl);
		File pagesDir = new File(templateDirPath);
		String[] pageList = pagesDir.list();
		cfg.setDefaultEncoding("UTF-8");
		cfg.setObjectWrapper(new DefaultObjectWrapper());
		cfg.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);

		Template temp = cfg.getTemplate("appify");
		List<Page> pages = new ArrayList<PageGenerator.Page>();
		if (matchPage != null && matchPage.length() > 0) {
			for (String pageName : pageList) {
				if (pageName.equals(matchPage)) {
					String name = pageName.substring(0,
							pageName.indexOf(".html"));
					pages.add(new Page(name));
				}
			}
		} else {
			for (String pageName : pageList) {
				if (pageName.contains("html")) {
					String name = pageName.substring(0,
							pageName.indexOf(".html"));
					pages.add(new Page(name));
				}
			}
		}
		/* Merge data-model with template */
		Map root = new HashMap();
		root.put("title", pageTitle);
		root.put("gwtModule", gwtModule);
		root.put("pages", pages);
		File outFile = new File(outputFileName);
		FileOutputStream fileOut = new FileOutputStream(outFile);
		Writer out = new OutputStreamWriter(fileOut);
		temp.process(root, out);
	}

	public static void main(String[] args) throws IOException,
			TemplateException {
		PageGenerator gen = new PageGenerator();
		if (args[0].contains(".html")) {
			gen.generatePages(args[0], args[1], args[2], args[3], args[4]);
		} else {
			gen.generatePages(null, args[0], args[1], args[2], args[3]);
		}
	}

}
