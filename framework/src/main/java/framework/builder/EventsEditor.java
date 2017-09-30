package framework.builder;

import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;

public class EventsEditor extends PropertiesEditor{

	public EventsEditor() {
		super("events");
		setStacked(true);
	
		/*Parameter eventTypes = new Parameter("eventType", "Event", "select");
		eventTypes.options.add(new Option("Click","click"));
		eventTypes.options.add(new Option("Double click","dblclick"));
		addProperty(eventTypes);

		Parameter script = new Parameter("script","Script", "textarea");
		addProperty(script);
*/		
		
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
