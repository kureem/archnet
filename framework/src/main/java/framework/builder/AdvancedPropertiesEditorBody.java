package framework.builder;

import framework.design.Designable;
import framework.design.Parameter;

public class AdvancedPropertiesEditorBody extends PropertiesEditor{

	
	
	public AdvancedPropertiesEditorBody() {
		super("advanced");
	}
	
	public void setComponent(Designable designable){
		super.setComponent(designable);
		clear();
		for(Parameter p :  component.getParameters()){
			if(p.category.equals("advanced"))
			addProperty(p);
		}
	}

}
