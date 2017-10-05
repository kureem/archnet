package framework.designables;

import java.util.LinkedList;
import java.util.List;

import framework.TextComponent;
import framework.builder.marshalling.Component;
import framework.design.Designable;
import framework.design.Parameter;
import framework.design.TextParameter;

public class JSDesignableTextComponent extends TextComponent implements Designable{

	
	private DesignableDelegate delegate = new DesignableDelegate(this);
	public JSDesignableTextComponent(String name, String tag) {
		super(name, tag);
	}

	@Override
	public void setParameter(String key, String value, boolean designMode) {
		delegate.setParameter(key, value, designMode);
	}

	
	
	@Override
	public List<Designable> getDesignables() {
		
		return new LinkedList<>();
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public List<Parameter> getParameters() {
		List<Parameter> params = delegate.getParameters();
		TextParameter param = new TextParameter("text", "Text", "Basic");
		params.add(param);
		return params;
	}
	
	@Override
	public void addDesignable(Designable designable) {
		
		throw new RuntimeException("Cannot add children to this component");
		// TODO Auto-generated method stub
		
	}
	

}
