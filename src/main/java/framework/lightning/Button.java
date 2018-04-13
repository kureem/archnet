package framework.lightning;

public class Button extends SvgIcon {

	protected final static String[] states = new String[] { "neutral", "brand", "destructive", "success" ,"reset"};

	public final static String STATE_NEUTRAL = "neutral";
	public final static String STATE_BRAND = "brand";
	public final static String STATE_DESTRUCTIVE = "destructive";
	public final static String STATE_SUCCESS = "success";
	public final static String STATE_RESET = "reset";

	//private Component component = new Component();
	
	// private Icon i con;

	public Button() {
		this("Button");
	}

	public Button(String name) {
		super(name);
		setTag("button");
		addClass("slds-button");
		setAttribute("state", "neutral");
		setState(STATE_NEUTRAL);
		setShowIcon(false);
		setSvgClass("slds-button__icon slds-button__icon_left");
	}

	

	public Button setLabel(String label) {
		setText(label);
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

	

	
}
