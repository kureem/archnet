package framework.builder;

import framework.design.Designable;
import framework.design.Parameter;

public class EventsEditor extends PropertiesEditor{

	public EventsEditor() {
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
