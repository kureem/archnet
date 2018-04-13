package framework.lightning;

public class CheckBoxButton extends CheckBox{

	public CheckBoxButton(String name) {
		super(name);
		removeClass("slds-checkbox");
		addClass("slds-checkbox_add-button");
	}

}
