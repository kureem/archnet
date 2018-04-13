package framework.builder.data;

import framework.builder.properties.ItemSelector;
import framework.lightning.table.Table;
import framework.lightning.table.TableColumn;
import jsweet.lang.Array;

public class FieldSelector extends ItemSelector<DataField> {

	private String[] labels = new String[] { "Name", "Label", "Type" };
	
	private String[] fields = new String[] { "name", "label", "type" };
		
	public FieldSelector(String name, DataStructure structure) {
		super(name);
		
		for(int i = 0; i < labels.length;i++){
			TableColumn col = new TableColumn(fields[i], fields[i], labels[i]);
			addColumn(col);
		}
		
		TableColumn actions = new TableColumn("actions", "actins", " ");
		actions.setWidth("20px");
		
		structure.getFields(this,new RemoteDataListener<Array<DataField>>() {
			
			@Override
			public void dataLoaded(Array<DataField> data) {
				setDataList(data);
			}
		});
	}

	@Override
	public boolean isActionColumn(Table table, Object value, int row, int column) {
		return column == labels.length;
	}

}
