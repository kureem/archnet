package framework.design;

import framework.builder.properties.ExtPropertiesEditor;

public interface ExtDesignable extends Designable{
	
	public ExtPropertiesEditor[] getExtEditors(); 

}
