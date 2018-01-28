package framework.designables;

import static def.dom.Globals.window;
import static jsweet.lang.Globals.encodeURI;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.lang.Array;

public class JSDesignableImage extends JSContainer implements Designable {

	private DesignableDelegate delegate = new DesignableDelegate(this);

	public JSDesignableImage(String name) {
		super(name, "img");

	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = delegate.getParameters();
		parameters.push(new AttributeParameter("src", "Source", "Basic"));

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

}
