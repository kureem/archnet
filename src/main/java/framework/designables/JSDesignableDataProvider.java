package framework.designables;

import framework.builder.marshalling.Component;
import framework.design.Designable;
import framework.design.Parameter;
import framework.lightning.DescriptionList;
import jsweet.lang.Array;

public abstract class JSDesignableDataProvider extends DescriptionList implements Designable {
	protected DesignableDelegate delegate = new DesignableDelegate(this);

	public JSDesignableDataProvider(String name) {
		super(name);
	}

	@Override
	public String[] advancedEventTypes() {
		return new String[]{"success", "error","beforeSend"};
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, false);
	}

	@Override
	public Array<Designable> getDesignables() {
		return new Array<Designable>();
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	public abstract void execute();

	@Override
	public abstract Array<Parameter> getParameters();

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
