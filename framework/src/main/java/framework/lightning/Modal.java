package framework.lightning;

import framework.EventListener;
import framework.JSContainer;
import framework.designables.JSDesignable;
import jsweet.dom.Event;

public class Modal extends JSContainer {

	private JSContainer modalContainer = new JSContainer("div").addClass("slds-modal__container");

	private JSContainer header = new JSContainer("header").addClass("slds-modal__header");
	
	private JSContainer content = new JSDesignable("content","div").addClass("slds-modal__content");

	private JSContainer footer = new JSDesignable("footer","footer").addClass("slds-modal__footer");
	
	private IconButton closeButton = new IconButton("closeButton");
	
	private JSContainer title = new JSContainer("h2").addClass("slds-text-heading_medium slds-hyphenate");
	
	private Backdrop backdrop = null;
	
	public Modal(String name, String stitle) {
		super(name, "div");
		addClass("slds-modal");
		setAttribute("role", "dialog").setAttribute("tabindex", "-1").setAttribute("aria-modal", "true");
		addChild(modalContainer);
		modalContainer.addChild(header);
		modalContainer.addChild(content);
		modalContainer.addChild(footer);
		closeButton.addClass("slds-modal__close");
		closeButton.setInverse(true);
		closeButton.getIcon().setIconName("close");
		header.addChild(closeButton);
		header.addChild(title);
		title.setHtml(stitle);
		
		closeButton.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				close();
			}
		}, "click");
		close();

	}
	
	
	
	public Backdrop getBackdrop(){
		return backdrop;
	}
	public void setBackdrop(Backdrop backdrop){
		this.backdrop = backdrop;
	}
	
	public void open(){
		addClass("slds-fade-in-open");
		if(backdrop != null){
			backdrop.open();
		}
		setVisible(true);
	}
	
	public void close(){
		removeClass("slds-fade-in-open");
		if(backdrop != null){
			backdrop.close();
		}
		setVisible(false);
	}
	
	public final static String SIZE_LARGE = "slds-modal_large";
	public final static String SIZE_MEDIUM = "slds-modal_medium";
	public final static String SIZE_NORMAL = "slds-modal_normal";
	
	public Modal setSize(String size){
		removeClass(SIZE_LARGE).removeClass(SIZE_MEDIUM);
		addClass(size);
		
		
		return this;
	}
	
	public Modal setTitle(String stitle){
		title.setHtml(stitle);
		return this;
	}
	
	public JSContainer getTitle(){
		return title;
	}

	public JSContainer getModalContainer() {
		return modalContainer;
	}

	public JSContainer getHeader() {
		return header;
	}

	public JSContainer getContent() {
		return content;
	}
	
	
	public Modal setBody(JSContainer body){
		content.clearChildren();
		content.setRendered(false);
		content.addChild(body);
		return this;
	}

	public JSContainer getFooter() {
		return footer;
	}

	public IconButton getCloseButton() {
		return closeButton;
	}
	
	

}
