package framework.builder;

import framework.EventListener;
import framework.JSContainer;
import framework.lightning.Grid;
import framework.lightning.Modal;
import framework.lightning.Section;
import jsweet.dom.Event;

public class WelcomeScreen extends Modal{

	private Section section = new Section("section", "All Options");
	
	private Grid options = new Grid("options", "ul");
	
	private WelcomeScreenItem newItem = new WelcomeScreenItem("new", "NEW", "Create a new application", "Start with a blank project or one via a wizard", 1);
	
	private WelcomeScreenItem openComputerItem = new WelcomeScreenItem("openComputer", "OPN", "Open a project from computer", "Browse your computer to select an application", 2);
	
	private WelcomeScreenItem openUrlItem = new WelcomeScreenItem("openUrl", "URL", "Open project from url", "Specify an URL of a project to fetch", 3);
	
	private WelcomeScreenItem openLibrary = new WelcomeScreenItem("openLibrary", "LIB", "Open project from library", "Project stored on server", 4);
	
	//private Builder builder;
	
	public WelcomeScreen(String name, Builder builder) {
		super(name, "div");
		//this.builder = builder;
		addClass("welcome-screen");
		setStyle("width", "50%");
		addClass("slds-fade-in-open slds-modal_large slds-app-launcher slds-align_absolute-center");
		section.addClass("slds-open");
		getBody().addChild(section);
		section.getContent().addChild(options);
		options.setWrap(true);
		
		WelcomeScreenItem[] items = new WelcomeScreenItem[]{newItem,openComputerItem,openUrlItem,openLibrary};
		for(WelcomeScreenItem item : items){
			JSContainer li = new JSContainer("li");
			options.addChild(li.addClass("slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-1"));
			li.addChild(item);
		}
		
		newItem.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				close();
				builder.openNewModal();
			}
		}, "click");
		
		
		openLibrary.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				close();
				builder.openOpenProjectModal();
			}
		}, "click");
		
	}
	
	

}
