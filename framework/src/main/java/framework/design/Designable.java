package framework.design;

import java.util.List;

import framework.Renderable;
import framework.builder.marshalling.Component;

public interface Designable extends Renderable {

	public void setParameter(String key, String value, boolean designMode);
	
	public List<Designable> getDesignables();
	
	public Component getComponent();
	
	public List<Parameter> getParameters();
	
	public void addDesignable(Designable designable);
	
}
