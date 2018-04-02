package framework.designables;

import framework.DndAble;
import framework.MouseEventAble;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.lightning.Button;
import jsweet.lang.Array;

public class JSDesignableButton extends Button implements Designable ,  MouseEventAble,DndAble{
	
	
	private final static String[] stateLabels = new String[] { "Neutral", "Brand", "Destructive", "Success", "Reset" };


	private DesignableDelegate delegate = new DesignableDelegate(this);
	public JSDesignableButton(String name) {
		super(name);
		applyParam("state", STATE_NEUTRAL);
		applyParam("showIcon", "false");
		applyParam("label", "Button");
		applyParam("position", "left");
		applyParam("iconName", "user");
		applyParam("iconType", "utility");
		
	}
	
	
	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		setAttribute(key, value);
		if(key.equalsIgnoreCase("label")){
			setLabel(value);
		}else if(key.equalsIgnoreCase("statefull")){
			setStateful("true".equals(value));
		}else if(key.equalsIgnoreCase("ldisabled")){
			setDisabled("true".equals(value));
		}else if(key.equalsIgnoreCase("inverse")){
			setInverse("true".equals(value));
		}else if(key.equalsIgnoreCase("state")){
			setState(value);
		}else if(key.equalsIgnoreCase("showIcon")){
			//setDisabled("true".equals(value));
			setShowIcon("true".equals(value));
		}else if(key.equalsIgnoreCase("iconName")){
			setIconName(value);
		}else if(key.equalsIgnoreCase("iconType")){
			setType(value);
		}else if(key.equalsIgnoreCase("iconPosition")){
			setIconPosition(value);
		}
	}
	@Override
	public Array<Designable> getDesignables() {
		return new Array<>();
	}
	
	public Array<Parameter> getParameters() {
		Array<Parameter> result = delegate.getParameters();
		result.push(createParameter("label", "Label", "String"));
		result.push(createParameter("statefull", "Statefull", "Boolean"));
		result.push(createParameter("ldisabled", "Disabled", "Boolean"));
		result.push(createParameter("inverse", "Inverse", "Boolean"));
		Parameter paramstates = createParameter("state", "State", "select");
		for (int i = 0; i < stateLabels.length; i++) {
			Option opt = new Option();
			opt.text = stateLabels[i];
			opt.value = states[i];
			paramstates.options.push(opt);
		}
		
		AttributeParameter showIcon = new AttributeParameter("showIcon", "Show Icon", "Advanced");
		showIcon.options.push(new Option("",""));
		
		AttributeParameter iconType = new AttributeParameter("iconType", "Icon Type", "Advanced");
		AttributeParameter iconName = new AttributeParameter("iconName", "Icon Name", "Advanced");
		AttributeParameter iconPosition = new AttributeParameter("iconPosition", "Icon Position", "Advanced");
		iconPosition.options.push(new Option("Left", "left"));
		iconPosition.options.push(new Option("Right", "right"));
		
		result.push(paramstates, showIcon, iconType,iconName,iconPosition);

		return result;

	}

	private Parameter createParameter(String name, String label, String type) {
		AttributeParameter p = new AttributeParameter(name,label,"Basic");
		p.name = name;
		p.type = type;
		p.label = label;
		if(type.equalsIgnoreCase("boolean")){
			p.options.push(new Option("", ""));
		}
		return p;
	}
	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}
	@Override
	public void addDesignable(Designable designable) {
		
		throw new jsweet.lang.Error("Cannot add children to this component");
		
	}
	@Override
	public void removeDesignable(Designable designable) {
		
		delegate.removeDesignable(designable);
		
	}


	@Override
	public void moveDesignable(Designable designable, int steps) {
		delegate.moveDesignable(designable, steps);
	}

	

}
