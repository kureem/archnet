package framework.builder.editors;

import static def.dom.Globals.document;

import framework.JSContainer;
import framework.JSOption;
import framework.JSSelect;
import framework.design.Designable;
import framework.lightning.Grid;

public class EventEditor extends JSContainer{

	JSSelect component = new JSSelect("components");
	JSSelect events = new JSSelect("events");
	
	private Designable root;
	
	private JavascriptEditor editor =new JavascriptEditor("sd");
	
	public EventEditor(String name, Designable root) {
		super(name,"div");
		
		Grid grid = new Grid("", "div");
		addChild(grid);
		//grid.setAlignSpread(true);
		
		JSContainer colLeft = new JSContainer("div");
		JSContainer colRight = new JSContainer("div");
		grid.addChild(colLeft.addClass("slds-col"));
		grid.addChild(colRight.addClass("slds-col"));
		this.root = root;
		
		for(String s : EventTypes.events)
			events.addOption(new JSOption(s, s));
		
		colLeft.addChild(component.setStyle("width", "100%"));
		colRight.addChild(events.setStyle("width", "100%"));
		
		addChild(editor);
		
	}
	
	
	public void addComponentOption(Designable designable){
		component.addOption(new JSOption(designable.getName(), designable.getName()));
		for(Designable des : designable.getDesignables()){
			addComponentOption(des);
		}
	}
	
	public void setDesignable(Designable designable){
		
		component.getChildren().clear(); 
		component.setRendered(false);
		addComponentOption(root);
		component.setValue(designable.getName());
	}

}
