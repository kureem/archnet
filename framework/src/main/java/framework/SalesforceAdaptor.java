package framework;

import jsweet.lang.Object;

public class SalesforceAdaptor implements Adaptor{
	public  void Execute(java.lang.Object src, String serviceName,Object request, ServiceCallback callback){
		
		JSContainer source = (JSContainer)src;
		JSContainer root = source.getRoot();
		java.lang.Object o = root;
		
		Object ss = (Object)o;
		
		Object helpersundar =  (Object)ss.$get("helper");
		
		//Function4<JSContainer, String, Object,Function Boolean> fn = helper.$get("serverCall");
		//fn.apply(source, serviceName, request);
		
		
	}
}
