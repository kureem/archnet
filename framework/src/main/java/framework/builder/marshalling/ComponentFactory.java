package framework.builder.marshalling;

import framework.design.Designable;

public interface ComponentFactory {

	public boolean supports(String impl);
	
	public Designable build(Component component, boolean designMode);
	
	
}
