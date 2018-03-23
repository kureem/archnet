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
				callback.consume(errorThrown, jqXHR.status);
				return null;
			} 
			
			@Override
			public java.lang.Object success(java.lang.Object data, String textStatus, JQueryXHR jqXHR) {
				//return super.success(data, textStatus, jqXHR);
				callback.consume(data, jqXHR.status);
				return null;
			}
		};
		
		settings.type = "POST"; 
		//settings.contentType = "application/json";
		/*if(serviceName.startsWith("update") || serviceName.startsWith("create") || serviceName.startsWith("save")){
			settings.type = "POST";
		}*/
		
		settings.data = (java.lang.Object)request;
		settings.url = "/service/" + serviceName;
		$.ajax(settings);
		
	
		
		
		/*$.get("/service/" + serviceName, (java.lang.Object)request, new TriFunction<java.lang.Object, String, JQueryXHR, java.lang.Object>() {

			@Override
			public java.lang.Object apply(java.lang.Object t, String u, JQueryXHR v) {
				callback.consume(t, v.status);
				return true;
			}
		}, "json").onerror = (e)->{
			
			alert(e);
			return true;
		};*/

		
	}
}
