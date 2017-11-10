package framework.designables;

import java.util.List;

import framework.design.Option;
import framework.design.Parameter;
import framework.design.TagParameter;
import framework.design.TextParameter;

public class JSDesignableBlockComponent extends JSDesignable{

	public JSDesignableBlockComponent(String name, String tag) {
		super(name, tag);
	}

	@Override
	public List<Parameter> getParameters() {
		List<Parameter> params = super.getParameters();
		TextParameter textParam = new TextParameter("text", "Html", "Basic");
		TagParameter tagParam = new TagParameter();
		tagParam.options.add(new Option("div", "div"));
		tagParam.options.add(new Option("abbr", "abbr"));
		tagParam.options.add(new Option("address", "address"));
		tagParam.options.add(new Option("article", "article"));
		tagParam.options.add(new Option("aside", "aside"));
		tagParam.options.add(new Option("cite", "cite"));
		tagParam.options.add(new Option("blockquote", "blockquote"));
		tagParam.options.add(new Option("dl", "dl"));
		tagParam.options.add(new Option("fieldset", "fieldset"));
		tagParam.options.add(new Option("figure", "figure"));
		tagParam.options.add(new Option("footer", "footer"));
		tagParam.options.add(new Option("header", "header"));
		tagParam.options.add(new Option("hgroup", "hgroup"));
		tagParam.options.add(new Option("nav", "nav"));
		tagParam.options.add(new Option("pre", "pre"));
		tagParam.options.add(new Option("section", "section"));
		
		
		params.add(tagParam);
		params.add(textParam);
		return params;
	}
	
	

}
