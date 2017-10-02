package framework;

import java.util.List;

import framework.design.Parameter;
import framework.design.TextParameter;

public class TextComponent extends JSContainer{

	public TextComponent(String name, String tag) {
		super(name, tag);
	}
	
	@Override
	public List<Parameter> getParameters() {
		List<Parameter> params = super.getParameters();
		TextParameter param = new TextParameter("text", "Text", "Basic");
		params.add(param);
		return params;
	}

}
