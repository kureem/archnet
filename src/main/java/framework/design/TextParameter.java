package framework.design;

import framework.builder.properties.PropertyEditor;
import framework.builder.properties.TextEditor;

public class TextParameter extends Parameter{

	public TextParameter(String name, String label, String category) {
		super(name, label, "string", category);
	}

	@Override
	public PropertyEditor getEditor(Designable designable) {
		TextEditor editor = new TextEditor("text");
		editor.setProperty(designable,this);
		return editor;
	}

	@Override
	public String extractValue(Designable designable) {
		return designable.getHtml();
	}

}
