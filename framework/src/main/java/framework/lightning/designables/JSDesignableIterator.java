package framework.lightning.designables;

import framework.JSContainer;
import framework.builder.libraries.ComponentFactoryRegistry;
import framework.builder.marshalling.Component;
import framework.core.BeanFactory;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import jsweet.lang.Array;
import jsweet.lang.Error;
import jsweet.lang.Object;

public class JSDesignableIterator extends JSContainer implements Designable{

	private DesignableDelegate delegate = new DesignableDelegate(this);
	
	private Array<Object> data = new Array<Object>();
	
	private JSContainer templateCtn = new JSContainer("tmp","div");
	private JSContainer list = new JSContainer("list", "div");
	
	//private JSDesignableIterable iterable=null;
	
	public JSDesignableIterator(String name) {
		super(name,"div");
		addChild(templateCtn);
		
		Component comp = new Component();
		comp.impl = "zs:iterable";
		JSDesignableIterable iterable = (JSDesignableIterable)BeanFactory.getInstance().getBeanOfType(ComponentFactoryRegistry.class).getComponentFactory("zs:iterable").build(comp, true);
		templateCtn.addChild(iterable);
		addChild(list);
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
	}

	@Override
	public Array<Designable> getDesignables() {
		
		Array<Designable> res = new Array<Designable>();
		res.push((Designable)templateCtn.getChildren().$get(0));
		
		return res;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}
	
	public void setData(java.lang.Object obj){
		super.setData(obj);
		Array<Object> ls = (Array<Object>)obj;
		JSDesignableIterable iterable = (JSDesignableIterable)templateCtn.getChildren().$get(0);
		for(Object o : ls){
			JSDesignableIterable ins = iterable.Clone();
			list.addChild(ins);
			ins.setData(o);
		}
	}

	@Override
	public Array<Parameter> getParameters() {
		
		Array<Parameter> params = delegate.getParameters();
		
		/*AttributeParameter parameter = new AttributeParameter("PageSize","Page Size", "Basic");
		
		parameter.options.push(new Option("5","5"));
		parameter.options.push(new Option("10","10"));
		parameter.options.push(new Option("15","15"));
		parameter.options.push(new Option("20","20"));
		parameter.options.push(new Option("30","30"));
		parameter.options.push(new Option("50","50"));
		params.push(parameter);
		
		AttributeParameter selectOn = new AttributeParameter("SelectRow","Select On", "Basic");
		selectOn.options.push(new Option("click","Click"));
		selectOn.options.push(new Option("dblclick","Double Click"));
		params.push(selectOn);*/
		return params;
	}

	@Override
	public void addDesignable(Designable designable) {
		if(designable instanceof JSDesignableIterable){
			templateCtn.clearChildren();
			templateCtn.setRendered(false);
			templateCtn.addChild((JSContainer)designable);
		}else{
			throw new Error("Cannot add directly to iterator. Please add in the Iterable instead");
		}
		
		
	}

	@Override
	public void removeDesignable(Designable designable) {
		
		throw new Error("Cannot remove the Iterable from the Iterator");
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		throw new Error("Cannot move the Iterable");
	}

}
