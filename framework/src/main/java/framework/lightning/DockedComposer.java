package framework.lightning;

import def.jqueryui.jqueryui.DraggableOptions;
import framework.JSContainer;
import framework.interactions.Draggable;

public class DockedComposer extends Grid implements Draggable{

	
	private Grid header = (Grid)new Grid("header","div").addClass("slds-docked-composer__header slds-shrink-none").setAttribute("aria-live", "assertive");
	
	private Media headerTitle = new Media("headerTitle");
	
	private JSContainer headerIconContainer = new JSContainer("div").addClass("slds-icon_container");
	
	
	private Icon headerIcon = new Icon("headerIcon").setSize(Icon.EXTRA_SMALL).setTextType(Icon.TEXT_DEFAULT);
	
	private Text title = new Text("title", "h2").setTruncate(true);
	
	private JSContainer tools= new JSContainer("div").addClass("slds-col_bump-left slds-shrink-none");
	
	
	private IconButton minimize = new IconButton("minimize");
	
	private IconButton expand = new IconButton("expand");
	
	private IconButton close = new IconButton("close");
	
	private JSContainer body = new JSContainer("div").addClass("slds-docked-composer__body");
	
	private JSContainer footer = new JSContainer("footer").addClass("slds-docked-composer__footer slds-shrink-none");
	
	public DockedComposer(String name) {
		super(name, "section");
		setVertical(true);
		setAttribute("role", "dialog");
		setOpen(true);
		addChild(header);
		header.addChild(headerTitle);
		headerTitle.getFigureContainer().addClass("slds-m-right_x-small");
		headerTitle.setCentered(true);
		headerTitle.getFigureContainer().addChild(headerIconContainer);
		headerIconContainer.addChild(headerIcon);
		headerTitle.getBodyContainer().addChild(title);
		header.addChild(tools);
		tools.addChild(minimize).addChild(expand).addChild(close);
		
		addChild(body);
		addChild(footer);
		addClass("slds-docked-composer");
		
	}
	
	
	public DockedComposer setOpen(boolean b){
		toggleClass("slds-is-open", b);
		toggleClass("slds-is-closed", !b);
		return this;
	}

	public DockedComposer setClosed(boolean b){
		toggleClass("slds-is-closed", b);
		toggleClass("slds-is-open", !b);
		return this;
	}

	public Icon getHeaderIcon() {
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
