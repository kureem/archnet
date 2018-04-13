package framework.builder.data;

import framework.JSContainer;
import framework.core.BeanFactory;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class DataStructure extends File {

	private jsweet.lang.Object object;

	public DataStructure(Object object) {
		super(object);
		this.object = object;
	}

	public String getName() {
		return (String) object.$get("name");
	}

	public String getLabel() {
		return (String) object.$get("label");
	}

	public String getTitle() {
		return (String) object.$get("label");
	}
	public boolean isDeletable() {
		return (Boolean) object.$get("deletable");
	}

	public String getLabelPlural() {
		return (String) object.$get("labelPlural");
	}

	public Boolean isQueryable() {
		return (Boolean) object.$get("queryable");
	}

	public String getSearchable() {
		return (String) object.$get("searchable");
	}

	public Boolean isUpdateable() {
		return (Boolean) object.$get("updateable");
	}

	@SuppressWarnings("unchecked")
	public void getFields(JSContainer source, RemoteDataListener<Array<DataField>> listener) {
		
		Array<Object> cached = (Array<Object>)object.$get("fields");
		if(cached == null){
		
			BeanFactory.getInstance().getBeanOfType(ProjectService.class).getDataStructure(source,new RemoteDataListener<java.lang.Object>() {
				
				@Override
				public void dataLoaded(java.lang.Object data) {
					Object o = (Object)data;
					Array<DataField> fields = new Array<>();
					Array<Object> oFields = (Array<Object>)o.$get("fields");
					object.$set("fields", oFields);
					for(Object oField : oFields){
						fields.push(new DataField(oField));
					}
					
					listener.dataLoaded(fields);
				}
			}, getName());
		}else{
			
			Array<DataField> fields = new Array<>();
			object.$set("fields", cached);
			for(Object oField : cached){
				fields.push(new DataField(oField));
			}
			
			listener.dataLoaded(fields);
		}
	}

}
