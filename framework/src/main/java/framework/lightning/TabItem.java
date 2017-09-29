package framework.lightning;

import framework.EventListener;
import framework.JSContainer;
import jsweet.dom.Event;

public class TabItem extends JSContainer implements EventListener{
	
	public TabBody body;
	private JSContainer title = new JSContainer("a").addClass("slds-tabs_default__link").setAttribute("href", "javascript:void(0)").setAttribute("role", "tab");
	public TabItem(String name, TabBody body) {
		super(name, "li");
		this.body = body;
		body.setAttribute("aria-labelledby", getId());
		addChild(title);
		title.setAttribute("aria-controls", body.getId());
		addClass("slds-tabs_default__item");
		
		title.addEventListener(this, "click");
		setActive(false);
	}
	
	public TabItem setActive(boolean b){
		if(b){
			addClass("slds-active");
			title.setAttribute("aria-selected", "true");
		}else{
			removeClass("slds-active");
			title.setAttribute("aria-selected", "false");
		}
		body.show(b);
		return this;
	}
	
	public TabItem setTitle(String title){
		setAttribute("title", title);
		this.title.setHtml(title);
		return this;
		//<a class="slds-tabs_default__link" href="javascript:void(0);" role="tab" tabindex="0" aria-selected="true" aria-controls="tab-default-1" >
		
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		Tabs tabs = source.getAncestorWithClass("slds-tabs_default");
		tabs.setActive(this);
		// TODO Auto-generated method stub
		
	}
	
}

