package framework.builder.properties;

import framework.design.Designable;
import framework.design.Parameter;

public class AdvancedPropertiesEditor extends BasePropertiesEditor{

	
	
	public AdvancedPropertiesEditor() {
		super("advanced");
	}
	
	public void setComponent(Designable designable){
		super.setComponent(designable);
		clear();
		for(Parameter p :  component.getParameters()){
			if(p.category.equalsIgnoreCase("advanced"))
			addProperty(p, designable);
		}
	}

}
