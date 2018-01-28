package framework.lightning;

import framework.JSContainer;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.marshalling.Component;
import framework.core.BeanFactory;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import jsweet.lang.Array;

public class Panel extends Grid implements Designable {

	// private FormLayout layout = new FormLayout("layout", "div");

	private DesignableDelegate delegate = new DesignableDelegate(this);

	public Panel(String name) {
		super(name, "div");
		setNoWrap(true).setVertical(true);
		addClass("slds-panel");
	}

	public Panel addSection(PanelSection section) {
		addChild(section);
		return this;
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);

	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
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
		if (designable instanceof PanelSection) {
			addChild((JSContainer) designable);
		} else {
			PanelSection section = (PanelSection)BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class).getComponentFactory("lgt:panel-section").build(new Component(), false);
			addChild(section);
			section.addChild((JSContainer) designable);
		}
	}

	@Override
	public void removeDesignable(Designable designable) {
		removeChild(designable);

	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		delegate.moveDesignable(designable, steps);
	}

}
