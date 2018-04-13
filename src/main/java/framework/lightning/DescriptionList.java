package framework.lightning;

import framework.JSContainer;

public class DescriptionList extends LTContainer{

	public final static String DEFAULT="";
	public final static String INLINE = "slds-dl_inline";
	public final static String HORIZONTAL = "slds-dl_horizontal";
	
	private String currentLayout = DEFAULT;
	
	public DescriptionList(String name) {
		super(name, "dl");
	}

	
	public DescriptionList setLayout(String layout){
		this.currentLayout = layout;
		removeClass(INLINE).removeClass(HORIZONTAL);
		for(JSContainer child : getChildren()){
			child.removeClass(INLINE + "__label").removeClass(INLINE + "__detail");
			
			child.removeClass(HORIZONTAL + "__label").removeClass(HORIZONTAL + "__detail");
			if(child.getTag().equals("dt")){
				child.addClass(layout + "__label");
			}else{
				child.addClass(layout + "__detail");
			}
		}
		return this;
	}
	
	
	public DescriptionList addItem(String label, JSContainer item){
		JSContainer dt = new JSContainer("dt").setHtml(label);
		addChild(dt);
		JSContainer detail = new JSContainer("dd").addChild(item);
		addChild(detail);
		
		setLayout(currentLayout);
		return this;
	}
}
