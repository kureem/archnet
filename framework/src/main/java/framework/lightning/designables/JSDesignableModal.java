package framework.lightning.designables;

import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.lightning.Backdrop;
import framework.lightning.Modal;
import framework.lightning.ModalBody;
import framework.lightning.ModalFooter;
import jsweet.lang.Array;
import jsweet.lang.Error;

public class JSDesignableModal extends Modal implements Designable{
	
	private DesignableDelegate delegate = new DesignableDelegate(this);
	
	public JSDesignableModal(String name) {
		super(name, "");
		applyParam("title", "Modal Title");
		applyParam("showFooter", "true");
		applyParam("showHeader", "true");
		
		Backdrop bk = new Backdrop("f");
		bk.setStyle("z-index", "-1");
		addChild(bk);
		setBackdrop(bk);
		//open();
	}

	
	

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		if(key.equals("title")){
			setTitle(value);
		}else if(key.equals("size")){
			setSize(value);
		}else if(key.equals("showFooter")){
			getFooter().setVisible("true".equals(value));
		}else if(key.equals("showHeader")){
			getHeader().setVisible("true".equals(value));
		}
	}

	@Override
	public Array<Designable> getDesignables() {
		
		Array res = new Array();
		res.push(getBody(),getFooter());
		//Array arr = getContent().getChildren();
		return res;
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> params = delegate.getParameters();
		AttributeParameter title = new AttributeParameter("title", "Title", "Basic");
		
		AttributeParameter size = new AttributeParameter("size", "Size", "Basic");
		size.options.push(new Option("Normal", SIZE_NORMAL));
		size.options.push(new Option("Medium", SIZE_MEDIUM));
		size.options.push(new Option("Large", SIZE_LARGE));
		
		AttributeParameter showHeader = new AttributeParameter("showHeader", "Show Header", "Basic");
		showHeader.options.push(new Option("",""));
		
		AttributeParameter showFooter = new AttributeParameter("showFooter", "Show Footer", "Basic");
		showFooter.options.push(new Option("",""));
		
		params.push(title,size,showHeader,showFooter);
		
		return params;
	}

	@Override
	public void addDesignable(Designable designable) {
		if(designable instanceof ModalBody){
			setBody((ModalBody)designable);
		}else if(designable instanceof ModalFooter){
			setFooter((ModalFooter)designable);
		}else{
			throw new Error("Can only add component of Modal Body or Modal Footer is this container");
		}
		
		
	}

	@Override
	public void removeDesignable(Designable designable) {
	
		throw new Error("Cannot delete component from this container. Rather delete from the body or footer. Or consider hiding the body and or footer");
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		
	}

}
