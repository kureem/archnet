package framework.lightning;

import static jsweet.lang.Globals.parseInt;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import jsweet.lang.Array;

public class Col extends LTContainer implements Designable{
	
	private DesignableDelegate delegate = new DesignableDelegate(this);

	public Col(String name) {
		super(name, "div");
		addClass("slds-col");
		setAttribute("sections", "12");
		setAttribute("span", "3");
		refreshCls();
	}
	
	public void setSections(String sections){
		setAttribute("sections", sections );
		refreshCls();
	}
	
	public void setSpan(String span){
		setAttribute("span", span);
		refreshCls();
	}
	
	public double getSpan(){
		return parseInt(getAttribute("span"));
	}
	
	public double getSections(){
		return parseInt(getAttribute("sections"));
	}
	public void refreshCls(){
		String[] cls = getAttribute("class").split(" ");
		String ncls = "";
		for(String cl : cls){
			if(cl.startsWith("slds-size_")){
				
			}else{
				ncls = ncls +  " " + cl; 
			}
		}
		setAttribute("class", ncls);
		addClass("slds-size_" + getAttribute("span") + "-of-" + getAttribute("sections"));
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		if(key.equals("sections")){
			setSections(value);
		}else if(key.equals("span")){
			setSpan(value);
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public Array<Designable> getDesignables() {
		@SuppressWarnings("rawtypes")
		Array res = getChildren();
		return res;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> pa = delegate.getParameters();
		AttributeParameter sections = new AttributeParameter("sections", "Grid Size", "Basic");
		sections.options.push(new Option("12","12"));
		sections.options.push(new Option("6","6"));
		sections.options.push(new Option("4","4"));
		sections.options.push(new Option("3","3"));
		sections.options.push(new Option("2","2"));
		sections.options.push(new Option("1","1"));
		
		
		
		AttributeParameter span = new AttributeParameter("span", "Col Span", "Basic");
		pa.push(sections,span);
		return pa;
	}

	@Override
	public void addDesignable(Designable designable) {
		addChild((JSContainer)designable);
	}

	@Override
	public void removeDesignable(Designable designable) {
		removeChild(designable);
		
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		
	}
	

}
