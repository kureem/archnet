package framework.builder.editors;

import framework.JSContainer;
import framework.builder.data.File;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.marshalling.BuilderEvent;
import framework.builder.marshalling.Component;
import framework.core.BeanFactory;
import framework.design.Designable;
import jsweet.lang.Array;
import jsweet.lang.JSON;
import jsweet.lang.Object;

public class Preview extends JSContainer {

	

	private Designable root;

	public Preview(File file) {
		super("visualEditor", "div");
		addClass("visual-editor");
		consume(unmarshall(file));
	}

	


	
	public Component unmarshall(File f) {

		jsweet.lang.Object c = (jsweet.lang.Object) JSON.parse(f.getData());

		Component cc = doUnMarsh(c);
		return cc;
	}

	public Component doUnMarsh(Object o) {
		Component cc = new Component();
		cc.impl = o.$get("impl").toString();
		cc.styles = (Object) o.$get("styles");
		cc.parameters = (Object) o.$get("parameters");
		Array<Object> events = (Array<Object>) o.$get("events");
		if (events != null && events.length > 0) {
			Array<BuilderEvent> bevents = new Array<BuilderEvent>();
			for (Object e : events) {
				BuilderEvent event = new BuilderEvent();
				event.source = e.$get("source").toString();
				event.type = e.$get("type").toString();
				bevents.push(event);
			}
			cc.events = bevents;
		}
		Array<Component> bchildren = new Array<Component>();
		Array<Object> children = (Array<Object>) o.$get("children");
		if (children != null && children.length > 0) {
			for (Object c : children) {
				bchildren.push(doUnMarsh(c));
			}
			cc.children = bchildren;
		}
		return cc;
	}

	public Designable cona(Component component) {
		Designable des = BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class)
				.getComponentFactory(component.impl).build(component, false);
		if (component.children != null) {
			for (Component c : component.children) {
				Designable child = cona(c);
				des.addDesignable(child);
			}
		}

		return des;
	}

	public void consume(Component component) {
		root = cona(component); // BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class).getComponentFactory(component.impl).build(component,
								// true);
		addChild((JSContainer) root);

	}
	 
	
}
