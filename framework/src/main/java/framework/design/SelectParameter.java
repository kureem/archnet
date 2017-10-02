package framework.design;

import framework.builder.properties.PropertyEditor;

public class SelectParameter extends Parameter{

	public SelectParameter(String name, String label,  String category) {
		super(name, label, "select", category);
	}

	@Override
	public PropertyEditor getEditor(Designable designable) {
		// TODO Auto-generated method stub
		return null;
	}

}
