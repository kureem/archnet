package framework.builder.properties;

import framework.design.Designable;
import framework.design.Parameter;

public class BasicPropertiesEditor extends BasePropertiesEditor {

	public BasicPropertiesEditor(String name) {
		super(name);
		
		/*addProperty(new Parameter("name", "Name", "String"));
		addProperty(new Parameter("class", "Style class", "String"));
		addProperty(new Parameter("style", "Style", "String"));
		addProperty(new Parameter("width", "Width", "String"));
		addProperty(new Parameter("height", "Height", "String"));*/
		
	}
	
	@Override
	public void setComponent(Designable designable){
		super.setComponent(designable);
		clear();
		for(Parameter param : designable.getParameters()){
			if(param.category.equals("Basic")){
				addProperty(param);
			}
		}
	}

	
	
}
