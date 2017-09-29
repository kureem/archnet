package framework.lightning;

import framework.JSContainer;

public class Panel extends Grid{
	
	private FormLayout layout = new FormLayout("layout", "div");

	public Panel(String name) {
		super(name, "div");
		setNoWrap(true).setVertical(true);
		layout.setStacked(true);
		addChild(layout);
	}
	
	public FormLayout getLayout(){
		return layout;
	}
	
	public Panel addSection(PanelSection section){
		layout.addChild(section);
		return this;
	}
	
	public class PanelSection extends JSContainer{

		public PanelSection(String name, String tag) {
			super(name, tag);
			addClass("slds-panel__section");
		}
		
	}

}
