package framework.lightning;

import framework.DndAble;
import framework.JSContainer;
import framework.MouseEventAble;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import jsweet.lang.Array;

public class ListBoxItem extends JSContainer implements Designable, MouseEventAble,DndAble{
	
	private ListBoxOption option;
	
	private DesignableDelegate delegate = new DesignableDelegate(this);

	public ListBoxItem(String name) {
		super(name,"li");
		setAttribute("role", "presentation");
		addClass("slds-listbox__item");
		setAttribute("identifier", "lgt:listbox-item");
		
		option = new ListBoxOption("option");
		addChild(option);
		applyParam("title", "List Item Title");
		applyParam("subTitle", "Subtitle");
		applyParam("type", ListBoxOption.TYPE_ENTITY);
		applyParam("iconName", "user");
		applyParam("iconType", "utility");
		
	}
	
	public ListBoxItem setIconType(String type){
		option.setIconType(type);
		return this;
	}
	
	public ListBoxItem setIconName(String name){
		option.setIconName(name);
		return this;
	}
	
	public ListBoxItem setText(String text){
		option.setText(text);
		return this;
	}
	
	public ListBoxItem setMeta(String text){
		option.setMeta(text);
		return this;
	}
	
	
	
	public ListBoxItem setHasMeta(boolean b){
		option.setHasMeta(b);
		return this;
	}
	
	
	public ListBoxItem setType(String type){
		option.setType(type);
		
		return this;
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		if(key.equals("title")){
			setText(value);
		}else if(key.equals("subTitle")){
			setMeta(value);
		}else if(key.equals("iconName")){
			setIconName(value);
		}else if(key.equals("iconType")){
			setIconType(value);
		}else if(key.equals("type")){
			setType(value);
		}
	}

	@Override
	public Array<Designable> getDesignables() {
		return new Array<Designable>();
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> params = delegate.getParameters();
		
		AttributeParameter title = new AttributeParameter("title", "Title", "Basic");
		AttributeParameter subTitle = new AttributeParameter("subTitle", "Sub Title", "Basic");
		
		AttributeParameter type = new AttributeParameter("type", "Type", "Advanced");
		type.options.push(new Option("Plain",ListBoxOption.TYPE_PLAIN));
		type.options.push(new Option("Entity",ListBoxOption.TYPE_ENTITY));
		
		AttributeParameter iconType = new AttributeParameter("iconType", "Icon Type", "Advanced");
		AttributeParameter iconName = new AttributeParameter("iconName", "Icon Name", "Advanced");
		
		params.push(title,subTitle,type,iconType,iconName);
		
		return params;
		
	}

	@Override
	public void addDesignable(Designable designable) {
		
	}

	@Override
	public void removeDesignable(Designable designable) {
		
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		
	}
	
	

}
