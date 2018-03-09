package framework.builder.libraries;

import framework.builder.BasicComponent;
import framework.builder.ComponentsLibrary;

public class BasicComponentLibrary extends ComponentsLibrary{

	public BasicComponentLibrary() {
		super("Basic");
		
		addComponents(
					new BasicComponent("p", 		"TXT", 		"Text Element"),
					new BasicComponent("a", 		"LNK", 		"Hyper Link"),
					new BasicComponent("img", 		"IMG", 		"Image"),
					new BasicComponent("div", 		"BLK", 		"Block Component"),
					new BasicComponent("ul", 		"LST", 		"List Component"),
					new BasicComponent("form", 		"FRM", 	"Form"),
				//	new BasicComponent("fieldset",	"FS", 		"Fieldset"),
					new BasicComponent("input", 	"IN", 	"Input"),
					new BasicComponent("select",	"SEL", 	"Select"),
					new BasicComponent("textarea",	"TA","Text Area"),
					new BasicComponent("button",	"BTN", 	"Button"),
					new BasicComponent("cmp",	"CMP", 	"Component"),
					new BasicComponent("html", "HTM", "Html Template")
				);
	}

}
