package framework.lightning;

import framework.design.Designable;
import framework.designables.JSDesignableBlockComponent;
import jsweet.dom.Event;
import jsweet.dom.HTMLElement;
import jsweet.lang.Object;

public class LightningApplication extends JSDesignableBlockComponent {
	
	public Object scope = new Object();

	public LightningApplication(String name, String tag) {
		super(name, tag);
	}

	@Override
	public String[] advancedEventTypes() {
		return new String[]{"ready"};
	}

	@Override
	public void postRender(HTMLElement root) {
		super.postRender(root);
		if(!isRendered())
			fireListener("ready", new Event("ready"));
	}
	
	
	public void exposeAsVariable(String variableName,Designable item){
		scope.$set(variableName, item);
	}
	
	

}
	