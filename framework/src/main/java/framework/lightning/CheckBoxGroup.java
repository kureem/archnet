package framework.lightning;

import framework.InputField;
import framework.JSContainer;
import framework.builder.marshalling.Component;
import framework.builder.properties.ExtPropertiesEditor;
import framework.builder.properties.KeyValueEditor;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.ExtDesignable;
import framework.design.Option;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import jsweet.lang.Array;
import jsweet.lang.JSON;
import jsweet.lang.Object;

public class CheckBoxGroup extends JSContainer implements ExtDesignable,InputField<Array<String>>{
	
	private DesignableDelegate delegate = new DesignableDelegate(this);

	public CheckBoxGroup(String name) {
		super(name, "div");
		setAttribute("identifier", "lgt:checkboxgroup");
		addClass("slds-form-element__control");
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		if(key.equals("options")){
			clearChildren();
			setRendered(false);
			Object options = (Object)JSON.parse(value);
			for(String optval : Object.keys(options)){
				CheckBox checkbox = new CheckBox(optval);
				checkbox.setLabel((String)options.$get(optval));
				addChild(checkbox);
			}
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
		
		AttributeParameter options = new AttributeParameter("options", "Options", "Extended");
		params.push(options);
		
		
		return params;
	}
	
	public void setData(java.lang.Object obj){
		if(obj instanceof Array<?>){
			Array<Option> options = (Array<Option>)obj;
			setOptions(options);
		}else{
			applyParam("options", JSON.stringify(obj));
		}
	}
	
	public void setOptions(Array<Option> options){
		clearChildren();
		for(Option opt : options){
			addOption(opt);
		}
	}
	
	public void addOption(Option option){
		CheckBox checkbox = new CheckBox(option.value);
		checkbox.setLabel(option.text);
		addChild(checkbox);
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


	@Override
	public Array<String> getValue() {
		Array<String> result = new Array<String>();
		for(JSContainer child : getChildren()){
			CheckBox cb = (CheckBox)child;
			if(cb.getValue() == true){
				result.push(cb.getName());
			}
		}
		return result;
	}


	@Override
	public void setValue(Array<String> val) {
		clearAll();
		for(String s : val){
			for(JSContainer child : getChildren()){
				CheckBox cb = (CheckBox)child;
				if(cb.getName().equals(s)){
					cb.setValue(true);
				}
			}
		}
	}
	
	public void clearAll(){
		for(JSContainer child : getChildren()){
			CheckBox cb = (CheckBox)child;
			cb.setValue(false);
		}
	}

	@Override
	public ExtPropertiesEditor[] getExtEditors() {
		KeyValueEditor options = new KeyValueEditor("options"){

			@Override
			public void applyDataOnDesignable(Designable designable, Object data) {
				
				designable.applyParam("options", JSON.stringify(data));
			}

			@Override
			public Object getDataFromDesignable(Designable designable) {
				String options = designable.getAttribute("options");
				if(options != null && options.length() > 0){
					Object data = (Object)JSON.parse(options);
					if(data != null){
						return data;
					}
				}
				return new Object();
			}

			
			
		};
		options.setKeyLabel("Value");
		options.setValueLabel("Text");
		options.setTabLabel("Options");
		
		
		KeyValueEditor customPropertiesEditorBody = new KeyValueEditor("custom"){

			@Override
			public void applyDataOnDesignable(Designable designable, Object data) {
				designable.setData(data);
			}

			@Override
			public Object getDataFromDesignable(Designable designable) {
				return (Object)designable.getData();
			}
			
		};
		
		customPropertiesEditorBody.setTabLabel("Custom");

		
		
		return new ExtPropertiesEditor[]{ options, customPropertiesEditorBody};
	}

}
