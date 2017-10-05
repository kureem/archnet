package framework.designables;

import java.util.LinkedList;
import java.util.List;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.EventScriptParameter;
import framework.design.EventTypeParameter;
import framework.design.NameParameter;
import framework.design.Option;
import framework.design.Parameter;
import framework.design.StyleParameter;

public class JSDesignable extends JSContainer implements Designable{

	protected Component component = new Component();
	
	public JSDesignable(String name, String tag) {
		super(name, tag);
	}

	
	@Override
	public void setParameter(String key, String value, boolean designMode) {
		component.parameters.$set(key, value);
	}

	@Override
	public Component getComponent() {
		return component;
	}

	@Override
	public List<Parameter> getParameters() {
		List<Parameter> params = new LinkedList<>();
		params.add(new NameParameter("Name","Basic"));
		params.add(new AttributeParameter("class", "Style class", "Basic"));
		//params.add(new Parameter("style", "Style", "String", "Basic"));
		params.add(new StyleParameter("width", "Width", "Basic"));
		params.add(new StyleParameter("height", "Height",  "Basic"));
		EventTypeParameter eventTypes = new EventTypeParameter("eventType", "Event",  "event");
		eventTypes.options.add(new Option("Click", "click"));
		eventTypes.options.add(new Option("Double click", "dblclick"));
		params.add(eventTypes);
		EventScriptParameter script = new EventScriptParameter("script", "Script", "event");
		params.add(script);
		return params;
	}


	@Override
	public List<Designable> getDesignables() {
		List<Designable> result = new LinkedList<>();
		for(JSContainer child : getChildren()){
			result.add((Designable)child);
		}
		
		return result;
	}


	@Override
	public void addDesignable(Designable designable) {
		addChild((JSContainer) designable);
		
	}

}
