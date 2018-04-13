package framework.lightning;

import framework.JSContainer;

public class ListBoxOption extends JSContainer{

	private Media media;
	
	public final static String TYPE_PLAIN = "slds-listbox__option_plain";
	
	public final static String TYPE_ENTITY = "slds-listbox__option_entity";
	
	private SvgIcon leftIcon = new SvgIcon("icon");
	
	private JSContainer textElement = new JSContainer("text", "span").addClass("slds-listbox__option-text slds-listbox__option-text_entity");
	private JSContainer metaElement = new JSContainer("text", "span").addClass("slds-listbox__option-meta slds-listbox__option-meta_entity");
	private JSContainer plainTextElement = new JSContainer("text", "h3").addClass("slds-text-title_caps");
	
	public ListBoxOption(String name) {
		super(name, "div");
		addClass("slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta");
		//setHasMeta(true);
		//setIsEntity(true);
		media = new Media("content");
		addChild(media);
		media.getFigureContainer().addChild(leftIcon);
		leftIcon.addClass("slds-icon_container slds-icon-standard-account");
		leftIcon.setSvgClass("slds-icon slds-icon_small");
		
		media.getBodyContainer().addChild(textElement);
		media.getBodyContainer().addChild(metaElement);
		media.addChild(plainTextElement);
		
		setType(TYPE_ENTITY);
	}
	
	public Media getMedia(){
		return media;
	}
	
	
	public ListBoxOption setIconType(String type){
		leftIcon.setType(type);
		return this;
	}
	
	public ListBoxOption setIconName(String name){
		leftIcon.setIconName	(name);
		return this;
	}
	
	public ListBoxOption setText(String text){
		textElement.setHtml(text);
		plainTextElement.setHtml(text);
		return this;
	}
	
	public ListBoxOption setMeta(String text){
		boolean hasMeta = false;
		if(text != null && text.length() > 0){
			hasMeta = true;
			metaElement.setHtml(text);
		}
		setHasMeta(hasMeta);
		return this;
	}
	
	
	
	public ListBoxOption setHasMeta(boolean b){
		if(b){
			addClass("slds-listbox__option_has-meta");
		}else{
			removeClass("slds-listbox__option_has-meta");
		}
		metaElement.setVisible(b);
		return this;
	}
	
	
	public ListBoxOption setType(String type){
		removeClass(TYPE_ENTITY);
		removeClass(TYPE_PLAIN);
		addClass(type);
		if(type.equals(TYPE_PLAIN)){
			media.getBodyContainer().setVisible(false);
			media.getFigureContainer().setVisible(false);
			plainTextElement.setVisible(true);
		}else{
			media.getBodyContainer().setVisible(true);
			media.getFigureContainer().setVisible(true);
			plainTextElement.setVisible(false);
		}
		
		return this;
	}
	
	

}
