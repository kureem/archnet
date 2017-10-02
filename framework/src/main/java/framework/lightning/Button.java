package framework.lightning;

import java.util.List;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;

public class Button extends JSContainer implements Designable {

	private final static String[] states = new String[] { "neutral", "brand", "destructive", "success" };
	private final static String[] stateLabels = new String[] { "Neutral", "Brand", "Destructive", "Success" };

	public final static String STATE_NEUTRAL = "neutral";
	public final static String STATE_BRAND = "brand";
	public final static String STATE_DESTRUCTIVE = "destructive";
	public final static String STATE_SUCCESS = "success";

	private Component component = new Component();
	
	// private Icon i con;

	public Button() {
		this("Button");
	}

	public Button(String name) {
		super(name, "button");
		addClass("slds-button");
	}

	public Button addIcon(Icon icon) {
		addClass("slds-button_icon");
		addChild(icon);
		return this;
	}

	public Button setLabel(String label) {
		setHtml(label);
		return this;
	}

	public Button setState(String state) {
		for (String s : states) {
			removeClass("slds-button_" + s);
		}
		addClass("slds-button_" + state);
		return this;
	}

	public Button setInverse(boolean b) {
		if (b) {
			addClass("slds-button_inverse");
		} else {
			removeClass("slds-button_inverse");
		}
		return this;
	}

	public Button setDisabled(boolean b) {
		if (b) {
			addClass("slds-button_disabled");
		} else {
			removeClass("slds-button_disabled");
		}
		return this;
	}

	public Button setStateful(boolean b) {
		if (b) {
			addClass("slds-button_stateful");
		} else {
			removeClass("slds-button_stateful");
		}
		return this;
	}

	public void setParameter(String key, String value) {
		component.parameters.$set(key, value);
		if (key.equals("state")) {
			setState(value);
		} else if (key.equals("stateful")) {
			setStateful(Boolean.parseBoolean(value));
		} else if (key.equals("disabled")) {
			setDisabled(Boolean.parseBoolean(value));
		} else if (key.equals("inverse")) {
			setInverse(Boolean.parseBoolean(value));
		} else if (key.equals("label")) {
			setLabel(value);
		} else {
			throw new RuntimeException("Unknow parameter key:" + value + " Class: framework.lightning.Button");
		}
	}

	public List<Parameter> getParameters() {
		List<Parameter> result = super.getParameters();
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
		return component;
	}
}
