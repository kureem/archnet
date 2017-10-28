package framework.builder.libraries;

import framework.builder.BuilderEventListener;
import framework.builder.SelectComponentEvent;
import framework.builder.Selector;
import framework.builder.marshalling.BuilderEvent;
import framework.builder.marshalling.Component;
import framework.builder.marshalling.ComponentFactory;
import framework.core.BeanFactory;
import framework.design.Designable;
import framework.designables.DesignableDelegate;
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
			String value = component.parameters.$get(key).toString();
			instance.applyParam(key, value);
		}
	}

	protected void configureEvents(Designable instance, Component component) {
		for (BuilderEvent event : component.events) {
			BuilderEventListener listener = new BuilderEventListener(event.source);
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
		return thIns;
	}

	protected void decorateForDesignMode(Designable instance, boolean designMode) {

		decorateDroppable(instance, designMode);
		decorateCallSelector(instance, designMode);
	}

	protected void decorateDroppable(Designable instance, boolean designMode) {
		DesignableDelegate.setDroppableOptions(instance, designMode);
		/*if (designMode) {
 
			instance.addClass("designing");
			DroppableOptions options = new DroppableOptions() {
			};
			options.greedy = false;
			options.accept = ".designer-component";
			options.tolerance = "pointer";

			options.drop = new DroppableEvent() {

				@Override
				public void $apply(Event event, DroppableEventUIParam param) {

					String identifier = event.srcElement.getAttribute("identifier");
					ComponentFactory factory = BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class)
							.getComponentFactory(identifier);
					Designable container = factory.build(new Component(), true);
					try{
					instance.addDesignable(container);
					}catch(Exception e){
						alert(e.getMessage());
					}
					container.render();
					
					BeanFactory.getInstance().getBeanOfType(Structure.class).reload();
					BeanFactory.getInstance().getBeanOfType(Structure.class).render();
					//container.getRoot().get

				}
			};
			((JSContainer)instance).setDroppableOptions(options);*/
		//}
	}
	
	
	protected void decorateCallSelector(Designable container, boolean designMode){
		if(designMode){
			container.addEventListener(new SelectComponentEvent(BeanFactory.getInstance().getBeanOfType(Selector.class)), "click");
		}
	}

}
