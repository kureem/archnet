package framework.design;

import framework.builder.properties.PropertyEditor;
import jsweet.lang.Array;

public abstract class Parameter {

	public String name;

	public String label;

	public String type;

	public Array<Option> options = new Array<>();
	
	public String category;


	public abstract String extractValue(Designable designable);
	
	public Parameter(String name, String label, String type, String category) {
		super();
		this.name = name;
		this.label = label;
		this.type = type;
		this.category = category;
	}

	public abstract PropertyEditor getEditor(Designable designable);
	
}
