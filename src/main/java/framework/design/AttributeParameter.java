package framework.design;

import framework.builder.properties.AttributeEditor;
import framework.builder.properties.AttributeWithOptionsEditor;
import framework.builder.properties.PropertyEditor;
import framework.builder.properties.SingleOptionAttributeEditor;

public class AttributeParameter extends Parameter {

	public AttributeParameter(String name, String label, String category) {
		super(name, label, "String", category);
	}

	@Override
	public PropertyEditor getEditor(Designable designable) {
		
		if(options.length == 0){
			AttributeEditor editor = new AttributeEditor();
			editor.setProperty(designable,this);
			return editor;
		}else if(options.length == 1){
			SingleOptionAttributeEditor editor = new SingleOptionAttributeEditor();
			editor.setProperty(designable, this);
			return editor;
		}else{
			AttributeWithOptionsEditor editor = new AttributeWithOptionsEditor();
			editor.setProperty(designable,this);
			return editor;
		}
	}

	@Override
	public String extractValue(Designable designable) {
		return designable.getAttribute(name);
	}
	

}
