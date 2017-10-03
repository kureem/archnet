package framework;

import java.util.List;

import framework.design.Parameter;
import framework.design.ValueParameter;

public class JSInput extends JSContainer implements InputField<String>{

	public JSInput(String name) {
		super(name, "input");
		setType(InputTypes.text);
	}
	
	
	public JSInput setType(String type){
		setAttribute("type", type.toString());
		return this;
	}
	
	public JSInput setDisabled(boolean b){
		if(b){
			setAttribute("disabled", "true");
		}else{
			setAttribute("disabled", null);
		}
		return this;
	}


	@Override
	public String getValue() {
		return getAttribute("value");
	}


	@Override
	public void setValue(String val) {
		setAttribute("value", val);
	}


	@Override
	public void setRawValue(String value) {
		setAttribute("value", value);
	}


	@Override
	public List<Parameter> getParameters() {
		List<Parameter> parameters= super.getParameters();
		parameters.add(new ValueParameter("value", "Value", "Basic"));
		return parameters;
		
	}
	
	

}
