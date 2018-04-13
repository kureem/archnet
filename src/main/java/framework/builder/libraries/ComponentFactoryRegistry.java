package framework.builder.libraries;

import framework.builder.marshalling.ComponentFactory;

public interface ComponentFactoryRegistry {

	public void registerComponentFactory(String identifier, ComponentFactory factory);
	
	
	public ComponentFactory getComponentFactory(String identifier);
	
}
