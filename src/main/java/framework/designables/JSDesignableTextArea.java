package framework.designables;

import framework.DndAble;
import framework.JSTextArea;
import framework.KeyboardEventAble;
import framework.MouseEventAble;
import framework.builder.marshalling.Component;
import framework.design.Designable;
import framework.design.Parameter;
import framework.design.ValueParameter;
import jsweet.lang.Array;

public class JSDesignableTextArea extends JSTextArea implements Designable,MouseEventAble,DndAble,KeyboardEventAble {
	
	private DesignableDelegate delegate  = new DesignableDelegate(this);


	public JSDesignableTextArea(String name) {
		super(name);
		setAttribute("identifier", "html:textarea");
	}
	
	@Override
	public String[] advancedEventTypes() {
		return new String[]{"change", "input", "blur", "focus","paste","copy", "focus", "error","beforepaste","beforecut","beforecopy"};
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> params = delegate.getParameters();//new LinkedList<>();

		params.push(new ValueParameter("value", "Value", "Basic"));
		return params;
	}

	@Override
	public Array<Designable> getDesignables() {
		Array<Designable> result = new Array<>();
		return result;
	}
	
	@Override
	public void addDesignable(Designable designable) {
		
		//throw new java.lang.RuntimeException("Cannot add children to this component");
		
	}
	
	@Override
	public void removeDesignable(Designable designable) {
		
		delegate.removeDesignable(designable);
		
	}


	@Override
	public void moveDesignable(Designable designable, int steps) {
		delegate.moveDesignable(designable, steps);
	}


}
