package framework.designables;

import framework.design.AttributeParameter;
import framework.design.Parameter;
import framework.design.TagParameter;
import jsweet.lang.Array;

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
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = super.getParameters();
		Array<Parameter> result = new Array<Parameter>();
		for(Parameter p : parameters){
			if(p instanceof TagParameter){
				//parameters.remove(p);
				//break;
			}else{
				result.push(p);
			}
		}
		
		result.push(new AttributeParameter("href", "Href", "Basic"));
		result.push(new AttributeParameter("target", "Target", "Basic"));
		
		
		return result;
		
		
	}
	
	
	

}
