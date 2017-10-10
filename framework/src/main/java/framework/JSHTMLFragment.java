package framework;

import static def.jquery.Globals.$;
import static jsweet.lang.Globals.eval;

import jsweet.dom.HTMLElement;
import jsweet.lang.Object;

public class JSHTMLFragment extends JSContainer {

	private String template;

	public Object context = new Object();

	public JSHTMLFragment(String name, String template) {
		super(name, "div");
		this.template = template;
	}

	public String getTemplate() {
		return template;
	}

	public void setTemplate(String template) {
		this.template = template;
		setRendered(false);
	}

	public Object getContext() {
		return context;
	}

	@Override
	public void render(HTMLElement parent) {

		if (!isRendered()) {
			String html = $(template).html();
			Object cxt = context;
			String rendered = "";
			String js = "rendered = Mustache.render(html, cxt);";
			eval(js);
			setHtml(rendered);
			
		}
		super.render(parent);
	}

}
