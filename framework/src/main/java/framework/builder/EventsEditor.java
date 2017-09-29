package framework.builder;

import framework.configs.Option;
import framework.configs.Parameter;

public class EventsEditor extends PropertiesEditor{

	public EventsEditor() {
		super("events");
		setStacked(true);
	
		Parameter eventTypes = new Parameter("eventType", "Event", "select");
		eventTypes.options.add(new Option("Click","click"));
		eventTypes.options.add(new Option("Double click","dblclick"));
		addProperty(eventTypes);

		Parameter script = new Parameter("script","Script", "textarea");
		addProperty(script);
		
		
	}

}
