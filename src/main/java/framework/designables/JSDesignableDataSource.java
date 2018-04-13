package framework.designables;

import framework.EventListener;
import framework.JSContainer;
import framework.builder.data.RestDataSource;
import framework.builder.marshalling.Component;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Parameter;
import framework.lightning.ButtonGroup;
import framework.lightning.IconButton;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class JSDesignableDataSource extends JSContainer implements Designable, EventListener{
	

	private RestDataSource datasource = new RestDataSource();
	
	private DesignableDelegate dsDelegate = new DesignableDelegate(this);
	
	private IconButton previous = new IconButton("previous");
	
	public IconButton next = new IconButton("next");
	
	private double currentIndex = 0;
	
	public JSDesignableDataSource(String name) {
		super(name,"div");
		setVisible(false);
		addClass("table-paginator");
		ButtonGroup leftGrp  = new ButtonGroup("leftGrp");
		previous.getIcon().setIconName("left");
		previous.getIcon().setType("utility");
		
		next.getIcon().setIconName("right");
		next.getIcon().setType("utility");
		
		
		
		leftGrp.addButton(previous.setBorder(true));
		leftGrp.addButton(next.setBorder(true));
		addChild(leftGrp);
		
		previous.addEventListener(this, "click");
		next.addEventListener(this, "click");
	}
	
	
	@Override
	public void performAction(JSContainer source, Event evt) {
		
		
		//int currentPage = 0;
		if(source.getName().equals("previous")){
			if(currentIndex > 0){
				currentIndex = currentIndex -1;
				Array<Object> cache = datasource.getCached();
				if(cache != null){
					  cache.$get(currentIndex);
				}
			}
		}else if(source.getName().equals("next")){
				
				Array<Object> cache = datasource.getCached();
				if(cache != null){
					;
					if(cache.length > currentIndex){
						currentIndex = currentIndex +1;
					  cache.$get(currentIndex);
					}
				}
		}
	}


	@Override
	public void applyParam(String key, String value) {
		if(key.equalsIgnoreCase("url")){
			datasource.setUrl(value);
		}
	}

	@Override
	public Array<Designable> getDesignables() {
		return new Array<>();
	}

	@Override
	public Component getComponent() {
		return dsDelegate.getComponent();
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> parameters = dsDelegate.getParameters();
		
		AttributeParameter url = new AttributeParameter("url", "Url", "Basic");
		parameters.push(url);
		return parameters;
		
	}

	@Override
	public void addDesignable(Designable designable) {
		
	}

	@Override
	public void removeDesignable(Designable designable) {
		
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		
	}
	
	

}
