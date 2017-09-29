package framework.builder;

import framework.JSContainer;
import framework.builder.model.BuilderEvent;
import framework.builder.model.Component;
import framework.builder.model.ComponentFactory;
import framework.configs.Designable;
import jsweet.lang.Object;

public abstract class AbstractComponentFactory implements ComponentFactory {

	private String impl;

	public AbstractComponentFactory(String impl) {
		super();
		this.impl = impl;
	}

	@Override
	public boolean supports(String impl) {
		return impl.equals(this.impl);
	}

	public abstract JSContainer createInstance();

	protected void configureStyles(JSContainer instance, Component component) {
		String[] keys = Object.keys(component.styles);
		for (String key : keys) {
			String value = (String) component.styles.$get(key);
			instance.setStyle(key, value);
		}
	}

	protected void configureParameters(Designable instance, Component component) {
		String[] keys = Object.keys(component.parameters);
		for (String key : keys) {
			String value = (String) component.parameters.$get(key);
			instance.setParameter(key, value);
		}
	}

	protected void configureEvents(JSContainer instance, Component component) {
		for (BuilderEvent event : component.events) {
			BuilderEventListener listener = new BuilderEventListener(event.source);
			instance.addEventListener(listener, event.type);
		}
	}

	
	
	@Override
	public JSContainer build(Component component) {
		JSContainer instance = createInstance();
		configureStyles(instance, component);
		configureParameters((Designable)instance, component);
		configureEvents(instance, component);
		return instance;
	}

}
