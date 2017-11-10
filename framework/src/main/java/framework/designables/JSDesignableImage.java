package framework.designables;

import java.util.List;

import framework.design.AttributeParameter;
import framework.design.Parameter;
import framework.design.TagParameter;

public class JSDesignableImage extends JSDesignableBlockComponent{

	public JSDesignableImage(String name) {
		super(name, "img");
		
	}

	@Override
	public List<Parameter> getParameters() {
		List<Parameter> parameters = super.getParameters();
		parameters.add(new AttributeParameter("src", "Source", "Basic"));
		
		for(Parameter p : parameters){
			if(p instanceof TagParameter){
				parameters.remove(p);
				break;
			}
		}
		
		return parameters;
	}

	
}
