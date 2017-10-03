package framework.builder.properties;

import framework.Renderable;
import framework.design.Designable;
import framework.design.Parameter;

public interface PropertyEditor extends Renderable{
	
	
	public void setProperty(Designable designable, Parameter parameter);
	
	

}
