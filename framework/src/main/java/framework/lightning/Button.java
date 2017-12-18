package framework.lightning;

import framework.JSContainer;
import framework.builder.marshalling.Component;

public class Button extends JSContainer {

	protected final static String[] states = new String[] { "neutral", "brand", "destructive", "success" };

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

	public Button addIcon(SvgIcon icon) {
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

	
}
