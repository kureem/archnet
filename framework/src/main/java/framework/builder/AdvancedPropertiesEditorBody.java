package framework.builder;

import framework.configs.Designable;
import framework.configs.Parameter;

public class AdvancedPropertiesEditorBody extends PropertiesEditor{

	
	
	public AdvancedPropertiesEditorBody() {
		super("advanced");
	}
	
	public void setComponent(Designable designable){
		super.setComponent(designable);
		clear();
		for(Parameter p :  component.getParameters()){
			addProperty(p);
		}
	}

}
