package framework.designables;

import framework.JSContainer;
import framework.design.Designable;
import jsweet.dom.CustomEvent;

public class JSDesignableCardLayout extends JSDesignable {

	private String currentActive = "";

	public JSDesignableCardLayout(String name, String tag) {
		super(name, tag);
	}

	public JSDesignableCardLayout addItem(JSDesignableCardLayoutItem item) {
		addChild(item);
		return this;
	}
	

	@Override
	public void addDesignable(Designable designable) {
		if (!(designable instanceof JSDesignableCardLayoutItem)) {
			throw new jsweet.lang.Error("Only component of type Card Layout Item allowed in this container");
		}
		super.addDesignable(designable);
	}

	public void activate(String name) {
		// boolean deact = !currentActive.equals(name);
		if (name.equals(currentActive)) {
			return;
		}
		for (JSContainer child : getChildren()) {
			if (child.getName().equals(name)) {
				CustomEvent evt = new CustomEvent("activate");
				evt.$set("data", child);
				child.fireListener("activate", evt);
				child.setStyle("display", "block");
			} else if (child.getName().equals(currentActive)) {
				CustomEvent evt = new CustomEvent("deactivate");
				evt.$set("data", child);
				child.fireListener("deactivate", evt);
				child.setStyle("display", "none");
			} else {
				child.setStyle("display", "none");
			}
		}
		this.currentActive = name;
	}

}
