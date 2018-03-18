package framework.lightning;

import framework.JSContainer;
import framework.lightning.designables.JSDesignableLightningGrid;
import jsweet.lang.Array;

public class FormLayout extends JSDesignableLightningGrid {
	protected String[] SPACINGS = new String[]{"None", "XXX Small","XX Small", "X Small", "Small", "Medium", "Large", "X Large", "XX Large"};
	
	public final static String SPACING_NONE = PADDING_SIZE_NONE;
	public final static String SPACING_XXX_SMALL = PADDING_SIZE_XXX_SMALL;
	public final static String SPACING_XX_SMALL = PADDING_SIZE_XX_SMALL;
	public final static String SPACING_X_SMALL = PADDING_SIZE_X_SMALL;
	public final static String SPACING_SMALL = PADDING_SIZE_SMALL;
	public final static String SPACING_MEDIUM = PADDING_SIZE_MEDIUM;
	public final static String SPACING_LARGE = PADDING_SIZE_LARGE;
	public final static String SPACING_X_LARGE = PADDING_SIZE_X_LARGE;
	public final static String SPACING_XX_LARGE = PADDING_SIZE_XX_LARGE;
	
	private String currentSpacing = SPACING_NONE;

	public FormLayout(String name) {
		super(name);
		addClass("slds-form");
		applyParam("wrap", "true");
		
		setCompound(true);
	}
	
	public FormLayout setSpacing(String spacing){
		this.currentSpacing = spacing;
		for(JSContainer container : getChildren()){
			LTContainer lt = (LTContainer)container;
			lt.setPaddingBottom(spacing).setPaddingLeft(spacing).setPaddingRight(spacing).setPaddingTop(spacing);
		}
		return this;
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
		element.setPaddingBottom(currentSpacing).setPaddingLeft(currentSpacing).setPaddingRight(currentSpacing).setPaddingTop(currentSpacing);
		return this;
	}
	
	
	public FormLayout clear(){
		clearChildren();
		setRendered(false);
		return this;
	}
	
	
	public FormLayout clearFields(){
		return clear();
	}
	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Array<FormElement> getElements(){
		Array l = getChildren();
		return l;
	}
	
	public FormElement getElement(String name){
		return (FormElement)getChild(name);
	}
	

}
