package framework.builder.libraries;

import framework.design.Designable;
import framework.designables.JSDesignable;
import framework.designables.JSDesignableBasicComponent;

public class BasicComponentFactory extends AbstractComponentFactory {

	protected String tag;
	
	

	public BasicComponentFactory(String tag) {
		super("html:" + tag);
		this.tag = tag;
	}

	@Override
	public Designable createInstance(boolean designMode) {
		JSDesignable container = new JSDesignableBasicComponent(tag,tag);
		if(tag.equalsIgnoreCase("button")){
			container.applyParam("label", "Button");
		}
		return container;
	}

}
