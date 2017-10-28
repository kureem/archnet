package framework.lightning;

import java.util.ArrayList;
import java.util.List;

import framework.EventListener;
import framework.JSContainer;
import jsweet.dom.Event;

public class TabItem extends JSContainer implements EventListener{
	
	private List<TabActionListener> listeners = new ArrayList<>();
	
	public TabBody body;
	private JSContainer title = new JSContainer("a").addClass("slds-tabs_default__link").setAttribute("href", "javascript:void(0)").setAttribute("role", "tab");
	
	private Icon closeButton = new Icon("close", "utility", "close");
	public TabItem(String name, TabBody body) {
		super(name, "li");
		this.body = body;
		body.setAttribute("aria-labelledby", getId());
		addChild(title);
		title.setAttribute("aria-controls", body.getId());
		addClass("slds-tabs_default__item");
		addChild(closeButton);
		closeButton.setSvgClass("slds-button__icon");
		closeButton.addClass("tab-close-button");
		closeButton.addEventListener(this, "click");
		title.addEventListener(this, "click");
		setActive(false);
		setClosable(false);
	}
	
	
	public TabItem setClosable(boolean b){
		closeButton.setVisible(b);
		return this;
	}
	
	public void addTabActionListener(TabActionListener listene){
		listeners.add(listene);
	}
	
	public TabItem close(){
		fireClose();
		active = false;
		body.getParent().getChildren().remove(body);
		body.show(false);
		//body.setVisible(false);
		this.getParent().getChildren().remove(this);
		this.getParent().setRendered(false);
		body.getParent().setRendered(false);
		
		return this;
	}
	
	private boolean active = false;
	
	public boolean isActive(){
		return active;
	}
	
	public void fireClose(){
		for(TabActionListener li : listeners){
			li.onClose(this);
		}
	}
	
	public void fireActivate(){
		for(TabActionListener li : listeners){
			li.onActivate(this);
		}
	}
	
	public void fireDeActivate(){
		for(TabActionListener li : listeners){
			li.onDeactivate(this);
		}
	}
	
	public TabItem setActive(boolean b){
		active = b;
		
		if(b){
			addClass("slds-active");
			title.setAttribute("aria-selected", "true");
			fireActivate();
			
		}else{
			removeClass("slds-active");
			title.setAttribute("aria-selected", "false");
			fireDeActivate();
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
		if(source.equals(closeButton)){
			
			close();
			return;
		}
		Tabs tabs = source.getAncestorWithClass("slds-tabs_default");
		tabs.setActive(this);
		// TODO Auto-generated method stub
		
	}
	
}

