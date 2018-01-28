package framework.builder;

import def.js.Array;
import framework.EventListener;
import framework.JSContainer;
import jsweet.dom.Event;

public class FilesList extends JSContainer{
	
	private Array<ItemSelectedListener> itemSelectedListeners = new Array<>();
	
	private ItemSelector selector;
	
	private EventListener click = new EventListener() {
		
		@Override
		public void performAction(JSContainer source, Event evt) {
			evt.stopPropagation();
			select((UIFile)source);
		}
	};

	public FilesList(String name, ItemSelector selector) {
		super(name, "ul");
		this.selector = selector;
		addClass("slds-grid slds-grid_pull-padded slds-wrap");
	}
	
	public FilesList addFile(UIFile file){
		file.addEventListener(click, "click");
		JSContainer li = new JSContainer("li");
		li.addClass("slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3");
		addChild(li);
		li.addChild(file);
		return this;
	}
	
	public void addItemSelectedListener(ItemSelectedListener l){
		itemSelectedListeners.push(l);
	}
	
	public void fireItemSelectedListeners(UIFile file, ItemSelector selector){
		for(ItemSelectedListener l : itemSelectedListeners){
			l.itemSelected(file, selector);
		}
	}
	
	public void select(UIFile file){
		for(JSContainer c : getChildren()){
			if(c.getChildren().$get(0).getName().equals(file.getName())){
				fireItemSelectedListeners(file, selector);
				c.getChildren().$get(0).addClass("selected");
			}else{
				c.getChildren().$get(0).removeClass("selected");
			}
		}
		
	}
	
	

}
