package framework.builder.data;

import jsweet.lang.Array;
import jsweet.lang.Object;

public class DataStructure {

	private jsweet.lang.Object object;

	public DataStructure(Object object) {
		super();
		this.object = object;
	}

	public String getName() {
		return (String) object.$get("String");
	}

	public String getLabel() {
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

	public Array<DataField> getFields() {
		return (Array<DataField>) object.$get("fields");
	}

}
