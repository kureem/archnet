package framework.design;

import framework.builder.properties.ExtendedPropertyEditor;
import framework.builder.properties.ExtendedPropertyEditorPrompt;

public abstract class ExtAttributeParameter extends Parameter{

	public ExtAttributeParameter(String name, String label, String category) {
		super(name, label, "String", category);
		// TODO Auto-generated constructor stub
	}

	@Override
	public String extractValue(Designable designable) {
		return designable.getAttribute(name);
	}

	public abstract ExtendedPropertyEditorPrompt getPrompt(Designable designable);
	
	
	@Override
	public  ExtendedPropertyEditor getEditor(Designable designable){
		ExtendedPropertyEditor editor = new ExtendedPropertyEditor(name, getPrompt(designable));
		editor.setProperty(designable, this);
		return editor;
	}

}
