package framework.salesforce;

import framework.EventListener;
import framework.JSContainer;
import framework.design.AttributeParameter;
import framework.design.Parameter;
import framework.lightning.ComboBox;
import framework.lightning.ListBoxItem;
import framework.lightning.designables.JSDesignableSOQL;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class SalesforceLookup extends ComboBox {

	private JSDesignableSOQL soql = new JSDesignableSOQL("soql");
	
	private boolean searching = false;

	public SalesforceLookup(String name) {
		super(name);
		setAttribute("identifier", "lgt:lookup");
		addChild(soql);
		soql.addEventListener(new EventListener() {

			@SuppressWarnings("unchecked")
			@Override
			public void performAction(JSContainer source, Event evt) {
				setOptions((Array<Object>) evt.$get("data"));
				setLoading(false);
				render();
				searching = false;
			}
		}, "success");

		addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {
				search(getTypedText());
			}
		}, "keyup");

		setObjectType("Account");
		setIconType("utility");
		setIconName("user");
		setMetadataProperty("Name");
		setLabelProperty("Name");
		setIdProperty("Id");
		listBox.getListBox().setStyle("width", "100%");
		listBox.getListBox().getChildren().$get(0).setStyle("width", "100%");
		
	}

	protected String getLabelProperty() {
		return getAttribute("labelProperty");
	}

	public void setObjectType(String type) {
		applyParam("objectType", type);
	}

	public void setIconType(String type) {
		applyParam("iconType", type);

	}

	public void setIconName(String name) {
		applyParam("iconName", name);
	}

	public void setMetadataProperty(String property) {
		applyParam("metadataProperty", property);
	}

	public void setLabelProperty(String property) {
		applyParam("labelProperty", property);
	}

	public void setIdProperty(String property) {
		applyParam("IdProperty", property);
	}

	protected ListBoxItem createItem(Object option) {
		String metap = getAttribute("metadataProperty");
		String labProp = getAttribute("labelProperty");
		String idProp = getAttribute("IdProperty");
		String id = (String) option.$get(idProp);
		String label = (String) option.$get(labProp);
		String meta = (String) option.$get(metap);
		ListBoxItem item = new ListBoxItem(id);
		item.setText(label);
		item.setIconName(getAttribute("iconName"));
		item.setIconType(getAttribute("iconType"));
		item.setMeta(meta);
		return item;
	}

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> params = super.getParameters();
		AttributeParameter objectType = new AttributeParameter("objectType", "Object Type", "Basic");
		AttributeParameter metadataProperty = new AttributeParameter("metadataProperty", "Metadata Property", "Basic");
		AttributeParameter labelProperty = new AttributeParameter("labelProperty", "Label Property", "Basic");
		AttributeParameter IdProperty = new AttributeParameter("IdProperty", "Id Property", "Basic");
		AttributeParameter iconName = new AttributeParameter("iconName", "Icon Name", "Basic");
		AttributeParameter iconType = new AttributeParameter("iconType", "Icon Type", "Basic");
		params.push(objectType,IdProperty, labelProperty, metadataProperty, iconName, iconType);
		return params;
	}

	private String includeField(Object uni,String query, String fieldName) {
		if(!uni.hasOwnProperty(fieldName)){
			if (fieldName != null && fieldName.trim().length() > 0) {
				uni.$set(fieldName, fieldName);
				return query = query + ", " + fieldName;
				
			}
		}
		return query;
	}

	public void search(String term) {
		if(!searching){
			String metap = getAttribute("metadataProperty");
			String labProp = getAttribute("labelProperty");
			String idProp = getAttribute("IdProperty");
	
			Object uni = new Object();
			uni.$set("Id", "Id");
			String query = "SELECT Id";
			query = includeField(uni,query, metap);
			query = includeField(uni,query, labProp);
			query = includeField(uni,query, idProp);
			query = query + " FROM " + getAttribute("objectType");
			if(term != null && term.trim().length() > 0)
				query = query + " WHERE " + labProp + " LIKE '" + term + "%'";
			
			soql.setQuery(query);
			soql.setLimit(5);
				soql.execute();
			searching = true;
			setLoading(true);
		}
	}
	
	public void setValue(String value) {

	}

}
