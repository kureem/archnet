package framework.builder.marshalling;

import framework.JSContainer;

public interface ComponentFactory {

	public boolean supports(String impl);
	
	public JSContainer build(Component component, boolean designMode);
	
	
}
