package framework.builder.marshalling;

import static jsweet.dom.Globals.console;

import framework.EventListener;
import framework.builder.BuilderEventListener;
import framework.builder.SelectComponentEvent;
import framework.builder.Selector;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.core.BeanFactory;
import framework.design.Designable;
import framework.design.Parameter;
import framework.design.Preparable;
import framework.designables.DesignableDelegate;
import jsweet.lang.Array;
import jsweet.lang.JSON;
import jsweet.lang.Object;

public class MarshallUtil {

	@SuppressWarnings("unchecked")
	public static Component extract(Designable designable) {
		Component c = new Component();
		c.impl = designable.getAttribute("identifier");
		Array<Parameter> parameters = designable.getParameters();

		for (String s : designable.getStyleNames()) {
			c.styles.$set(s, designable.getStyle(s));
		}

		for (Parameter p : parameters) {
			c.parameters.$set(p.name, p.extractValue(designable));
		}

		for (String key : Object.keys(designable.getListeners())) {
			for (EventListener l : (Array<EventListener>) designable.getListeners().$get(key)) {
				if (l instanceof BuilderEventListener) {
					BuilderEventListener bel = (BuilderEventListener) l;
					BuilderEvent be = new BuilderEvent();
					be.source = bel.getSource();
					be.type = key;
					be.name = designable.getName();
					c.events.push(be);
				}
			}
		}

		for (Designable child : designable.getDesignables()) {
			Component childC = extract(child);
			c.children.push(childC);
		}

		if (designable.getComponent() != null)
			c.custom = designable.getComponent().custom;

		c.data = (Object) designable.getData();
		// designable.setData(data);
		return c;
	}

	public static Designable toDesignable(Component component,boolean design, Selector selector) {
		Designable des = BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class)
				.getComponentFactory(component.impl).build(component, false);
		des.setData(component.data);
		des.getComponent().custom = component.custom;
		
		if(design){
			des.addEventListener(new SelectComponentEvent(selector), "click");
		}
		if (component.children != null && component.children.length > 0) {
			if(des instanceof Preparable){
				((Preparable)des).prepare();
			}
			for (Component c : component.children) {
				Designable child = toDesignable(c,design,selector);
				des.addDesignable(child);
				String exp = child.getAttribute("exposeAs");
				if(exp != null && exp.length() > 0){
					new DesignableDelegate(child).exposeVariable(exp);
				}
				
			}
		}

		return des;

	}

	public static void generateController(Component component) {
		String s = "";
		controller(component, s);
		console.log(s);
	}

	public static void controller(Component component, String start) {

		Designable des = BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class)
				.getComponentFactory(component.impl).build(component, false);
		des.setData(component.data);
		for (BuilderEvent event : component.events) {

			start = start + "\n" + des.getName() + ":function(source,event){\n" + event.source + "\n}";
		}
		if (component.children != null) {
			for (Component c : component.children) {
				controller(c, start);
				// des.addDesignable(child);
			}
		}

	}

	public static Designable build(String s) {
		return toDesignable(toComponent(s),false,null);
	}

	public static Component toComponent(String s) {
		jsweet.lang.Object c = (jsweet.lang.Object) JSON.parse(s);
		return toComponent(c);
	}

	@SuppressWarnings("unchecked")
	public static Component toComponent(Object o) {
		Component cc = new Component();
		if(o.$get("impl") == null){
			o.$set("impl", "html:div");
		}
		cc.impl = o.$get("impl").toString();
		cc.styles = (Object) o.$get("styles");
		cc.parameters = (Object) o.$get("parameters");
		cc.data = (Object) o.$get("data");
		Array<Object> events = (Array<Object>) o.$get("events");
		if (events != null && events.length > 0) {
			Array<BuilderEvent> bevents = new Array<BuilderEvent>();
			for (Object e : events) {
				BuilderEvent event = new BuilderEvent();
				event.source = e.$get("source").toString();
				event.type = e.$get("type").toString();
				event.name = e.$get("name").toString();
				bevents.push(event);
			}
			cc.events = bevents;
		}
		Array<Component> bchildren = new Array<Component>();
		Array<Object> children = (Array<Object>) o.$get("children");
		if (children != null && children.length > 0) {
			for (Object c : children) {
				bchildren.push(toComponent(c));
			}
			cc.children = bchildren;
		}
		cc.custom = (Object) o.$get("custom");
		return cc;
	}

}
