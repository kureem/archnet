package framework.builder.editors;

import java.util.List;

import framework.EventListener;
import framework.JSContainer;
import framework.JSOption;
import framework.JSSelect;
import framework.builder.BuilderEventListener;
import framework.builder.data.File;
import framework.builder.marshalling.BuilderEvent;
import framework.design.Designable;
import framework.lightning.Grid;

public class EventEditor extends AbstractEditor<BuilderEvent> {

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
		component.addOption(new JSOption(designable.getName(), designable.getId()));
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


	private Designable findDesignableById(Designable parent, String id){
		if(parent.getId().equals(id)){
			return parent;
		}
		
		for(Designable des : parent.getDesignables()){
			Designable res = findDesignableById(des, id);
			if(res != null){
				return res;
			}
		}
		
		return null;
	}
	@Override
	public void save() {
		String componentId = component.getValue();
		String type = events.getValue();
		String src = editor.getEditor().getValue();
		Designable des = findDesignableById(root, componentId);
		if(des != null){
			List<EventListener> listeners = des.getListeners().get(type);
			for(EventListener l : listeners){
				if(l instanceof BuilderEventListener){
					BuilderEventListener evt = (BuilderEventListener)l;
					evt.setSource(src);
					return;
					
				}
			}
			
			BuilderEventListener l = new BuilderEventListener(src);
			des.addEventListener(l, type);
		}
		
		
		// TODO Auto-generated method stub
		
	}




	@Override
	public String getMarshall() {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public BuilderEvent createNew(File f) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public BuilderEvent unmarshall(File f) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public void consume(BuilderEvent data) {
		// TODO Auto-generated method stub
		
	}

}
