package framework.builder;

import framework.JSHTMLFragment;

public class UIFile extends JSHTMLFragment {

	public UIFile(String name) {
		super(name, "#uiFile");
	}
	
	public UIFile setTitle(String title){
		getContext().$set("title", title);
		setRendered(false);
		return this;
	}
	
	public UIFile setAbbr(String abbr){
		getContext().$set("abbr", abbr);
		setRendered(false);
		return this;
	}
	
	public UIFile setHelp(String help){
		getContext().$set("help", help);
		setRendered(false);
		return this;
	}

}
