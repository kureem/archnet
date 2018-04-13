package framework.designables;

import framework.DndAble;
import framework.JSContainer;
import framework.KeyboardEventAble;
import framework.MouseEventAble;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.lang.Array;

public class JSDesignableImage extends JSContainer implements Designable , DndAble, MouseEventAble{

	private DesignableDelegate delegate = new DesignableDelegate(this);

	public JSDesignableImage(String name) {
		super(name, "img");

	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = delegate.getParameters();
		parameters.push(new AttributeParameter("src", "Source", "Basic"));
		parameters.push(new AttributeParameter("alt", "Alt Text", "Basic"));
		parameters.push(new AttributeParameter("height", "Height", "Basic"));
		parameters.push(new AttributeParameter("width", "Width", "Basic"));
		return parameters;
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
	}

	@Override
	public Array<Designable> getDesignables() {
		return new Array<Designable>();
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public void addDesignable(Designable designable) {

	}

	@Override
	public void removeDesignable(Designable designable) {

	}

	@Override
	public void moveDesignable(Designable designable, int steps) {

	}

	@Override
	public String[] advancedEventTypes() {
		return new String[]{"error"};
	}
	
	

}
