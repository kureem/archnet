package framework.lightning;

import def.jqueryui.jqueryui.DraggableOptions;
import framework.EventListener;
import framework.JSContainer;
import framework.interactions.Draggable;
import framework.interactions.DraggableRenderer;
import jsweet.dom.Event;

public class DockedComposer extends Grid implements Draggable{

	
	private Grid header = (Grid)new Grid("header","div").addClass("slds-docked-composer__header slds-shrink-none").setAttribute("aria-live", "assertive");
	
	private Media headerTitle = new Media("headerTitle");
	
	private JSContainer headerIconContainer = new JSContainer("div").addClass("slds-icon_container");
	
	private SvgIcon headerIcon = new SvgIcon("headerIcon").setSize(SvgIcon.EXTRA_SMALL).setTextType(SvgIcon.TEXT_DEFAULT);
	
	private Text title = new Text("title", "h2").setTruncate(true);
	
	private JSContainer tools= new JSContainer("div").addClass("slds-col_bump-left slds-shrink-none");
	
	protected IconButton minimize = new IconButton("minimize");
	
	private IconButton expand = new IconButton("expand");
	
	private IconButton close = new IconButton("close");
	
	private JSContainer body = new JSContainer("div").addClass("slds-docked-composer__body");
	
	private JSContainer footer = new JSContainer("footer").addClass("slds-docked-composer__footer slds-shrink-none");
	
	protected boolean closed = false;
	
	public DockedComposer(String name) {
		super(name, "section");
		setVertical(true);
		setAttribute("role", "dialog");
		setOpen(true);
		addChild(header);
		headerIcon.setSvgClass("slds-button__icon");
		header.addChild(headerTitle);
		headerTitle.getFigureContainer().addClass("slds-m-right_x-small");
		headerTitle.setCentered(true);
		headerTitle.getFigureContainer().addChild(headerIconContainer);
		headerIconContainer.addChild(headerIcon);
		headerTitle.getBodyContainer().addChild(title);
		header.addChild(tools);
		tools.addChild(minimize).addChild(expand).addChild(close);
		expand.getIcon().setIconName("expand_alt");
		minimize.getIcon().setIconName("minimize_window");
		close.getIcon().setIconName("close");
		close.setVisible(false);
		expand.setVisible(false);
		//tools.setVisible(false);
		addChild(body);
		addChild(footer);
		addClass("slds-docked-composer");
		addRenderer(new DraggableRenderer());
		
		minimize.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				toggle();
			}
		}, "click");
		
		
	}
	
	
	public DockedComposer toggle(){
		
		if(closed){
			setOpen(true);
		}else{
			setClosed(true);
		}
		
		return this;
	}
	
	public DockedComposer setOpen(boolean b){
		closed = !b;
		toggleClass("slds-is-open", b);
		toggleClass("slds-is-closed", !b);
		if(b){
			body.removeClass("slds-hide");
			//setStyle("height", "300px");
			minimize.getIcon().setIconName("minimize_window");
		}else{
			body.addClass("slds-hide");
			//setStyle("height", "0px");
			minimize.getIcon().setIconName("erect_window");
		}
		return this;
	}

	public DockedComposer setClosed(boolean b){
		closed = b;
		toggleClass("slds-is-closed", b);
		toggleClass("slds-is-open", !b);
		if(!b){
			body.removeClass("slds-hide");
			//setStyle("height", "300px");
			minimize.getIcon().setIconName("minimize_window");
		}else{
			body.addClass("slds-hide");
			//setStyle("height", "0px");
			minimize.getIcon().setIconName("erect_window");
		}
		return this;
	}

	public SvgIcon getHeaderIcon() {
		return headerIcon;
	}


	public Text getTitle() {
		return title;
	}


	public JSContainer getTools() {
		return tools;
	}


	public IconButton getExpandButton() {
		return expand;
	}


	public IconButton getCloseButton() {
		return close;
	}


	public JSContainer getBody() {
		return body;
	}


	public JSContainer getFooter() {
		return footer;
	}
	
	
	public DockedComposer setFocus(boolean b){
		toggleClass("slds-has-focus", b);
		return this;
	}
	
	
	public DockedComposer setFormBody(boolean b){
		if(b){
			body.addClass("slds-docked-composer__body_form");
		}else{
			body.removeClass("slds-docked-composer__body_form");
		}
		return this;
	}
	
	public DockedComposer setBodyEmailComposer(boolean b){
		if(b){
			body.addClass("slds-docked-composer__body_form");
		}else{
			body.removeClass("slds-docked-composer__body_form");
		}
		return this;
	}
	
	public DockedComposer setOverflow(boolean b){
		toggleClass("slds-docked-composer_overflow", b);
		return this;
	}


	@Override
	public DraggableOptions getDraggableOptions() {
		DraggableOptions o = new DraggableOptions() {
		};
		o.handle = "#" + header.getId();
		return o;
	}
	

}
