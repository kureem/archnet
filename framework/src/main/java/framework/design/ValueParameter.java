package framework.design;

import framework.InputField;
import framework.builder.properties.PropertyEditor;
import framework.builder.properties.ValuePropertyEditor;

public class ValueParameter extends Parameter{

	public ValueParameter(String name, String label, String category) {
		super(name, label, "String", category);
	}

	@Override
	public PropertyEditor getEditor(Designable designable) {
		
		ValuePropertyEditor editor = new ValuePropertyEditor("s");
		editor.setProperty(designable, this);
		return editor;
	}

	@Override
	public String extractValue(Designable designable) {
		Object s=  ((InputField)designable).getValue();
		if(s != null){
			return s.toString();
		}else{
			return null;
		}
	}

	
	
}
