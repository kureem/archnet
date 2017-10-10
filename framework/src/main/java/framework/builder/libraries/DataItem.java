package framework.builder.libraries;

import static def.dom.Globals.alert;

import framework.EventListener;
import framework.JSContainer;
import framework.JSInput;
import framework.JSOption;
import framework.JSSelect;
import framework.Renderable;
import framework.builder.data.DataEnvironment;
import framework.builder.data.DataField;
import framework.builder.data.DataStructure;
import framework.builder.data.DataType;
import framework.core.BeanFactory;
import framework.lightning.Button;
import framework.lightning.Card;
import framework.lightning.DropDown;
import framework.lightning.DropDownItem;
import framework.lightning.DropDownTrigger;
import framework.lightning.Grid;
import framework.lightning.Icon;
import framework.lightning.IconButton;
import framework.lightning.table.DefaultTableCellRenderer;
import framework.lightning.table.DefaultTableColumnModel;
import framework.lightning.table.Table;
import framework.lightning.table.TableCellRenderer;
import framework.lightning.table.TableColumn;
import framework.lightning.table.TableModel;
import jsweet.dom.Event;

public class DataItem extends Card implements TableModel, TableCellRenderer{

	private JSContainer title = new JSContainer("a").setAttribute("href", "javascript:void(0);").addClass("slds-card__header-link slds-truncate");
	
	
	private Icon figure = new Icon("figure");
	
	
	private Table fields = new Table("fields");
	
	
	private DataStructure dataStructure = null;
	
	private DefaultTableCellRenderer delegate = new DefaultTableCellRenderer();
	
	
	private JSInput editTitle = new JSInput("editTitle");
	
	private Button addNew = new Button("addNew").setLabel("Add Field");
	
	private Button deleteStructure = new Button("delete").setLabel("Delete Structure");
	
	//private DropDownItem delete = new DropDownItem("delete", "Delete");
	
	//private DropDownItem edit = new DropDownItem("edit", "Edit");
	
	private boolean addNewMode = false;
	
	boolean editMode = false;
	
	private DataEnvironment dataEnvironment;
	
	
	public DataItem(String name, DataStructure structure) {
		super(name, "div");
		addClass("data-item");
		dataEnvironment = BeanFactory.getInstance().getBeanOfType(DataEnvironment.class);
		addNew.addClass("slds-button_small");
		
		addNew.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				if(!addNewMode && !editMode){
					addNewMode = true;
					addNew.setDisabled(true);
					addNewRow();
				}
			}
		}, "click");
		
		
		deleteStructure.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				dataEnvironment.deleteStructure(dataStructure.name);
				setVisible(false);
			}
		}, "click");
		
		Grid grid = new Grid("ds","div");
		grid.setAlignSpread(true);
		grid.addClass("slds-grid_vertical-align-center");
		getHeaderMedia().addBody(grid);
		JSContainer colLeft = new JSContainer("div");
		JSContainer colRight = new JSContainer("div");
		grid.addChild(colLeft);
		grid.addChild(colRight);
		
		JSContainer h2 = new JSContainer("h2");
		editTitle.setVisible(false);
		h2.addChild(editTitle);
		h2.addChild(title);
		colLeft.addChild(h2);
		
		title.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				title.setVisible(false);
				editTitle.setVisible(true);
				editMode = true;
				addNew.setVisible(false);
				deleteStructure.setVisible(false);
			}
		}, "click");
		
		
		editTitle.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				String newTitle = editTitle.getValue();
				dataStructure.name = newTitle;
				dataStructure.label = newTitle;
				setDataStructure(dataStructure);
				title.setVisible(true);
				editTitle.setVisible(false);
				addNew.setVisible(true);
				deleteStructure.setVisible(true);
				editMode = false;
			}
		}, "blur");
		
		addNew.setState(Button.STATE_BRAND);
		colRight.addChild(addNew);
		deleteStructure.setState(Button.STATE_DESTRUCTIVE);
		colRight.addChild(deleteStructure);
		
		figure.setIconName("contact");
		figure.setType("standard");
		figure.setTag("span");
		figure.addClass("slds-icon_container slds-icon-standard-contact");
		figure.setSvgClass("slds-icon slds-icon_small");
		getHeaderMedia().addFigure(figure);
		getBody().addChild(fields);
		setStyle("width", "450px");
		setDataStructure(structure);
		
	}
	
	public void deleteField(int row){
		dataStructure.fields.remove(row);
		dataEnvironment.saveStructure(dataStructure);;
		setDataStructure(dataStructure);
	}
	
	public void save(int row){
		if(row == -1){
			JSContainer tr = fields.getBody().getChildren().get(fields.getBody().getChildren().size()-1);
			JSInput name = (JSInput)tr.getChildren().get(0).getChildren().get(0);
			JSInput label = (JSInput)tr.getChildren().get(1).getChildren().get(0);
			JSSelect type = (JSSelect)tr.getChildren().get(2).getChildren().get(0);
			
			DataField field = new DataField();
			field.label = label.getValue();
			field.name = name.getValue();
			field.type = type.getValue();
			dataStructure.fields.add(field);
			setDataStructure(dataStructure);
			addNewMode = false;
			addNew.setDisabled(false);
			dataEnvironment.saveStructure(dataStructure);
		}else{
			JSContainer tr = fields.getBody().getChildren().get(row);
			JSInput name = (JSInput)tr.getChildren().get(0).getChildren().get(0);
			JSInput label = (JSInput)tr.getChildren().get(1).getChildren().get(0);
			JSSelect type = (JSSelect)tr.getChildren().get(2).getChildren().get(0);
			
			DataField field = dataStructure.fields.get(row); // new DataField();
			field.label = label.getValue();
			field.name = name.getValue();
			field.type = type.getValue();
			//dataStructure.fields.add(field);
			setDataStructure(dataStructure);
			dataEnvironment.saveStructure(dataStructure);
			editMode = false;
			addNew.setDisabled(false);
		}
		
	}
	
	
	
	
	
	public void addNewRow(){
		JSContainer body = fields.getBody();
		
		JSContainer tr = new JSContainer("tr");
		tr.addClass(" slds-hint-parent");
			
		JSInput name = new JSInput("name");
		JSInput label = new JSInput("label");
		JSSelect type = new JSSelect("type");
		for(String stype : DataType.Types){
			type.addOption(new JSOption(stype, stype));
		}
		IconButton btn = new IconButton("sdfs");
		btn.setBorderFilled(true);
		btn.addClass("slds-button_icon-x-small");
		Icon icon = new Icon("edit");
		icon.setSvgClass("slds-button__icon slds-button__icon_hint slds-button__icon_small");
		icon.setType("utility");
		btn.setIcon(icon);
		btn.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				save(-1);
				// TODO Auto-generated method stub
				
			}
		}, "click");
		
		JSContainer td = new JSContainer("td");
		td.addClass(" slds-cell-wrap");
		
		JSContainer td1 = new JSContainer("td");
		td.addClass(" slds-cell-wrap");
		
		JSContainer td2 = new JSContainer("td");
		td.addClass(" slds-cell-wrap");
		
		JSContainer td3 = new JSContainer("td");
		td.addClass(" slds-cell-wrap");
	
		tr.addChild(td);
		tr.addChild(td1);
		tr.addChild(td2);
		tr.addChild(td3);
		
		
		td.addChild(name);
		td1.addChild(label);
		td2.addChild(type);
		td3.addChild(btn);
		
		body.addChild(tr);
		
	}
	
	public void editRow(int row){
		editMode=true;
		JSInput name = new JSInput("name");
		JSInput label = new JSInput("label");
		JSSelect type = new JSSelect("type");
		for(String stype : DataType.Types){
			type.addOption(new JSOption(stype, stype));
		}
		IconButton btn = new IconButton("sdfs");
		btn.setBorderFilled(true);
		btn.addClass("slds-button_icon-x-small");
		Icon icon = new Icon("edit");
		icon.setSvgClass("slds-button__icon slds-button__icon_hint slds-button__icon_small");
		icon.setType("utility");
		btn.setIcon(icon);
		btn.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				save(row);
				// TODO Auto-generated method stub
				
			}
		}, "click");
		name.setValue(dataStructure.fields.get(row).name);
		label.setValue(dataStructure.fields.get(row).label);
		type.setValue(dataStructure.fields.get(row).type);
		
		JSContainer tr= fields.getRow(row);
		tr.getChildren().clear();
		tr.setRendered(false);
		JSContainer td = new JSContainer("td");
		td.addClass(" slds-cell-wrap");
		
		JSContainer td1 = new JSContainer("td");
		td.addClass(" slds-cell-wrap");
		
		JSContainer td2 = new JSContainer("td");
		td.addClass(" slds-cell-wrap");
		
		JSContainer td3 = new JSContainer("td");
		td.addClass(" slds-cell-wrap");
	
		tr.addChild(td);
		tr.addChild(td1);
		tr.addChild(td2);
		tr.addChild(td3);
		
		
		td.addChild(name);
		td1.addChild(label);
		td2.addChild(type);
		td3.addChild(btn);
	}
	  
	
	public void setDataStructure(DataStructure structure){
		this.dataStructure = structure;
		title.setHtml(structure.label);
		editTitle.setValue(structure.label);
		DefaultTableColumnModel cmodel = new DefaultTableColumnModel();
		TableColumn name = new TableColumn("name", "name", "Name");
		TableColumn label = new TableColumn("label", "label", "Label");
		TableColumn type = new TableColumn("type", "type", "Type");
		TableColumn actions = new TableColumn("actions", "actins", " ");
		actions.setStyle("width", "10%");
		
		cmodel.addColumn(name);
		cmodel.addColumn(label);
		cmodel.addColumn(type);
		cmodel.addColumn(actions);
		fields.setTableCellRenderer(this);
		fields.setStriped(true);
		fields.setColBordered(true);
		fields.setModel(this);
		fields.setTableColumnModel(cmodel);
		fields.refreshColumns();
		fields.refreshData();
		
	}


	@Override
	public int getRowCount() {
		
		return dataStructure.fields.size();
	}


	@Override
	public int getColumnCount() {
		return 4;
	}


	@Override
	public String getColumnName(int columnIndex) {
		return "";
	}


	@Override
	public String getColumnType(int columnIndex) {
		return "string";
	}


	@Override
	public boolean isCellEditable(int rowIndex, int columnIndex) {
		return false;
	}


	@Override
	public Object getValueAt(int rowIndex, int columnIndex) {
		if(columnIndex == 0){
			return dataStructure.fields.get(rowIndex).name;
		}else if(columnIndex == 1){
			return dataStructure.fields.get(rowIndex).label;
		}else if(columnIndex == 2){
			return dataStructure.fields.get(rowIndex).type;
		}else{
			return dataStructure.fields.get(rowIndex).name;
		}
	}


	@Override
	public void setValueAt(Object aValue, int rowIndex, int columnIndex) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public Renderable getComponent(Table table, Object value, int row, int column) {
		if(column == 3){
			
			IconButton btn = new IconButton("sdfs");
			btn.setBorderFilled(true);
			btn.addClass("slds-button_icon-x-small");
			Icon icon = new Icon("edit");
			icon.setSvgClass("slds-button__icon slds-button__icon_hint slds-button__icon_small");
			icon.setType("utility");
			icon.setIconName("down");
			btn.setIcon(icon);
			
			DropDown dp = new DropDown("dp");
			DropDownItem editItem = new DropDownItem("edit", "Edit");
			DropDownItem deleteItem = new DropDownItem("delete", "Delete");
			dp.addItem(editItem);
			dp.addItem(deleteItem);
			editItem.setAttribute("row", row + "");
			deleteItem.setAttribute("row", row + "");
			editItem.addEventListener(new EventListener() {
				
				@Override
				public void performAction(JSContainer source, Event evt) {
					int rrow = Integer.parseInt(source.getAttribute("row"));
					editRow(rrow);
					
				}
			}, "click");
			
			
			deleteItem.addEventListener(new EventListener() {
				
				@Override
				public void performAction(JSContainer source, Event evt) {
					int rrow = Integer.parseInt(source.getAttribute("row"));
					deleteField(rrow);
				}
			}, "click");
			
			DropDownTrigger trigger = new DropDownTrigger((String)value, btn, dp);
			
			return trigger;
			
		}else{
			return delegate.getComponent(table, value, row, column);
		}
		// TODO Auto-generated method stub
	}

}
