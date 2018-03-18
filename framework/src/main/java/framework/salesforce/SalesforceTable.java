package framework.salesforce;

import def.js.JSON;
import framework.EventListener;
import framework.JSContainer;
import framework.builder.properties.ExtendedPropertyEditorPrompt;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.ExtAttributeParameter;
import framework.design.Parameter;
import framework.lightning.designables.JSDesignableTable;
import framework.lightning.table.TableColumn;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class SalesforceTable extends JSDesignableTable{

	private Array<Object> columns = new Array<Object>();
	public SalesforceTable(String name) {
		super(name);
		setAttribute("identifier", "lgt:crud-table");
	}
	
	public void setObjectType(String type) {
		applyParam("objectType", type);
	}
	
	
	public void setColumns(Array<Object> fields) {
		this.columns = fields;
		clearColumns();
		for (Object o : fields) {
			String name = (String) o.$get("name");
			String label = (String) o.$get("label");
			if (name.equalsIgnoreCase("name")) {
				TableColumn col = new TableColumn(name, name, label, true);
				addColumn(col);
			} else {
				TableColumn col = new TableColumn(name, name, label);
				addColumn(col);
			}
		}
		refreshColumns();
	}
	@Override
	@SuppressWarnings("unchecked")
	public void applyParam(String key, String value) {
		super.applyParam(key, value);
		
		if(key.equals("columns")){
			Array<Object> fields = (Array<Object>)JSON.parse(value);
			setColumns(fields);
		}
	}
	@Override
	public Array<Parameter> getParameters() {
		
		Array<Parameter> params = super.getParameters();
		AttributeParameter objectType = new AttributeParameter("objectType", "Object Type", "Basic");
		ExtAttributeParameter columns_ = new ExtAttributeParameter("columns", "Columns", "Basic"){

			@Override
			public ExtendedPropertyEditorPrompt getPrompt(Designable designable) {
				
				ExtendedPropertyEditorPrompt prompt = new ExtendedPropertyEditorPrompt("prompt", "Select Columns") {
					
					
					
					@Override
					public void setProperty(Designable designable, Parameter parameter) {
						// TODO Auto-generated method stub
						 
						FieldsList list = null;
						if(getBody().getChildren().length > 0){
							list = (FieldsList)getBody().getChildren().$get(0);
						}else{
							list = new FieldsList("list");
							list.setStyle("display", "block");
							list.getTable().setSelectable(true);
							getBody().addChild(list);
						}
						String type = designable.getAttribute("objectType");
						if(type == null || type.length() <= 0){
							type = "Account";
						}
						list.setType(type);
						list.getTable().setSelectedItems(columns);
					}
				};
				prompt.addButton("save", "Save").addCancelButton("Cancel");
				prompt.addEventListener(new EventListener() {
					
					@Override
					public void performAction(JSContainer source, Event evt) {
						FieldsList lis = (FieldsList)prompt.getBody().getChildren().$get(0);
						designable.applyParam("columns", JSON.stringify(lis.getTable().getSelectedItems()));
						
					}
				}, "save");
				return prompt;
			}
			
		};
		
		params.push(objectType,columns_);
		
		return params;
	}
	
	
	public Array<Object> getColumns(){
		return columns;
	}

}
