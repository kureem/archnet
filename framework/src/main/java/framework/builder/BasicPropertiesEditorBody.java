package framework.builder;

import framework.configs.Parameter;

public class BasicPropertiesEditorBody extends PropertiesEditor {

	public BasicPropertiesEditorBody(String name) {
		super(name);
		
		addProperty(new Parameter("name", "Name", "String"));
		addProperty(new Parameter("class", "Style class", "String"));
		addProperty(new Parameter("style", "Style", "String"));
		addProperty(new Parameter("width", "Width", "String"));
		addProperty(new Parameter("height", "Height", "String"));
		
	}

	
	
}
