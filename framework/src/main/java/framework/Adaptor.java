package framework;

import jsweet.lang.Object;

public interface Adaptor {
	
	public  void Execute(java.lang.Object component, String serviceName,Object request, ServiceCallback callback);

}
