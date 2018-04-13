package framework.lightning.designables;

import framework.builder.marshalling.Component;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.lightning.Tabs;
import jsweet.lang.Array;

public class JSDesignableTabs extends Tabs implements Designable{
	
	private DesignableDelegate delegate = new DesignableDelegate(this);
	

	public JSDesignableTabs(String name) {
		super(name);
		setAttribute("identifier", "lgt:tabs");
	}

	@Override
	public void applyParam(String key, String value) {
		
		delegate.applyParameter(key, value, true);
		
	}

	@Override
	public Array<Designable> getDesignables() {
		Array result = getItems();
		return result;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		return delegate.getParameters();
	}

	@Override
	public void addDesignable(Designable designable) {
		if(designable instanceof JSDesignableTabItem){
			addItem((JSDesignableTabItem)designable);
		}else{
			throw new jsweet.lang.Error("Can only add components of Tab Item in this Component");
		}
		
	}
	
	public void replaceBodyItem(JSDesignableTabBody oldBody, JSDesignableTabBody newBody){
		body.removeChild(oldBody);
		body.addChild(newBody);
		setRendered(false);
	}

	@Override
	public void removeDesignable(Designable designable) {
		JSDesignableTabItem item = (JSDesignableTabItem)designable;
		nav.removeChild(designable);
		body.removeChild(item.body);
		
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		
	}

}
