package framework.builder.data;

import java.util.List;

import framework.builder.properties.ItemSelector;
import framework.lightning.table.Table;
import framework.lightning.table.TableColumn;

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
		
		structure.getFields(new RemoteDataListener<List<DataField>>() {
			
			@Override
			public void dataLoaded(List<DataField> data) {
				setDataList(data);
			}
		});
	}

	@Override
	public boolean isActionColumn(Table table, Object value, int row, int column) {
		return column == labels.length;
	}

}
