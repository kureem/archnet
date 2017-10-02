package framework.builder.properties;

import framework.design.Designable;
import framework.design.Parameter;

public class EventsPropertiesEditor extends BasePropertiesEditor{

	public EventsPropertiesEditor() {
		super("events");
		setStacked(true);		
	}
	
	@Override
	public void setComponent(Designable designable){
		super.setComponent(designable);
		clear();
		for(Parameter param : designable.getParameters()){
			if(param.category.equals("event")){
				addProperty(param);
			}
		}
	}

}
