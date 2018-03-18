package framework.lightning;

import def.js.JSON;
import framework.EventListener;
import framework.InputField;
import framework.JSContainer;
import framework.JSInput;
import framework.builder.marshalling.Component;
import framework.builder.properties.ExtPropertiesEditor;
import framework.builder.properties.KeyValueEditor;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.ExtDesignable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import jsweet.dom.CustomEvent;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class ComboBox extends JSContainer implements ExtDesignable, InputField<Object> {
	
	private DesignableDelegate delegate = new DesignableDelegate(this);
	
	private JSContainer combo = new JSContainer("combobox", "div").addClass("slds-combobox")
			.addClass("slds-dropdown-trigger").addClass("slds-dropdown-trigger_click")
			.setAttribute("aria-haspopup", "listbox").setAttribute("role", "combobox");

	private JSInput input = new JSInput("input");

	//protected ListBox listBox = new ListBox("listBox");
	
	protected ListPopOver listBox = new ListPopOver("popover");

	private Object value;
	
	private Array<Object> options = new Array<Object>();
	
	protected SvgIcon inputIcon = new SvgIcon("icon", "utility", "search");
	
	private String currentIconType ="utility";
	private String currentIconName = "search";
	
	public ComboBox(String name) {
		super(name, "div");
		addClass("slds-combobox_container");
		addClass("slds-has-inline-listbox");
		addChild(combo);
		setAttribute("identifier", "lgt:combobox");
		JSContainer formelement = new JSContainer("div").addClass("slds-combobox__form-element")
				.addClass("slds-input-has-icon").addClass("slds-input-has-icon_right").setAttribute("role", "none");

		combo.addChild(formelement);
		formelement.addChild(input);

		input.addClass("slds-input slds-combobox__input").setAttribute("aria-autocomplete", "list")
				.setAttribute("autocomplete", "off").setAttribute("role", "textbox");

		// Button btn = new Button();
		// btn.geti
		
		inputIcon.setTag("span");
		inputIcon.setAttribute("class",
				"slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right");
		inputIcon.setSvgClass("slds-icon slds-icon slds-icon_x-small slds-icon-text-default");

		formelement.addChild(inputIcon);
		combo.addChild(listBox);
		listBox.addClass("slds-dropdown slds-dropdown_fluid");
		close();
		
		input.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				open();
				fireListener("keyup", evt);
			}
		}, "keyup");

	}
	
	public void setLoading(boolean b){
		if(b){
			currentIconName = inputIcon.getIconName();
			currentIconType = inputIcon.getType();
			inputIcon.setIconName("spinner");
			inputIcon.setType("utility");
		}else{
			inputIcon.setIconName(currentIconName);
			inputIcon.setType(currentIconType);
		}
	}
	
	public String getTypedText(){
		return input.getValue();
	}
	
	public JSInput getInput(){
		return input;
	}
	
	

	@Override
	public String[] advancedEventTypes() {
		return new String[]{"open","close","select","change"};
	}



	public void setPlaceHolder(String value) {
		input.setAttribute("placeholder", value);
	}

	public void close() {
		combo.setAttribute("aria-expanded", "false");
		combo.removeClass("slds-is-open");
		CustomEvent evt = new CustomEvent("open");
		evt.$set("data", this);
		fireListener("close", evt);
	}
	
	public void open(){
		combo.setAttribute("aria-expanded", "true");
		combo.addClass("slds-is-open");
		CustomEvent evt = new CustomEvent("open");
		evt.$set("data", this);
		listBox.getNative().focus();
		fireListener("open", evt);
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		if (key.equals("options")) {
			if (value != null) {
				Object o = (Object) JSON.parse(value);
				clearOptions();
				setRendered(false);
				for (String val : Object.keys(o)) {
					String txt = (String) o.$get(val);
					Object option = new Object();
					option.$set("value", val);
					option.$set("text", txt);
					addOption(option);
				}
			}
		}
	}
	
	protected ListBoxItem createItem(Object option){
		String txt = (String)option.$get("text");
		String val = (String)option.$get("value");
		
		ListBoxItem item = new ListBoxItem(val);
		
		item.setHasMeta(false);
		item.setType(ListBoxOption.TYPE_PLAIN);
		item.setText(txt);
		return item;
	}
	
	public void addOption(Object option){
		
		ListBoxItem item = createItem(option);
		item.setData(option);
		item.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				//CustomEvent evt = new CustomEvent("open");
				evt.$set("data", source.getData());
				
				setValue((Object)source.getData());
				fireListener("select", evt);
				close();
				
			}
		}, "click");
		options.push(option);
		listBox.getListBox().addItem(item);
	}
	
	public void setData(Array<Object> options){
		clearOptions();
		for(Object o : options){
			addOption(o);;
		}
	}
	
	
	public void setOptions(Array<Object> options){
		setData(options);
	}
	
	
	public void clearOptions(){
		listBox.getListBox().clearItems();
		options = new Array<Object>();
		//setRendered(false);
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

		AttributeParameter options = new AttributeParameter("options", "Options", "Extended");
		params.push(options);

		AttributeParameter placeHolder = new AttributeParameter("placeHolder", "Placeholder", "Basic");

		params.push(options, placeHolder);
		return params;
	}

	@Override
	public void addDesignable(Designable designable) {

	}

	@Override
	public void removeDesignable(Designable designable) {
		delegate.removeDesignable(designable);
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		delegate.moveDesignable(designable, steps);
	}

	@Override
	public ExtPropertiesEditor[] getExtEditors() {
		KeyValueEditor options = new KeyValueEditor("options") {

			@Override
			public void applyDataOnDesignable(Designable designable, Object data) {

				designable.applyParam("options", JSON.stringify(data));
			}

			@Override
			public Object getDataFromDesignable(Designable designable) {
				String options = designable.getAttribute("options");
				if (options != null && options.length() > 0) {
					Object data = (Object) JSON.parse(options);
					if (data != null) {
						return data;
					}
				}
				return new Object();
			}

		};
		options.setKeyLabel("Value");
		options.setValueLabel("Text");
		options.setTabLabel("Options");

		KeyValueEditor customPropertiesEditorBody = new KeyValueEditor("custom") {

			@Override
			public void applyDataOnDesignable(Designable designable, Object data) {
				designable.setData(data);
			}

			@Override
			public Object getDataFromDesignable(Designable designable) {
				return (Object) designable.getData();
			}

		};

		customPropertiesEditorBody.setTabLabel("Custom");

		return new ExtPropertiesEditor[] { options, customPropertiesEditorBody };
		/*
		 * options.iterate((k)->{ String key = k[0].getNative().innerHTML;
		 * String value = })
		 */

	}

	@Override
	public Object getValue() {
		return value;
	}
	
	protected String getLabelProperty(){
		return "text";
	}

	@Override
	public void setValue(Object val) {
		if(val != null){
			if(!val.equals(value)){
				this.value = val;
				String label = (String)val.$get(getLabelProperty());
				input.setValue(label);
				CustomEvent evt = new CustomEvent("open");
				evt.$set("data", val);
				fireListener("change", evt);
			}
		}else{
			if(value != null){
				input.setValue("");
				CustomEvent evt = new CustomEvent("open");
				evt.$set("data", this);
				fireListener("change", evt);
			}
		}
		
	}
}
