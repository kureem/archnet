package framework.design;

import framework.builder.properties.AttributeEditor;
import framework.builder.properties.PropertyEditor;

public class AttributeParameter extends Parameter {

	public AttributeParameter(String name, String label, String category) {
		super(name, label, "String", category);
	}

	@Override
	public PropertyEditor getEditor(Designable designable) {
		
		AttributeEditor editor = new AttributeEditor();
		editor.setProperty(this);
		editor.setDesignable(designable);
		
		return editor;
	}
	

}
