package framework.lightning;

public class FormLayout extends LTContainer {

	public FormLayout(String name, String tag) {
		super(name, tag);
		addClass("slds-form");
	}

	protected FormLayout toggleClass(String cls, boolean b) {
		return (FormLayout)super.toggleClass(cls, b);
		
	}

	public FormLayout setStacked(boolean b) {
		toggleClass("slds-form_stacked", b);
		if(b){
			setInline(false);
			setHorizontal(false);
			setCompound(false);
		}
		return this;
	}

	public FormLayout setInline(boolean b) {
		toggleClass("slds-form_inline", b);
		if(b){
			setStacked(false);
			setHorizontal(false);
			setCompound(false);
		}
		return this;
	}

	public FormLayout setCompound(boolean b) {
		toggleClass("slds-form_compound", b);
		if(b){
			setInline(false);
			setHorizontal(false);
			setStacked(false);
		}
		return this;
	}

	public FormLayout setHorizontal(boolean b) {
		toggleClass("slds-form_horizontal", b);
		if(b){
			setInline(false);
			setStacked(false);
			setCompound(false);
		}
		return this;
	}
	
	
	public FormLayout addFormElement(FormElement element){
		addChild(element);
		return this;
	}
	
	
	public FormLayout clear(){
		getChildren().clear();
		setRendered(false);
		return this;
	}
	
	
	
	

}
