package framework.lightning;

import framework.JSContainer;

public class Accordion extends JSContainer{

	public Accordion(String name) {
		super(name,"ul");
		
		
	}
	
	
	
	public class JSAccordionItem extends JSContainer{
		
		private JSContainer accordionSection = new JSContainer("section").addClass("slds-accordion__section");
		
		private JSContainer accordionSummary = new JSContainer("div").addClass("slds-accordion__summary");
		
		private JSContainer accordionSummaryHeading = new JSContainer("h3").addClass("slds-text-heading_small slds-accordion__summary-heading");
		
		
		public JSAccordionItem(String name){
			super(name,"li");
			addClass("slds-accordion__list-item");
			addChild(accordionSection);
			accordionSection.addChild(accordionSummary);
			accordionSummary.addChild(accordionSummaryHeading);
			
		}
	}
	

}
