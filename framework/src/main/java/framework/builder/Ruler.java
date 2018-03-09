package framework.builder;

import def.jqueryui.jqueryui.DraggableOptions;
import framework.JSContainer;
import framework.interactions.Draggable;
import framework.interactions.DraggableRenderer;

public class Ruler extends JSContainer implements Draggable{

	
	private String unit ="px";
	
	private int accuracy = 8;
	
	private int chunk = 64;
	
	private JSContainer inner = new JSContainer("inner","div");
	
	private boolean vertical = false;
	public Ruler(boolean vertical) {
		super("ruler", "div");
		addClass("ruler");
		addChild(inner);
		inner.addClass("inner-ruler");
		this.vertical = vertical;
		if(vertical){
			addClass("vertical");
		}
		renderRuler();
		addRenderer(new DraggableRenderer());
		
	}
	
	public void renderRuler(){
		int width = 1024;
		if(!vertical)
			inner.setStyle("width", width + unit);
		else
			inner.setStyle("height", width + unit);
		
		
		
		for(int i = 0; i < width; i=i+accuracy){
			JSContainer scal = new JSContainer("div").setStyle("position", "absolute");
			if(!vertical){
				scal.setStyle("width", accuracy + unit);
				scal.setStyle("left", i + unit);
			}else{
				scal.setStyle("top", i + unit);
				scal.setStyle("height", accuracy + unit);
			}
			
			
			inner.addChild(scal);
			if((i % chunk)==0){
				scal.addClass("big-scale").setHtml(i + "");
			}else{
				scal.addClass("small-scale");			
			}
			
		}
	}

	@Override
	public DraggableOptions getDraggableOptions() {
		DraggableOptions opt = new DraggableOptions() {
		};
		
		//opt.containment = "body";
		// TODO Auto-generated method stub
		return opt;
	}
	
	

}
