package framework.builder.libraries;
import static jsweet.dom.Globals.window;
import def.dom.Event;
import def.jqueryui.jqueryui.DroppableEvent;
import def.jqueryui.jqueryui.DroppableEventUIParam;
import def.jqueryui.jqueryui.DroppableOptions;
import framework.JSContainer;
import framework.builder.BuilderEventListener;
import framework.builder.marshalling.BuilderEvent;
import framework.builder.marshalling.Component;
import framework.builder.marshalling.ComponentFactory;
import framework.core.BeanFactory;
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

	public abstract JSContainer createInstance(boolean designMode);

	protected void configureStyles(JSContainer instance, Component component) {
		String[] keys = Object.keys(component.styles);
		for (String key : keys) {
			String value = (String) component.styles.$get(key);
			instance.setStyle(key, value);
		}
	}

	protected void configureParameters(Designable instance, Component component, boolean designMode) {
		String[] keys = Object.keys(component.parameters);
		for (String key : keys) {
			String value = (String) component.parameters.$get(key);
			instance.setParameter(key, value, designMode);
		}
	}

	protected void configureEvents(JSContainer instance, Component component) {
		for (BuilderEvent event : component.events) {
			BuilderEventListener listener = new BuilderEventListener(event.source);
			instance.addEventListener(listener, event.type);
		}
	}

	@Override
	public JSContainer build(Component component, boolean designMode) {
		JSContainer instance = createInstance(designMode);
		configureStyles(instance, component);
		configureParameters((Designable) instance, component, designMode);
		configureEvents(instance, component);
		decorateForDesignMode(instance, designMode);
		return instance;
	}
	
	protected void decorateForDesignMode(JSContainer instance, boolean designMode){
		if (designMode) {
			
			instance.addClass("desiging");
			DroppableOptions options = new DroppableOptions() {
			};
			options.greedy = true;
			options.accept = ".designer-component";
			options.tolerance = "pointer";
			
			options.drop= new DroppableEvent() {
				
				@Override
				public void $apply(Event event, DroppableEventUIParam param) {
					//alert(event.srcElement.id);
					//window.alert(event.srcElement.getAttribute("identifier"));
					
					String identifier = event.srcElement.getAttribute("identifier");
					ComponentFactory factory = BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class).getComponentFactory(identifier);
					JSContainer container = factory.build(new Component(), true);
					instance.addChild(container);
					container.render();
					
				}
			};
			instance.setDroppableOptions(options);
		}
	}
	
	

}
