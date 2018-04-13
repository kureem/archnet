package framework.designables;

import framework.DndAble;
import framework.MouseEventAble;
import framework.design.Option;
import framework.design.Parameter;
import framework.design.TagParameter;
import framework.design.TextParameter;
import jsweet.lang.Array;

public class JSDesignableBlockComponent extends JSDesignable implements MouseEventAble,DndAble{

	public JSDesignableBlockComponent(String name, String tag) {
		super(name, tag);
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> params = super.getParameters();
		TextParameter textParam = new TextParameter("text", "Html", "Basic");
		TagParameter tagParam = new TagParameter();
		tagParam.options.push(new Option("div", "div"));
		tagParam.options.push(new Option("abbr", "abbr"));
		tagParam.options.push(new Option("address", "address"));
		tagParam.options.push(new Option("article", "article"));
		tagParam.options.push(new Option("aside", "aside"));
		tagParam.options.push(new Option("cite", "cite"));
		tagParam.options.push(new Option("blockquote", "blockquote"));
		tagParam.options.push(new Option("dl", "dl"));
		tagParam.options.push(new Option("fieldset", "fieldset"));
		tagParam.options.push(new Option("figure", "figure"));
		tagParam.options.push(new Option("footer", "footer"));
		tagParam.options.push(new Option("header", "header"));
		tagParam.options.push(new Option("hgroup", "hgroup"));
		tagParam.options.push(new Option("nav", "nav"));
		tagParam.options.push(new Option("pre", "pre"));
		tagParam.options.push(new Option("section", "section"));
		
		
		params.push(tagParam);
		params.push(textParam);
		return params;
	}
	
	

}
