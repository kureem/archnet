package framework.designables;

import java.util.LinkedList;
import java.util.List;

import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.lightning.Button;

public class JSDesignableButton extends Button implements Designable{
	
	
	private final static String[] stateLabels = new String[] { "Neutral", "Brand", "Destructive", "Success" };


	private DesignableDelegate delegate = new DesignableDelegate(this);
	public JSDesignableButton(String name) {
		super(name);
	}
	@Override
	public void setParameter(String key, String value, boolean designMode) {
		delegate.setParameter(key, value, designMode);
	}
	@Override
	public List<Designable> getDesignables() {
		return new LinkedList<>();
	}
	
	public List<Parameter> getParameters() {
		List<Parameter> result = delegate.getParameters();
		result.add(createParameter("label", "Label", "String"));
		result.add(createParameter("stateful", "Stateful", "Boolean"));
		result.add(createParameter("disabled", "Disabled", "Boolean"));
		result.add(createParameter("inverse", "Inverse", "Boolean"));
		Parameter paramstates = createParameter("state", "State", "select");
		for (int i = 0; i < stateLabels.length; i++) {
			Option opt = new Option();
			opt.text = stateLabels[i];
			opt.value = states[i];
			paramstates.options.add(opt);
		}

		result.add(paramstates);

		return result;

	}

	private Parameter createParameter(String name, String label, String type) {
		Parameter p = new AttributeParameter(name,label,"advanced");
		p.name = name;
		p.type = type;
		p.label = label;
		return p;
	}
	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}
	@Override
	public void addDesignable(Designable designable) {
		
		throw new RuntimeException("Cannot add children to this component");
		// TODO Auto-generated method stub
		
	}

	

}
