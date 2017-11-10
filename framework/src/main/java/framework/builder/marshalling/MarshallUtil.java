package framework.builder.marshalling;

import java.util.List;

import framework.EventListener;
import framework.builder.BuilderEventListener;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.core.BeanFactory;
import framework.design.Designable;
import framework.design.Parameter;
import jsweet.lang.Array;
import jsweet.lang.JSON;
import jsweet.lang.Object;

public class MarshallUtil {
	
	public static Component extract(Designable designable){
		Component c = new Component();
		c.impl = designable.getAttribute("identifier");
		//ComponentFactory factory = BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class).getComponentFactory(c.impl);
		List<Parameter> parameters = designable.getParameters();
		
		
		for(String s : designable.getStyleNames()){
			c.styles.$set(s, designable.getStyle(s));
		}
		
		for(Parameter p : parameters){
			c.parameters.$set(p.name,p.extractValue(designable));
		}
		
		/*for(String s : designable.getAttributeNames()){
			c.parameters.$set(s, designable.getAttribute(s));
		}
		
		c.parameters.$set("text", designable.getHtml());
		c.parameters.$set("tag", designable.getTag());*/
		
		for(String key : designable.getListeners().keySet()){
			for(EventListener l : designable.getListeners().get(key)){
				if(l instanceof BuilderEventListener){
					BuilderEventListener bel = (BuilderEventListener)l;
					BuilderEvent be = new BuilderEvent();
					be.source = bel.getSource();
					be.type = key;
					c.events.push(be);
				}
			}
		}
		
		for(Designable child : designable.getDesignables()){
			Component childC = extract(child);
			c.children.push(childC);
		}
		
		return c;
	}
	
	public static Designable toDesignable(Component component){
		Designable des = BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class)
				.getComponentFactory(component.impl).build(component, false);
		if (component.children != null) {
			for (Component c : component.children) {
				Designable child = toDesignable(c);
				des.addDesignable(child);
			}
		}

		return des;

	}
	
	
	public static Designable build(String s){
		return toDesignable(toComponent(s));
	}
	
	
	public static Component toComponent(String s){
		jsweet.lang.Object c = (jsweet.lang.Object) JSON.parse(s);
		return toComponent(c);
	}
	
	@SuppressWarnings("unchecked")
	public static Component toComponent(Object o){
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
				bchildren.push(toComponent(c));
			}
			cc.children = bchildren;
		}
		return cc;
	}

}
