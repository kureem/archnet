package framework.design;

import framework.builder.properties.AttributeEditor;
import framework.builder.properties.AttributeWithOptionsEditor;
import framework.builder.properties.PropertyEditor;

public class AttributeParameter extends Parameter {

	public AttributeParameter(String name, String label, String category) {
		super(name, label, "String", category);
	}

	@Override
	public PropertyEditor getEditor(Designable designable) {
		
		if(options.size() == 0){
			AttributeEditor editor = new AttributeEditor();
			editor.setProperty(designable,this);
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
