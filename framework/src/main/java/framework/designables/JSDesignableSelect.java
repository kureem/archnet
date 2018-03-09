package framework.designables;

import def.js.JSON;
import framework.JSOption;
import framework.JSSelect;
import framework.builder.marshalling.Component;
import framework.builder.properties.ExtPropertiesEditor;
import framework.builder.properties.KeyValueEditor;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.ExtDesignable;
import framework.design.Parameter;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class JSDesignableSelect extends JSSelect implements ExtDesignable{


	private DesignableDelegate delegate = new DesignableDelegate(this);
	
	public JSDesignableSelect(String name) {
		super(name);
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		if(key.equals("options")){
			if(value != null){
				Object o = (Object)JSON.parse(value);
				clearChildren();
				setRendered(false);
				for(String val: Object.keys(o)){
					String txt = (String)o.$get(val);
					addOption(new JSOption(txt, val));
				}
			}
		}
	}

	@Override
	public Array<Designable> getDesignables() {
		return  new Array<Designable>();
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
		/*options.iterate((k)->{
			String key = k[0].getNative().innerHTML;
			String value =
		})*/
		
	}

}
