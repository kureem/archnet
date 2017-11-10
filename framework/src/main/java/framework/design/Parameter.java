package framework.design;

import java.util.LinkedList;
import java.util.List;

import framework.builder.properties.PropertyEditor;

public abstract class Parameter {

	public String name;

	public String label;

	public String type;

	public List<Option> options = new LinkedList<>();
	
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
