package framework.lightning;

import framework.EventListener;
import framework.JSContainer;
import framework.lightning.designables.JSDesignableModal;
import jsweet.dom.Event;

public class Prompt extends JSDesignableModal{

	public Prompt(String name, String title) {
		super(name);
		setTitle(title);
		
		
	}
	
	public Prompt clearButtons(){
		getFooter().clearChildren();
		return this;
	}
	public Prompt addCancelButton(String label){
		getFooter().addChild(new Button("cancel").setLabel(label).addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				// TODO Auto-generated method stub
				close();
				fireListener("cancel", evt);
			}
		}, "close"));
		
		return this;
	}
	public Prompt addButton(String name, String label){
		getFooter().addChild(new Button(name).setLabel(label).addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				fireListener(name, evt);
			}
		}, "click"));
		return this;
	}
	
	public Button getButton(String name){
		return (Button)getChild(name);
	}

}
