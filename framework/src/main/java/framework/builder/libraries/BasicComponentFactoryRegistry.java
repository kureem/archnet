package framework.builder.libraries;

import framework.util.HashMap;
import framework.util.Map;

import framework.builder.marshalling.ComponentFactory;

public class BasicComponentFactoryRegistry implements ComponentFactoryRegistry{
	
	private Map<String, ComponentFactory> factories = new HashMap<>();

	@Override
	public void registerComponentFactory(String identifier, ComponentFactory factory) {
		if(!factories.containsKey(identifier)){
			factories.put(identifier, factory);
		}else{
			throw new java.lang.RuntimeException("duplicate component factory:->" + identifier);
		}
	}

	@Override
	public ComponentFactory getComponentFactory(String identifier) {
		
		if(factories.containsKey(identifier)){
			return factories.get(identifier);
		}else{
			return null;
			//throw new java.lang.RuntimeException("Missing ComponentFactory with identifier:" + identifier);
		}
	}

}
