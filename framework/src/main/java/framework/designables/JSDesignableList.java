package framework.designables;

import java.util.LinkedList;
import java.util.List;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.design.TagParameter;

public class JSDesignableList extends JSContainer implements Designable{

	
	private List<Designable> designables = new LinkedList<>();
	
	private DesignableDelegate delegate = new DesignableDelegate(this);
	public JSDesignableList(String name) {
		super(name, "ul");
		// TODO Auto-generated constructor stub
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
	public List<Designable> getDesignables() {
		return designables;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public List<Parameter> getParameters() {
		List<Parameter> parameters = delegate.getParameters();
		
		TagParameter tagParam = new TagParameter();
		tagParam.options.add(new Option("Un-Ordered(ul)", "ul"));
		tagParam.options.add(new Option("Ordered(ol)", "ol"));
		parameters.add(tagParam);
		
		
		AttributeParameter decoracteClass = new AttributeParameter("decorate-class", "Decorate class", "Basic");
		parameters.add(decoracteClass);
		
		AttributeParameter decoracteStyle = new AttributeParameter("decorate-style", "Decorate style", "Basic");
		parameters.add(decoracteStyle);
		
		return parameters;
	}

	@Override
	public void addDesignable(Designable designable) {
		JSContainer li = new JSContainer("li");
		addChild(li);
		li.addChild((JSContainer)designable);
		designables.add(designable);
		designable.applyParam("name", "item_"+(getChildren().size()-1));
		decorate();
	}

	@Override
	public void removeDesignable(Designable designable) {
		getChildren().remove(designable.getParent());
		designables.remove(designable);
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		delegate.moveDesignable((JSContainer)designable.getParent(), steps);
	}
}
