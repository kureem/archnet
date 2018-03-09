package framework.design;

import framework.Renderable;
import framework.builder.marshalling.Component;
import jsweet.lang.Array;
import jsweet.lang.Object;

public interface Designable extends Renderable {

	public void applyParam(String key, String value);

	public Array<Designable> getDesignables();

	public Component getComponent();

	public Array<Parameter> getParameters();

	public void addDesignable(Designable designable);

	public void removeDesignable(Designable designable);

	public void moveDesignable(Designable designable, int steps);
	
	public Object getScope();

}
