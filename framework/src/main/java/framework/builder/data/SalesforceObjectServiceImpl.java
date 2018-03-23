package framework.builder.data;

import def.js.JSON;
import framework.Adaptor;
import framework.ServiceCallback;
import framework.core.BeanFactory;

public class SalesforceObjectServiceImpl implements SalesforceObjectService{
	
	private Adaptor adaptor = BeanFactory.getInstance().getBeanOfType(Adaptor.class);

	@Override
	public void types(Object component, ServiceCallback callback) {
		adaptor.Execute(component, "types", new jsweet.lang.Object(), callback);
	}

	@Override
	public void describe(Object component, String type, ServiceCallback callback) {
		jsweet.lang.Object req = new jsweet.lang.Object();
		req.$set("type", type);
		adaptor.Execute(component, "describe", req, callback);
		
	}

	@Override
	public void query(Object component, String query, int offset, int max, ServiceCallback callback) {
		jsweet.lang.Object req = new jsweet.lang.Object();
		req.$set("query", query);
		req.$set("offset", offset);
		req.$set("max", max);
		adaptor.Execute(component, "query", req, callback);
		
	}

	@Override
	public void create(Object component, String name, jsweet.lang.Object data, ServiceCallback callback) {
		jsweet.lang.Object req = new jsweet.lang.Object();
		req.$set("name", name);
		req.$set("fields", JSON.stringify(data));
		adaptor.Execute(component, "create", req, callback);
		
	}

	@Override
	public void update(Object component, String name, String objectId, jsweet.lang.Object data,
			ServiceCallback callback) {
		
		jsweet.lang.Object req = new jsweet.lang.Object();
		req.$set("objectType", name);
		req.$set("fields", JSON.stringify(data));
		req.$set("Id", objectId);
		adaptor.Execute(component, "update", req, callback);
		
	}

	@Override
	public void delete(Object component, String name, String objectId, ServiceCallback callback) {
		jsweet.lang.Object req = new jsweet.lang.Object();
		req.$set("name", name);
		req.$set("objectId", objectId);
		adaptor.Execute(component, "delete", req, callback);
		
	}

	

	

}
