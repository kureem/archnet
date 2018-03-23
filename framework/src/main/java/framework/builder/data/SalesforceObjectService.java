package framework.builder.data;

import framework.ServiceCallback;

public interface SalesforceObjectService {

	public void types(Object component,ServiceCallback callback);

	public void describe(Object component,String type,ServiceCallback callback);

	public void query(Object component,String query, int offset, int max,ServiceCallback callback);

	public void create(Object component,String name, jsweet.lang.Object data,ServiceCallback callback);

	public void update(Object component,String name, String objectId, jsweet.lang.Object data,ServiceCallback callback);

	public void delete(Object component,String name, String objectId,ServiceCallback callback);

}
