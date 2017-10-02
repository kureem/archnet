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
		editor.setProperty(this);
		editor.setDesignable(designable);
		return editor;
		
	}

}
