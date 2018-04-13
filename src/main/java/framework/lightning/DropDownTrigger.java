package framework.lightning;

import framework.EventListener;
import framework.JSContainer;
import jsweet.dom.Event;

public class DropDownTrigger extends JSContainer{

	private boolean open = false;
	public DropDownTrigger(String name, JSContainer button, DropDown dropdown) {
		super(name,"div");
		addClass("slds-dropdown-trigger");
		addClass("slds-dropdown-trigger_click");
		addChild(button.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				if(!open){
					addClass("slds-is-open");
					open = true;
				}else{
					removeClass("slds-is-open");
					open = false;
				}
			}
		}, "click"));
		addChild(dropdown);
	}

}
