package framework.builder.model;

import framework.JSContainer;

public interface ComponentFactory {

	public boolean supports(String impl);
	
	public JSContainer build(Component component);
	
}
