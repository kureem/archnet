package framework.builder.libraries;

import framework.EventListener;
import framework.JSContainer;
import framework.Renderable;
import framework.builder.data.DataField;
import framework.builder.data.DataStructure;
import framework.builder.data.RemoteDataListener;
import framework.lightning.Card;
import framework.lightning.Grid;
import framework.lightning.IconButton;
import framework.lightning.SvgIcon;
import framework.lightning.designables.JSDesignableTable;
import framework.lightning.table.DefaultTableCellRenderer;
import framework.lightning.table.DefaultTableColumnModel;
import framework.lightning.table.Table;
import framework.lightning.table.TableCellRenderer;
import framework.lightning.table.TableColumn;
import framework.lightning.table.TableModel;
import framework.lightning.table.TableEvent;
import jsweet.dom.Event;
import jsweet.lang.Array;

public class DataItem extends Card implements TableCellRenderer {

	private JSContainer title = new JSContainer("a").setAttribute("href", "javascript:void(0);")
			.addClass("slds-card__header-link slds-truncate");

	private SvgIcon figure = new SvgIcon("figure");

	private JSDesignableTable fields = new JSDesignableTable("fields");

	private DataStructure dataStructure = null;

	private DefaultTableCellRenderer delegate = new DefaultTableCellRenderer();

	protected String[] labels;

	protected String[] labelsFields;

	private Array<DataField> dataFields;

	public DataItem(String name, DataStructure structure) {
		this(name, structure, new String[] { "Name", "Label", "Type", "Calculated", "Creatable", "Updatable",
				"Filterable", "Sortable", "Nillable", "Unique", "Length"

		}, new String[] { "name", "label", "type", "calculated", "createable", "updateable", "filterable", "sortable",
				"nillable", "unique", "length" });
	}

	public DataItem(String name, DataStructure structure, String[] labels, String[] fields) {
		super(name, "div");
		this.labels = labels;
		this.labelsFields = fields;
		addClass("data-item");

		Grid grid = new Grid("ds", "div");
		grid.setAlignSpread(true);
		grid.addClass("slds-grid_vertical-align-center");
		getHeaderMedia().addBody(grid);
		JSContainer colLeft = new JSContainer("div");
		JSContainer colRight = new JSContainer("div");
		grid.addChild(colLeft);
		grid.addChild(colRight);

		JSContainer h2 = new JSContainer("h2");
		h2.addChild(title);
		colLeft.addChild(h2);

		figure.setIconName("contact");
		figure.setType("standard");
		figure.setTag("span");
		figure.addClass("slds-icon_container slds-icon-standard-contact");
		figure.setSvgClass("slds-icon slds-icon_small");
		getHeaderMedia().addFigure(figure);
		getBody().addChild(this.fields);
		setDataStructure(structure);
	}

	public void addOnFieldSeletedListener(FileSelectedListener l) {
		DataItem item = this;
		
		fields.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				TableEvent e = (TableEvent)evt;
				DataField field = dataFields.$get(e.firstIndex);
				l.onItemSelected(field, item);
			}
		}, "selectRows");
		
		/*fields.addRowsSelectionListener(new TableEvent() {

			@Override
			public void onSelectRow(JSContainer source, Event event, Table table, double firstIndex, double lastIndex) {

				DataField field = dataFields.$get(firstIndex);
				l.onItemSelected(field, item);
			}
		});
*/	}

	public void setDataStructure(DataStructure structure) {
		this.dataStructure = structure;
		title.setHtml(structure.getLabel());
		DefaultTableColumnModel cmodel = new DefaultTableColumnModel();
		for (int i = 0; i < labels.length; i++) {
			TableColumn col = new TableColumn(labelsFields[i], labelsFields[i], labels[i]);
			cmodel.addColumn(col);
			if (labelsFields[i].equals("name")) {
				col.setWidth("200px");
			}

			if (labelsFields[i].equals("label")) {
				col.setWidth("200px");
			}

			if (labelsFields[i].equals("type")) {
				col.setWidth("75px");
			}
		}

		TableColumn actions = new TableColumn("actions", "actins", " ");
		actions.setWidth("20px");
		// actions.setStyle("width", "20px");

		cmodel.addColumn(actions);
		fields.setTableColumnModel(cmodel);
		fields.refreshColumns();

		fields.setTableCellRenderer(this);
		fields.setStriped(true);
		fields.setColBordered(true);
		fields.setSelectable(true);

		dataStructure.getFields(this,new RemoteDataListener<Array<DataField>>() {

			@Override
			public void dataLoaded(Array<DataField> data_) {

				dataFields = data_;
				fields.setModel(new TableModel() {

					@Override
					public void setValueAt(Object aValue, int rowIndex, int columnIndex) {

					}

					@Override
					public boolean isCellEditable(int rowIndex, int columnIndex) {
						return false;
					}

					@Override
					public Object getValueAt(int rowIndex, int columnIndex) {

						if (columnIndex < labels.length) {
							return dataFields.$get(rowIndex).getValue(labelsFields[columnIndex]);
						} else {
							return dataFields.$get(rowIndex).getName();
						}
					}

					@Override
					public double getRowCount() {
						return dataFields.length;
					}

				});

				fields.refreshData();
				fields.render();
			}
		});

	}

	@Override
	public Renderable getComponent(Table table, Object value, int row, int column) {
		if (column == labels.length) {
			IconButton btn = new IconButton("sdfs");
			btn.setBorderFilled(true);
			btn.addClass("slds-button_icon-x-small");
			SvgIcon icon = new SvgIcon("edit");
			icon.setSvgClass("slds-button__icon slds-button__icon_hint slds-button__icon_small");
			icon.setType("utility");
			icon.setIconName("right");
			btn.setIcon(icon);

			return btn;

		} else {
			return delegate.getComponent(table, value, row, column);
		}
	}

}
