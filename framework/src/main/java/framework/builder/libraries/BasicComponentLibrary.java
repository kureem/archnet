package framework.builder.libraries;

import framework.builder.BasicComponent;
import framework.builder.ComponentsLibrary;

public class BasicComponentLibrary extends ComponentsLibrary{

	public BasicComponentLibrary() {
		super("Basic");
		
		addComponents(
					new BasicComponent("h1", 		"H1", 		"Heading 1"),
					new BasicComponent("h2", 		"H2", 		"Heading 2"),
					new BasicComponent("h3", 		"H3", 		"Heading 3"),
					new BasicComponent("h4", 		"H4", 		"Heading 4"),
					new BasicComponent("h5", 		"H5", 		"Heading 5"),
					new BasicComponent("span", 		"SPAN", 	"Span"),
					new BasicComponent("p", 		"P", 		"Paragraph"),
					new BasicComponent("label", 	"LABEL",	"Label"),
					new BasicComponent("a", 		"A", 		"Hyper Link"),
					new BasicComponent("img", 		"IMG", 		"Image"),
					new BasicComponent("ol", 		"OL", 		"Ordered List"),
					new BasicComponent("ul", 		"UL", 		"Un-Ordered List"),
					new BasicComponent("li", 		"LI", 		"List Item"),
					new BasicComponent("form", 		"FORM", 	"Form"),
					new BasicComponent("fieldset",	"UL", 		"Fieldset"),
					new BasicComponent("input", 	"input", 	"Input"),
					new BasicComponent("select",	"SELECT", 	"Select"),
					new BasicComponent("textarea",	"TEXTAREA","Text Area"),
					new BasicComponent("button",	"BUTTON", 	"Button")
				);
	}

}
