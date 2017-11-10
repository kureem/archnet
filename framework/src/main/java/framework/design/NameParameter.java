package framework.design;

import framework.builder.properties.NameEditor;
import framework.builder.properties.PropertyEditor;

public class NameParameter extends Parameter{

	public NameParameter(String label,String category) {
		super("name", label, "String", category);
	}

	@Override
	public PropertyEditor getEditor(Designable designable) {
		NameEditor editor = new NameEditor();
		editor.setProperty(designable,this);
		return editor;
		
	}

	@Override
	public String extractValue(Designable designable) {
		return designable.getName();
	}

}
