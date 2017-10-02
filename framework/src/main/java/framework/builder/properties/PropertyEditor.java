package framework.builder.properties;

import framework.Renderable;
import framework.design.Designable;
import framework.design.Parameter;

public interface PropertyEditor extends Renderable{
	
	public void setDesignable(Designable designable);
	
	public void setProperty(Parameter parameter);
	
	

}
