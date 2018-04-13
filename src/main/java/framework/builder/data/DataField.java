package framework.builder.data;


public class DataField {
	
	private jsweet.lang.Object object;


	public DataField(){
		object = new jsweet.lang.Object();
	}
	
	public DataField(jsweet.lang.Object o){
		object = o;
	}
	
	
	public Object getNative() {
		return object;
	}
	public String getName() {
		return (String)object.$get("name");
	}
	public String getType() {
		return (String)object.$get("type");
	}
	public String getLabel() {
		return (String)object.$get("label");
	}
	

	public String getFormat() {
		return (String)object.$get("format");
	}
	public Boolean getPrimaryKey() {
		return (Boolean)object.$get("primaryKey");
	}
	public Boolean getAutoNumber() {
		return (Boolean)object.$get("autoNumber");
	}
	public Integer getByteLength() {
		return (Integer)object.$get("byteLength");
	}
	public Boolean getCalculated() {
		return (Boolean)object.$get("calculated");
	}
	public Boolean getCreateable() {
		return (Boolean)object.$get("createable");
	}
	public Boolean getDefaultedOnCreate() {
		return (Boolean)object.$get("defaultedOnCreate");
	}
	public Boolean getDependentPicklist() {
		return (Boolean)object.$get("dependentPicklist");
	}
	public Boolean getFilterable() {
		return (Boolean)object.$get("filterable");
	}
	public Boolean getHtmlFormatted() {
		return (Boolean)object.$get("htmlFormatted");
	}
	public Boolean getNillable() {
		return (Boolean)object.$get("nillable");
	}
	public Boolean getRestrictedPicklist() {
		return (Boolean)object.$get("restrictedPicklist");
	}
	public Boolean getUnique() {
		return (Boolean)object.$get("unique");
	}
	public Boolean getUpdateable() {
		return (Boolean)object.$get("updateable");
	}
	public String getCalculatedFormula() {
		return (String)object.$get("calculatedFormula");
	}
	public String getDefaultValue() {
		return (String)object.$get("defaultValue");
	}
	public String getDefaultValueFormula() {
		return (String)object.$get("defaultValueFormula");
	}
	public Integer getDigits() {
		return (Integer)object.$get("digits");
	}
	public Integer getLength() {
		return (Integer)object.$get("length");
	}
	public String[] getPicklistValues() {
		return (String[])object.$get("picklistValues");
	}
	public Integer getPrecision() {
		return (Integer)object.$get("precision");
	}
	public String getRelationshipName() {
		return (String)object.$get("relationshipName");
	}
	public Integer getScale() {
		return (Integer)object.$get("scale");
	}
	public Boolean getSortable() {
		return (Boolean)object.$get("sortable");
	}
	
	public Object getValue(String field){
		Object o = object.$get(field);
		return o;
	}
	

}
