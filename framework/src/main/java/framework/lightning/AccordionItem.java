package framework.lightning;

import framework.EventListener;
import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.designables.JSDesignable;
import jsweet.dom.CustomEvent;
import jsweet.dom.Event;
import jsweet.lang.Array;

public class AccordionItem extends JSContainer implements Designable {

	private JSContainer accordionContent = (JSDesignable) new JSContainer("accordionContent", "div")
			.addClass("slds-accordion__content");

	private DesignableDelegate delegate = new DesignableDelegate(this);


	private JSContainer accSummary = new JSContainer("div").addClass("slds-accordion__summary");
	
	private JSContainer summaryHeading = new JSContainer("h3").addClass("slds-text-heading_small slds-accordion__summary-heading");
	
	private JSContainer uititle = new JSContainer("title", "span").addClass("slds-truncate").setHtml("Accordion Item");
	
	IconButton btn = new IconButton("summaryAction");
	public AccordionItem(String name, String title) {
		super(name, "section");
		addClass("slds-accordion__section");
		addChild(accSummary);
		accSummary.addChild(summaryHeading);
		
		
		summaryHeading.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				String cls = getAttribute("class");
				if(cls.contains("slds-is-open")){
					close();
				}else{
					open();
				}
			}
		}, "click");
		
		btn.setAttribute("class", "slds-button slds-button_reset slds-accordion__summary-action");
		summaryHeading.addChild(btn);
		btn.addChild(uititle.setHtml(title));
		btn.getIcon().setSvgClass("slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left");
		btn.getIcon().setIconName("switch");
		btn.getIcon().setType("utility");
		
		IconButton btnArrow = new IconButton("arrow");
		btnArrow.setAttribute("class", "slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small slds-shrink-none");
		accSummary.addChild(btnArrow);
		btnArrow.getIcon().setType("utility");
		btnArrow.getIcon().setIconName("down");
		
		addChild(accordionContent);

	}

	public void open() {
		addClass("slds-is-open");
		CustomEvent evt = new CustomEvent("open");
		evt.$set("data", this);
		 getParent().getParent().fireListener("open", evt);
		//getContext().$set("openClass", "slds-is-open");
	}

	public void close() {
		removeClass("slds-is-open");
		CustomEvent evt = new CustomEvent("close");
		evt.$set("data", this);
		 getParent().getParent().fireListener("close", evt);
	}

	public void setTitle(String title) {
		uititle.setHtml(title);
	}

	public void setIcon(String iconType, String iconName) {
		SvgIcon icon = new SvgIcon("ss");
		icon.setType(iconType);
		icon.setIconName(iconName);
		btn.setIcon(icon);
		icon.setSvgClass("slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left");
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);

		if(key.equals("title")){
			setTitle(value);
		}
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Array<Designable> getDesignables() {
		Array l = accordionContent.getChildren();
		return l;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = delegate.getParameters();
		AttributeParameter title = new AttributeParameter("title", "Title", "Basic");
		parameters.push(title);
		return parameters;
	}

	@Override
	public void addDesignable(Designable designable) {
		accordionContent.addChild((JSContainer)designable);
	}

	public JSContainer getContent() {
		return accordionContent;
	}

	@Override
	public void removeDesignable(Designable designable) {
		
		accordionContent.removeChild(designable);
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		delegate.moveDesignable(accordionContent, steps);
	}

}
