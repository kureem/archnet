package framework.builder.libraries;

import framework.JSContainer;

public class BasicComponentFactory extends AbstractComponentFactory {

	protected String tag;
	
	

	public BasicComponentFactory(String tag) {
		super("html:" + tag);
		this.tag = tag;
	}

	@Override
	public JSContainer createInstance(boolean designMode) {
		JSContainer container = new JSContainer(tag);
		return container;
	}

}
