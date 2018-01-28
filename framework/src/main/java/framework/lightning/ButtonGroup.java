package framework.lightning;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import jsweet.lang.Array;

public class ButtonGroup extends JSContainer implements Designable {
	
	private DesignableDelegate delegate = new DesignableDelegate(this);

	public ButtonGroup(String name) {
		super(name, "div");
		addClass("slds-button-group");
	}

	public ButtonGroup addButton(Button btn) {
		return addElement(btn, false);
	}

	public ButtonGroup addButton(Button btn, boolean isLast) {
		return addElement(btn, isLast);
	}

	public ButtonGroup addButton(IconButton btn) {
		return addElement(btn, false);
	}

	public ButtonGroup addButton(IconButton btn, boolean isLast) {
		return addElement(btn, isLast);

	}

	protected ButtonGroup addElement(JSContainer c, boolean isLast) {
		if (isLast) {
			c.addClass("slds-button_last");
		} else {
			c.removeClass("slds-button_last");
		}
		addChild(c);
		return this;
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Array<Designable> getDesignables() {
		
		Array result = getChildren();
		return result;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		return delegate.getParameters();
	}

	@Override
	public void addDesignable(Designable designable) {
		if(designable instanceof Button){
			addButton((Button)designable);
		}else if(designable instanceof IconButton){
			addButton((IconButton)designable);
		}
	}

	@Override
	public void removeDesignable(Designable designable) {
		designable.getParent().removeChild(designable);
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		designable.moveDesignable(designable, steps);
	}

}
