package framework.builder.libraries;

import framework.design.Designable;
import framework.designables.JSDesignable;

public class BasicComponentFactory extends AbstractComponentFactory {

	protected String tag;
	
	

	public BasicComponentFactory(String tag) {
		super("html:" + tag);
		this.tag = tag;
	}

	@Override
	public Designable createInstance(boolean designMode) {
		JSDesignable container = new JSDesignable(tag,tag);
		return container;
	}

}
