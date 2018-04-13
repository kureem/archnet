package framework.design;

import framework.builder.properties.PropertyEditor;
import framework.builder.properties.StyleEditor;

public class StyleParameter extends Parameter{

	public StyleParameter(String name, String label, String category) {
		super(name, label, "String", "Basic");
	}

	@Override
	public PropertyEditor getEditor(Designable designable) {
		StyleEditor editor =new StyleEditor();
		editor.setProperty(designable,this);
		return editor;
	}

	@Override
	public String extractValue(Designable designable) {
		return designable.getStyle(name);
	}

}
