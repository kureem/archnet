package framework.builder.marshalling;

import framework.EventListener;
import framework.builder.BuilderEventListener;
import framework.design.Designable;

public class MarshallUtil {
	
	public static Component extract(Designable designable){
		Component c = new Component();
		for(String s : designable.getStyleNames()){
			c.styles.$set(s, designable.getStyle(s));
		}
		
		for(String s : designable.getAttributeNames()){
			c.parameters.$set(s, designable.getAttribute(s));
		}
		
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

}
