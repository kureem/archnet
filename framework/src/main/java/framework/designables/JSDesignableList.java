package framework.designables;

import framework.DndAble;
import framework.JSContainer;
import framework.MouseEventAble;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.design.TagParameter;
import jsweet.lang.Array;

public class JSDesignableList extends JSContainer implements Designable,MouseEventAble,DndAble{

	
	private Array<Designable> designables = new Array<>();
	
	private DesignableDelegate delegate = new DesignableDelegate(this);
	public JSDesignableList(String name) {
		super(name, "ul");
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value,true);
		setAttribute(key, value);
		if(key.startsWith("decorate")){
			setAttribute(key, value);
			decorate();
		}
	}
	
	public void decorate(){
		String dec = getAttribute("decorate-class");
		
		if(dec != null){
			for(JSContainer c : getChildren()){
				c.setAttribute("class", dec);
			}
		}
		
		String decStyle = getAttribute("decorate-style");
		if( decStyle != null){
			for(JSContainer c : getChildren()){
				c.setAttribute("style", decStyle);
			}
		}
		
	}
	
	

	@Override
	public Array<Designable> getDesignables() {
		return designables;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = delegate.getParameters();
		
		TagParameter tagParam = new TagParameter();
		tagParam.options.push(new Option("Un-Ordered(ul)", "ul"));
		tagParam.options.push(new Option("Ordered(ol)", "ol"));
		parameters.push(tagParam);
		
		
		AttributeParameter decoracteClass = new AttributeParameter("decorate-class", "Decorate class", "Basic");
		parameters.push(decoracteClass);
		
		AttributeParameter decoracteStyle = new AttributeParameter("decorate-style", "Decorate style", "Basic");
		parameters.push(decoracteStyle);
		
		return parameters;
	}

	@Override
	public void addDesignable(Designable designable) {
		JSContainer li = new JSContainer("li");
		addChild(li);
		li.addChild((JSContainer)designable);
		designables.push(designable);
		designable.applyParam("name", "item_"+(getChildren().length-1));
		decorate();
	}

	@Override
	public void removeDesignable(Designable designable) {
		removeChild(designable.getParent());
		Array<Designable> tmp = new Array<Designable>();
		for(Designable d : designables){
			if(d.equals(designable)){
				
			}else{
				tmp.push(d);
			}
		}
		designables = tmp;
		
			}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		delegate.moveDesignable((JSContainer)designable.getParent(), steps);
	}
}
