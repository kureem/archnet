package framework.builder;

import static jsweet.dom.Globals.alert;
import static jsweet.dom.Globals.console;
import static jsweet.dom.Globals.window;
import static jsweet.lang.Globals.eval;

import framework.EventListener;
import framework.JSContainer;
import jsweet.dom.Event;
import jsweet.lang.Object;

public class BuilderEventListener implements EventListener {

	private String jsSource;
	
	private String name;
	
	private String type;
	
 
	public BuilderEventListener(String jsSource,String name,String type) {
		super();
		this.jsSource = jsSource;
		this.name = name;
		this.type = type;
	}
	
	public String getSource(){
		return jsSource;
	}
	
	public void setSource(String s){
		jsSource = s;
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		try{
		if (jsSource != null) {
			Object $scope = source.getScope();
			$scope.$set("xx", "");
			if((Boolean)window.$get("lightning")){
				String fn = name + "_" + type;
				JSContainer myapp = source.getRoot();
				myapp.getClass();
				eval("myapp.helper." + fn + "(source,evt);" );
			}else{
				eval(jsSource);
			}
		}
		}catch(Exception e){
			alert(e.getMessage());
			console.error(e);
		}
	}

}
