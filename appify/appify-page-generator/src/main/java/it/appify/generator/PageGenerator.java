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

	public void generatePages(String matchPage, String templateDirPath, String outputFileName, String pageTitle, String gwtModule) throws IOException, TemplateException {
		List<TemplateLoader> loadersList = new ArrayList<TemplateLoader>();
		File pagesDir = new File(templateDirPath + "/pages");
		File cssDir = new File(templateDirPath + "/css");
		File jsDir = new File(templateDirPath + "/js");
		FileTemplateLoader pagesTemplatesLoader = null;
		if (pagesDir != null && pagesDir.isDirectory()) {
			System.out.println("Adding pages dir: " + pagesDir.getAbsolutePath());
			pagesTemplatesLoader = new FileTemplateLoader(pagesDir);
			loadersList.add(pagesTemplatesLoader);
		}
		FileTemplateLoader cssTemplatesLoader = null;
		if (cssDir != null && cssDir.isDirectory()) {
			System.out.println("Adding css dir: " + cssDir.getAbsolutePath());
			cssTemplatesLoader = new FileTemplateLoader(cssDir);
			loadersList.add(cssTemplatesLoader);
		}
		FileTemplateLoader jsTemplatesLoader = null;
		if (jsDir != null && jsDir.isDirectory()) {
			System.out.println("Adding jsDir dir: " + cssDir.getAbsolutePath());
			jsTemplatesLoader = new FileTemplateLoader(jsDir);
			loadersList.add(jsTemplatesLoader);
		}

		URL url = PageGenerator.class.getResource("appify.ftl");
		StringTemplateLoader strLoader = new StringTemplateLoader();

		InputStream resourceStream = url.openStream();
		BufferedReader in = new BufferedReader(new InputStreamReader(resourceStream));
		String inputLine;
		StringBuffer buffer = new StringBuffer();
		while ((inputLine = in.readLine()) != null) {
			System.out.println(inputLine);
			buffer.append(inputLine);
			buffer.append("\n");
		}
		in.close();
		strLoader.putTemplate("appify", buffer.toString());
		loadersList.add(strLoader);
		ClassTemplateLoader ctl = new ClassTemplateLoader(getClass(), "it/appify/generator");
		loadersList.add(ctl);
		TemplateLoader[] loaders = loadersList.toArray(new TemplateLoader[] {});
		MultiTemplateLoader mtl = new MultiTemplateLoader(loaders);

		Configuration cfg = new Configuration();
		cfg.setTemplateLoader(mtl);
		cfg.setDefaultEncoding("UTF-8");
		cfg.setObjectWrapper(new DefaultObjectWrapper());
		cfg.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);
		Template temp = cfg.getTemplate("appify");

		List<Page> pages = new ArrayList<PageGenerator.Page>();
		if (pagesDir != null && pagesDir.isDirectory()) {
			String[] pageList = pagesDir.list();

			if (matchPage != null && matchPage.length() > 0) {
				for (String pageName : pageList) {
					if (pageName.equals(matchPage)) {
						String name = pageName.substring(0, pageName.indexOf(".html"));
						pages.add(new Page(name));
					}
				}
			} else {
				for (String pageName : pageList) {
					if (pageName.contains("html")) {
						String name = pageName.substring(0, pageName.indexOf(".html"));
						pages.add(new Page(name));
					}
				}
			}
		}
		String css = "";
		if (cssDir != null && cssDir.isDirectory()) {
			System.out.println("Css dir OK");
			css = cssDir.list()[0];

		}
		String js = "";
		if (jsDir != null && jsDir.isDirectory()) {
			System.out.println("Js dir OK");
			js = jsDir.list()[0];

		}
		System.out.println("CSS snippet: " + css);
		/* Merge data-model with template */
		Map root = new HashMap();
		root.put("title", pageTitle);
		root.put("gwtModule", gwtModule);
		root.put("pages", pages);
		if (css.length() > 0) {
			String name = css.substring(0, css.indexOf(".html"));
			root.put("css", name);
		}
		if (js.length() > 0) {
			String name = js.substring(0, js.indexOf(".html"));
			root.put("js", name);
		}
		File outFile = new File(outputFileName);
		FileOutputStream fileOut = new FileOutputStream(outFile);
		Writer out = new OutputStreamWriter(fileOut);
		temp.process(root, out);
	}

	public static void main(String[] args) throws IOException, TemplateException {
		PageGenerator gen = new PageGenerator();
		if (args[0].contains(".html")) {
			gen.generatePages(args[0], args[1], args[2], args[3], args[4]);
		} else {
			gen.generatePages(null, args[0], args[1], args[2], args[3]);
		}
	}

}
