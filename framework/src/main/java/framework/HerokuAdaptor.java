package framework;

import static def.jquery.Globals.$;

import def.jquery.JQueryXHR;
import jsweet.lang.Object;
import jsweet.util.function.TriFunction;

public class HerokuAdaptor implements Adaptor{

	public  void Execute(java.lang.Object component, String serviceName,Object request, ServiceCallback callback){
		
		$.get("/service/dispatch/" + serviceName, (java.lang.Object)request, new TriFunction<java.lang.Object, String, JQueryXHR, java.lang.Object>() {

			@Override
			public java.lang.Object apply(java.lang.Object t, String u, JQueryXHR v) {
				callback.apply(t, v.status);
				return true;
			}
		}, "json");

		
	}
}
