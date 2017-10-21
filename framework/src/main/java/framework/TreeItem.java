package framework;

import jsweet.dom.Event;

public class TreeItem extends JSContainer implements EventListener{

	private JSContainer button = new JSContainer("button").addClass("slds-button slds-button_icon slds-button_icon slds-m-right_x-small");
	
	
	private String iconRight = "<svg class=\"slds-button__icon slds-button__icon_small\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/webjars/salesforce-lightning-design-system/2.4.1/assets/icons/utility-sprite/svg/symbols.svg#chevronright\"></use></svg>";
	
	private String iconDown = "<svg class=\"slds-button__icon slds-button__icon_small\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/webjars/salesforce-lightning-design-system/2.4.1/assets/icons/utility-sprite/svg/symbols.svg#chevrondown\"></use></svg>";
	
	
	private JSContainer title = new JSContainer("span").addClass("slds-truncate");
	
	private boolean open = false;
	
	public TreeItem(String name, String title) {
		super(name, "div");
		addClass("slds-tree__item");
		addChild(button);
		button.setHtml(iconRight);
		addChild(this.title.setHtml(title));
		button.addEventListener(this, "click");
		
	}
	
	public JSContainer getButton(){
		return button;
	}
	
	public void open(){
		open = true;
		button.setHtml(iconDown);
		if(getParent().getChildren().size() >1){
			getParent().getChildren().get(1).setStyle("display", "block");
		}
		
	}

	public void close(){
		open = false;
		button.setHtml(iconRight);
		if(getParent().getChildren().size() >1){
			getParent().getChildren().get(1).setStyle("display", "none");
		}
	}
	
	public void select(boolean b){
		if(b){
			addClass("slds-is-selected");
		}else{
			removeClass("slds-is-selected");
		}
	}
	
	public void setFocus(boolean b){
		
		if(b){
			addClass("slds-is-focused");
		}else{
			removeClass("slds-is-focused");
		}
		
	}
	
	public void leaf(boolean b){
		
		if(b){
			button.addClass("slds-is-disabled");
		}else{
			button.removeClass("slds-is-disabled");
		}
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		if(open)
			close();
		else
			open();
		// TODO Auto-generated method stub
		
	}
}
