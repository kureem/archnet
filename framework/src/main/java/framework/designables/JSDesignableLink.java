package framework.designables;

import java.util.List;

import framework.design.AttributeParameter;
import framework.design.Parameter;
import framework.design.TagParameter;

public class JSDesignableLink extends JSDesignableTextComponent {

	public JSDesignableLink(String name) {
		super(name, "a");
	}

	@Override
	public void applyParam(String key, String value) {
		// TODO Auto-generated method stub
		super.applyParam(key, value);
	}

	@Override
	public List<Parameter> getParameters() {
		List<Parameter> parameters = super.getParameters();
		for(Parameter p : parameters){
			if(p instanceof TagParameter){
				parameters.remove(p);
				break;
			}
		}
		
		parameters.add(new AttributeParameter("href", "Href", "Basic"));
		parameters.add(new AttributeParameter("target", "Target", "Basic"));
		
		
		return parameters;
		
		
	}
	
	
	

}
