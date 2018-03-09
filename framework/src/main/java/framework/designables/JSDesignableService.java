package framework.designables;

import static def.jquery.Globals.$;

import framework.Adaptor;
import framework.ServiceCallback;
import framework.core.BeanFactory;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import jsweet.lang.Array;
import jsweet.lang.JSON;
import jsweet.lang.Object;

public class JSDesignableService extends JSDesignableDataProvider implements Designable {

	public JSDesignableService() {
		super("Service");
	}



	public void execute() {
		String serviceName = getAttribute("service");
		String method = getAttribute("method");
		String payload = getAttribute("payload");
		Object opl = new Object();
		if(payload == null || payload.length() ==0){
			payload = "{}";
		}else{
			opl = (Object)JSON.parse(payload);
		}
		opl.$set("method", method);
		BeanFactory.getInstance().getBeanOfType(Adaptor.class).Execute(this, serviceName, opl, new ServiceCallback() {
			
			@Override
			public boolean apply(java.lang.Object response, double statusCode) {
				fireListener("success", new DataEvent("success",(Object)response));
				return true;
			}
		});
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> params = delegate.getParameters();

		AttributeParameter url = new AttributeParameter("service", "Service", "Basic");
		AttributeParameter method = new AttributeParameter("method", "Method", "Basic");
		
		AttributeParameter payload = new AttributeParameter("payload", "Payload", "Basic");
		
		params.push(url, method,payload);

		return params;
	}

	
}
