package framework.configs;

import java.util.LinkedList;
import java.util.List;

public class Parameter {

	public Parameter() {

	}

	public Parameter(String name, String label, String type) {
		super();
		this.name = name;
		this.label = label;
		this.type = type;
	}

	public String name;

	public String label;

	public String type;

	public List<Option> options = new LinkedList<>();

}
