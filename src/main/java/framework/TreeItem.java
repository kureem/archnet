/*
 * Copyright 2002-2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package framework;

import framework.lightning.IconButton;
import framework.lightning.SvgIcon;
import jsweet.dom.Event;
import jsweet.lang.Array;

public class TreeItem extends JSContainer implements EventListener{

	private JSContainer button = new JSContainer("button").addClass("slds-button slds-button_icon slds-button_icon slds-m-right_x-small");
	
	
	private String iconRight = "<svg class=\"slds-button__icon slds-button__icon_small\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/webjars/salesforce-lightning-design-system/2.5.2/icons/utility-sprite/svg/symbols.svg#chevronright\"></use></svg>";
	
	private String iconDown = "<svg class=\"slds-button__icon slds-button__icon_small\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/webjars/salesforce-lightning-design-system/2.5.2/icons/utility-sprite/svg/symbols.svg#chevrondown\"></use></svg>";
	
	
	private JSContainer title = new JSContainer("span").addClass("slds-truncate");
	
	private boolean open = false;
	
	private Array<IconButton> buttons = new Array<>();
	
	private JSContainer buttonsCtn = new JSContainer("div").addClass("buttons-ctn slds-col_bump-left");
	
	private IconButton leftIcon = new IconButton("leftIcon");
	
	public TreeItem(String name, String title) {
		super(name, "div");
		addClass("slds-tree__item");
		addChild(button);
		button.setHtml(iconRight);
		//IconButton minimize = new IconButton(name);
		addChild(leftIcon.addClass("left-icon"));
		leftIcon.setStyle("margin-right", "0.25rem");
		addChild(this.title.setHtml(title));
		button.addEventListener(this, "click");
		addChild(buttonsCtn);
		setLeftIcon("file", "utility");
		setAttribute("title", title);
	}
	
	
	public TreeItem setLeftIcon(String name, String type){
		leftIcon.setIcon(new SvgIcon(name, type, name));
		return this;
	}
	
	public TreeItem setLeftIcon(String name){
		leftIcon.setIcon(new framework.lightning.ImageIcon(name, "https://d13yacurqjgara.cloudfront.net/users/82092/screenshots/1073359/spinner.gif"));
		return this;
	}
	
	public void addIcon(String name, String type, EventListener listener){
		IconButton minimize = new IconButton(name);
		minimize.setIcon(new SvgIcon(name, type, name));
		buttonsCtn.addChild(minimize);
		minimize.addEventListener(listener, "click");
		
		//minimize.setStyle("position", "relative");
		//minimize.setStyle("top", "-27px");
		//minimize.setStyle("right", (buttons.size()*16 + 3) + "px");
		
		buttons.push(minimize);
	}
	
	public JSContainer getButton(){
		return button;
	}
	
	public void open(){
		open = true;
		button.setHtml(iconDown);
		if(getParent().getChildren().length >1){
			getParent().getChildren().$get(1).setStyle("display", "block");
		}
		
	}

	public void close(){
		open = false;
		button.setHtml(iconRight);
		if(getParent().getChildren().length >1){
			getParent().getChildren().$get(1).setStyle("display", "none");
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
