package framework.lightning;

import def.dom.Option;
import framework.JSContainer;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.marshalling.Component;
import framework.core.BeanFactory;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.designables.JSDesignableImage;
import jsweet.lang.Array;

public class Avatar extends JSContainer implements Designable{

	
	private JSDesignableImage image;// = new JSDesignableImage("img");
	
	public final static String SMALL= "slds-avatar_small";
	
	public final static String X_SMALL= "slds-avatar_x-small";
	
	public final static String MEDIUM= "slds-avatar_medium";
	
	public final static String LARGE= "slds-avatar_large";
	
	
	private DesignableDelegate delegate = new DesignableDelegate(this);
	
	
	public Avatar(String name) {
		super(name,"span");
		addClass("slds-avatar");
		image = (JSDesignableImage)BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class).getComponentFactory("html:img").build(new Component(), false);
		addChild(image);
	}
	
	public JSContainer getImage(){
		return image;
	}

	public Avatar setSize(String size){
		removeClass(LARGE).removeClass(MEDIUM).removeClass(SMALL).removeClass(X_SMALL);
		addClass(size);
		return this;
	}
	
	public Avatar setCircle(boolean b){
		if(b){
			addClass("slds-avatar_circle");
		}else{
			removeClass("slds-avatar_circle");
		}
		return this;
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		if(key.equals("circle")){
			setCircle("true".equals(value));
		}else if(key.equals("size")){
			setSize(value);
		}
		
	}

	@Override
	public Array<Designable> getDesignables() {
		
		return new Array<>(image);
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = delegate.getParameters();
		
		AttributeParameter circle = new AttributeParameter("circle", "Make Circle", "Basic");
		parameters.push(circle);
		
		
		AttributeParameter size = new AttributeParameter("size", "Size", "Basic");
		size.options.push(new framework.design.Option("Normal", "Normal"));
		size.options.push(new framework.design.Option("Large", LARGE));
		size.options.push(new framework.design.Option("Medium", Avatar.MEDIUM));
		size.options.push(new framework.design.Option("Small", Avatar.SMALL));
		size.options.push(new framework.design.Option("X Small", Avatar.X_SMALL));
		
		parameters.push(size);
		return parameters;
	//	return null;
	}

	@Override
	public void addDesignable(Designable designable) {
		
	}

	@Override
	public void removeDesignable(Designable designable) {
		
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		
	}
}
