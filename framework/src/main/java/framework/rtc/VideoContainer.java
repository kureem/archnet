package framework.rtc;

import static def.jquery.Globals.$;

import def.jqueryui.jqueryui.DraggableOptions;
import framework.EventListener;
import framework.JSContainer;
import framework.JSHTMLFragment;
import framework.interactions.Draggable;
import framework.interactions.DraggableRenderer;
import framework.lightning.IconButton;
import framework.lightning.SvgIcon;
import jsweet.dom.Event;
import jsweet.dom.HTMLInputElement;
import jsweet.dom.HTMLVideoElement;
 
public class VideoContainer extends JSHTMLFragment implements Draggable {

	private HTMLVideoElement video;// = new JSContainer("video","video");

	private JSContainer volume = new JSContainer("volume", "meter");

	private JSContainer jsTitle = new JSContainer("title", "h2").addClass("slds-trucate");
	
	private IconButton minimize = new IconButton("minimize");
	private IconButton expand = new IconButton("expand");
	private IconButton close = new IconButton("close");

	public VideoContainer(String name) {
		super(name, "#videocontainer");
		addChild(jsTitle.setHtml("Myself"));
		addChild(minimize);
		addChild(expand);
		addChild(close);
		minimize.setIcon(new SvgIcon("", "utility", "minimize_window"));
		close.setIcon(new SvgIcon("", "utility", "close"));
		expand.setIcon(new SvgIcon("", "utility", "expand_alt"));
		expand.setVisible(false);
		
		minimize.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				close();
				expand.setVisible(true);
				minimize.setVisible(false);
			}
		}, "click");
		
		expand.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				open();
				expand.setVisible(false);
				minimize.setVisible(true);
			}
		}, "click");
		
		close.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				// TODO Auto-generated method stub
				
			}
		}, "click");
		addClass("video-container");
		addClass("slds-docked-composer slds-grid slds-grid_vertical slds-is-closed");
		// addChild(video);
		addChild(volume.setAttribute("min", "-40").setAttribute("max", "-20").setAttribute("low", "-40")
				.setAttribute("high", "-25"));
		addRenderer(new DraggableRenderer());

	}

	public void close() {
		removeClass("slds-is-open");
		addClass("slds-is-closed");
	}

	public void open() {
		addClass("slds-is-open");
		removeClass("slds-is-closed");
	}

	public void setTitle(String title) {
		jsTitle.setHtml(title);
	}

	public void setVolume(int volume) {
		if (volume < -45)
			volume = -45; // -45 to -20 is
		if (volume > -20)
			volume = -20; // a good range
		
		((HTMLInputElement)this.volume.getNative()).value = volume + "";
		
		//el.value = volume;
	}

	public void setVideo(HTMLVideoElement video) {
		if (this.video != null) {
			$(getNative()).find("video").replaceWith(video);
		} else {
			$(getNative()).find("*[name=video]").replaceWith(video);
		}

		this.video = video;

		open();
	}

	public JSContainer getVolume() {
		return volume;
	}

	@Override
	public DraggableOptions getDraggableOptions() {
		DraggableOptions o = new DraggableOptions() {
		};

		o.handle = "#" + getId() + " header";
		return null;
	}

}
