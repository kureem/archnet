package framework.builder.libraries;

import framework.builder.BuilderEventListener;
import framework.builder.marshalling.BuilderEvent;
import framework.builder.marshalling.Component;
import framework.builder.marshalling.ComponentFactory;
import framework.design.Designable;
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

	public abstract Designable createInstance(boolean designMode);

	protected void configureStyles(Designable instance, Component component) {
		String[] keys = Object.keys(component.styles);
		for (String key : keys) {
			String value = component.styles.$get(key).toString();
			instance.setStyle(key, value);
		}
	}

	protected void configureParameters(Designable instance, Component component, boolean designMode) {
		String[] keys = Object.keys(component.parameters);
		for (String key : keys) {
			if(component.parameters.$get(key) != null){
				String value = component.parameters.$get(key).toString();
				instance.applyParam(key, value);
			}
		}
	}

	protected void configureEvents(Designable instance, Component component) {
		for (BuilderEvent event : component.events) {
			//alert("evnt found");
			BuilderEventListener listener = new BuilderEventListener(event.source,event.name,event.type);
			instance.addEventListener(listener, event.type);
		}
	}

	@Override
	public Designable build(Component component, boolean designMode) {
		Designable thIns = createInstance(designMode);
		thIns.setAttribute("identifier", impl);
		configureStyles(thIns, component);
		configureParameters( thIns, component, designMode);
		configureEvents(thIns, component);
		decorateForDesignMode(thIns, designMode);
		thIns.getComponent().custom = component.custom;
		return thIns;
	}

	protected void decorateForDesignMode(Designable instance, boolean designMode) {

		//decorateDroppable(instance, designMode);
		decorateCallSelector(instance, designMode);
	}

	/*protected void decorateDroppable(Designable instance, boolean designMode) {
		DesignableDelegate.setDroppableOptions(instance, designMode);
	}*/
	
	
	protected void decorateCallSelector(Designable container, boolean designMode){
		if(designMode){
			
		}
	}

}
