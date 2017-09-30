package framework.builder.libraries;

import java.util.HashMap;
import java.util.Map;

import framework.builder.marshalling.ComponentFactory;

public class BasicComponentFactoryRegistry implements ComponentFactoryRegistry{
	
	private Map<String, ComponentFactory> factories = new HashMap<>();

	@Override
	public void registerComponentFactory(String identifier, ComponentFactory factory) {
		if(!factories.containsKey(identifier)){
			factories.put(identifier, factory);
		}else{
			throw new RuntimeException("duplicate component factory:->" + identifier);
		}
	}

	@Override
	public ComponentFactory getComponentFactory(String identifier) {
		
		if(factories.containsKey(identifier)){
			return factories.get(identifier);
		}else{
			throw new RuntimeException("Missing ComponentFactory with identifier:" + identifier);
		}
	}

}
