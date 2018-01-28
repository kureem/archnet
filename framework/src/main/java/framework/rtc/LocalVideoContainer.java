package framework.rtc;

import def.jqueryui.jqueryui.DraggableOptions;
import framework.JSContainer;
import framework.JSHTMLFragment;
import framework.interactions.Draggable;
import framework.interactions.DraggableRenderer;
import jsweet.dom.HTMLInputElement;

public class LocalVideoContainer extends JSHTMLFragment implements Draggable{

	private JSContainer video= new JSContainer("video","video");
	
	private JSContainer volume = new JSContainer("volume","meter");
	
	
	private JSContainer jsTitle = new JSContainer("title", "h2").addClass("slds-trucate");
	public LocalVideoContainer(String name) {
		super(name,"#videocontainer");
		addChild(jsTitle.setHtml("Myself"));
		addClass("video-container");
		addClass("slds-docked-composer slds-grid slds-grid_vertical slds-is-open");
		addChild(video);
		addChild(volume.setAttribute("min", "-40").setAttribute("max", "-20").setAttribute("low", "-40").setAttribute("high", "-25"));
		addRenderer(new DraggableRenderer());
		
	}
	
	public void setVolume(int volume){
		if (volume < -45)
			volume = -45; // -45 to -20 is
		if (volume > -20)
			volume = -20; // a good range
		
		((HTMLInputElement)this.volume.getNative()).value = volume + "";
		
	}
	
	public void setTitle(String title){
		jsTitle.setHtml(title);
	}

	public JSContainer getVideo(){
		return video;
	}
	
	public JSContainer getVolume() {
		return volume;
	}

	@Override
	public DraggableOptions getDraggableOptions() {
		DraggableOptions o = new DraggableOptions() {
		};
		
		o.handle = "#" + getId() + " header";
		return o;
	}
	
	


	
	

}
