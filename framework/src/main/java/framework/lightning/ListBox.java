package framework.lightning;

import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import jsweet.lang.Array;

public class ListBox extends JSContainer implements Designable{
	
	private JSContainer ul = new JSContainer("ul");
	
	public final static String LENGTH_5 = "slds-dropdown_length-5";
	public final static String LENGTH_7 = "slds-dropdown_length-7";
	public final static String LENGTH_10 = "slds-dropdown_length-10";
	public final static String LENGTH_DEFAULT = "slds-dropdown_length-def";
	
	private String lengthSel = LENGTH_DEFAULT;

	private boolean withIcon = false;
	
	private DesignableDelegate delegate = new DesignableDelegate(this);
	
	public ListBox(String name) {
		super(name,"div");
		setAttribute("identifier", "lgt:listbox");
		setAttribute("role", "listbox");
		addChild(ul);
		ul.addClass("slds-listbox");
		applyParam("direction", "vertical");
	}
	
	public ListBox setLength(String length){
		
		lengthSel = length;
		return ref();
		
	}
	
	public ListBox setWithIcon(boolean b){
		withIcon = b;
		return ref();
	}
	
	public ListBox ref(){
		ul.removeClass(lengthSel);
		if(withIcon){
			if(lengthSel.contains("_length-with-icon") == false)
				lengthSel = lengthSel.replace("_length", "_length-with-icon");
		}else{
			lengthSel = lengthSel.replace("_length-with-icon", "_length");
		}
		
		ul.addClass(lengthSel);
		
		return this;
	}
	
	public ListBox addItem(ListBoxItem option){
		ul.addChild(option);
		return this;
	}
	
	public void clearItems(){
		ul.clearChildren();
		ul.setRendered(false);
	}
	
	public ListBox setVertical(boolean b){
		if(b){
			ul.addClass("slds-listbox_vertical");
		}else{
			ul.removeClass("slds-listbox_vertical");
		}
		return this;
	}
	
	public ListBox setHorizontal(boolean b){
		if(b){
			ul.addClass("slds-listbox_horizontal");
		}else{
			ul.removeClass("slds-listbox_horizontal");
		}
		return this;
	}

	@Override
	public void applyParam(String key, String value) {
		// TODO Auto-generated method stub
		delegate.applyParameter(key, value, true);
		if(key.equals("direction")){
			if(value.equals("def")){
				setVertical(false);
				setHorizontal(false);
			}else if(value.equals("horizontal")){
				setVertical(false);
				setHorizontal(true);
			}else{
				setVertical(true);
				setHorizontal(false);
			}
		}else if(key.equals("withIcon")){
			setWithIcon("true".equals(value));
		}else if(key.equals("length")){
			setLength(value);
		}
		
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public Array<Designable> getDesignables() {
		Array r = ul.getChildren();
		return r;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> params = delegate.getParameters();
		AttributeParameter withIcon = new AttributeParameter("withIcon", "With Icon", "Basic");
		withIcon.options.push(new Option("",""));
		
		AttributeParameter direction = new AttributeParameter("direction", "Direction", "Basic");
		direction.options.push(new Option("Default","def"));
		direction.options.push(new Option("Vertical", "vertical"));
		direction.options.push(new Option("Horizontal", "horizontal"));
		
		AttributeParameter length = new AttributeParameter("length", "Length", "Basic");
		length.options.push(new Option("Default",LENGTH_DEFAULT));
		length.options.push(new Option("5 Items",LENGTH_5));
		length.options.push(new Option("7 Items",LENGTH_7));
		length.options.push(new Option("10 Item",LENGTH_10));
		
		params.push(direction,length,withIcon);
		return params;
	}

	@Override
	public void addDesignable(Designable designable) {
		if(designable instanceof ListBoxItem){
			addItem((ListBoxItem)designable);
		}else{
			throw new jsweet.lang.Error("Can only add component of type List Box Item in this container");
		}
	}

	@Override
	public void removeDesignable(Designable designable) {
		ul.removeChild(designable);
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		
	}
	
	
	
	
	
	

}
