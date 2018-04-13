package framework.lightning.designables;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.lightning.TabBody;
import jsweet.lang.Array;

public class JSDesignableTabBody extends TabBody implements Designable{
	
	private DesignableDelegate delegate = new DesignableDelegate(this);

	public JSDesignableTabBody(String name) {
		super(name);
		
		setAttribute("identifier", "lgt:tab-body");
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
	}

	@Override
	public Array<Designable> getDesignables() {
		
		Array children = getChildren();
		return children;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		return delegate.getParameters();
	}

	@Override
	public void addDesignable(Designable designable) {
		addChild((JSContainer)designable);
	}

	@Override
	public void removeDesignable(Designable designable) {
		removeChild(designable);
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		designable.moveDesignable(designable, steps);
	}

}
