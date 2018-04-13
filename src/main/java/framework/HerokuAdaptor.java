package framework;

import static def.jquery.Globals.$;

import def.jquery.JQueryAjaxSettings;
import def.jquery.JQueryXHR;
import jsweet.lang.Object;

public class HerokuAdaptor implements Adaptor{

	public  void Execute(java.lang.Object component, String serviceName,Object request, ServiceCallback callback){
		JQueryAjaxSettings settings = new JQueryAjaxSettings(){
			@Override
			public java.lang.Object error(JQueryXHR jqXHR, String textStatus, String errorThrown) {
				callback.error(errorThrown, jqXHR.status);
				return null;
			} 
			
			@Override
			public java.lang.Object success(java.lang.Object data, String textStatus, JQueryXHR jqXHR) {
				callback.consume(data, jqXHR.status);
				return null;
			}
		};
		
		settings.type = "POST"; 
		
		settings.data = (java.lang.Object)request;
		settings.url = "/service/" + serviceName;
		$.ajax(settings);
		

		
	}
}
