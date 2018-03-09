package framework.designables;

import static def.jquery.Globals.$;

import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import jsweet.dom.CustomEvent;
import jsweet.lang.Array;
import jsweet.lang.JSON;

public class JSDesignableHTTP extends JSDesignableDataProvider implements Designable {


	public JSDesignableHTTP() {
		super("Http Connector");
		applyParam("method", "GET");
	}

	

	public void execute() {
		String url = getAttribute("url");
		String method = getAttribute("method");
		String payload = getAttribute("payload");
		
		if(url != null && method != null && method.length() > 0 && url.length() > 0){
			if(payload == null || payload.length() <=0){
				payload = "{}";
			}
			
			
			if ("get".equalsIgnoreCase(method)) {
				$.get(url, JSON.parse(payload), (a, b, c) -> {
					//DataEvent evt = new DataEvent("success",(jsweet.lang.Object)a);
					CustomEvent evt = new CustomEvent("success");
					evt.$set("data", a);
					fireListener("success",evt );
					return true;
				});
			} else {
				$.post(url, JSON.parse(payload), (a, b, c) -> {
					DataEvent evt = new DataEvent("success",(jsweet.lang.Object)a);
					fireListener("success",evt );
					return true;
				});
			}
		}
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> params = delegate.getParameters();

		AttributeParameter url = new AttributeParameter("url", "Url", "Basic");
		AttributeParameter method = new AttributeParameter("method", "Method", "Basic");
		method.options.push(new Option("GET", "GET"));
		method.options.push(new Option("POST", "POST"));
		AttributeParameter payload = new AttributeParameter("payload", "Payload", "Basic");
		
		params.push(url, method,payload);

		return params;
	}


}
