package framework.lightning.table;


import framework.JSContainer;

public class TableColumn extends JSContainer {
	
	

   protected Object    identifier;



	//private JSContainer title = new JSContainer("a").addClass("slds-th__action slds-text-link_reset")
		//	.setAttribute("role", "button");
	
	private JSContainer title = new JSContainer("div").addClass("slds-truncate");
	
	
	//private Icon icon = new Icon("", "utility", "arrowdown");
	
	

	//private JSContainer resizable = new JSContainer("div").addClass("slds-resizable");
	
	//private JSContainer range = new JSContainer("input").setAttribute("type", "range").setAttribute("min", "20")
		//	.setAttribute("max", "1000").addClass("slds-resizable__input slds-assistive-text");
	
	
	 
	//private JSContainer resizableHandle = new JSContainer("span").addClass("slds-resizable__handle")
		//	.setHtml("<span class=\"slds-resizable__divider\"></span>");
	
	 
	//private JSContainer checkBoxCtn = new JSContainer("div").addClass("slds-th__action slds-th__action_form");
	//private JSContainer sldsCheckbox = new JSContainer("span").addClass("slds-checkbox");
	//private JSCheckBox checkBox = new JSCheckBox("checkbox");
	//private JSContainer labelCheckBox = new JSContainer("label").addClass("slds-checkbox__label").setHtml("<span class=\"slds-checkbox_faux\"></span>");
	

	public TableColumn(String name, Object identifier,String label) {
		super(name, "th");
		this.identifier = identifier;
		//title.addChild(innerTitle);
		//title.addChild(icon);
		addChild(title);
		//icon.addClass("slds-icon_container");
		
		//addChild(resizable);
		//resizable.addChild(range);
		//resizable.addChild(resizableHandle);
		
		//checkBoxCtn.addChild(sldsCheckbox.addChild(checkBox).addChild(labelCheckBox));
		
		//addChild(checkBoxCtn.setStyle("display", "none"));
		setLabel(label);

		//setSortable(false);
		//setResizable(false);
	//	setTitleCaps(true);
		setAttribute("scope", "col");
	}
	
	public Object getIdentifier(){
		return identifier;
	}
	
	public TableColumn setWidth(String width){
		title.setStyle("width", width);
		return this;
	}
	
	/*public void setCheckBox(boolean b){
		if(b){
			title.setStyle("display", "none");
			resizableHandle.setStyle("display", "none");
			checkBoxCtn.setStyle("display", "block");
		}else{
			title.setStyle("display", "block");
			resizableHandle.setStyle("display", "block");
			checkBoxCtn.setStyle("display", "none");
		}
	}*/
	
	public TableColumn setLabel(String title){
		this.title.setHtml(title);
		return this;
	}

	protected void setFeature(String cls, boolean b) {
		if (b) {
			addClass(cls);
		} else {
			removeClass(cls);
		}
	}

	/*public void setAlign(Alignment alignmen) {
		if (alignmen.equals(Alignment.LEFT)) {
			removeClass("slds-text-align_right");
			addClass("slds-text-align_left");
		} else if (alignmen.equals(Alignment.RIGHT)) {
			addClass("slds-text-align_right");
			removeClass("slds-text-align_left");
		} else {
			removeClass("slds-text-align_right");
			removeClass("slds-text-align_left");
		}
	}

	public TableColumn setSortable(boolean b) {
		setFeature("slds-is-sortable", b);
		icon.setVisible(b);
		return this;
	}

	public TableColumn setTitleCaps(boolean b) {
		setFeature("slds-text-title_caps", b);
		return this;
	}

	public TableColumn setResizable(boolean b) {
		setFeature("slds-is-resizable", b);
		resizable.setVisible(b);
		return this;
	}*/

}
