package framework.lightning.designables;

import framework.builder.marshalling.Component;
import framework.builder.marshalling.MarshallUtil;
import framework.designables.JSDesignable;
import jsweet.dom.CustomEvent;

public class JSDesignableIterable extends JSDesignable{

	public JSDesignableIterable(String name, String tag) {
		super(name, tag);
	}

	@Override
	public String[] advancedEventTypes() {
		return new String[]{"DataReady"};
	}
	
	public void setData(Object data){
		super.setData(data);
		CustomEvent evt = new CustomEvent("DataReady");
		evt.$set("data", data);
		fireListener("DataReady", evt);
	}
	
	
	public JSDesignableIterable Clone(){
		Component cmp = MarshallUtil.extract(this);
		return (JSDesignableIterable)MarshallUtil.toDesignable(cmp,false,null);
	}

}
