package framework.configs;

import java.util.List;

import framework.Renderable;
import framework.builder.model.Component;

public interface Designable extends Renderable {

	public void setParameter(String key, String value);
	
	
	public Component getComponent();
	
	public List<Parameter> getParameters();
	
}
