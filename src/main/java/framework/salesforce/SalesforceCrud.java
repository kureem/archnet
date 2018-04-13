package framework.salesforce;

import framework.DndAble;
import framework.EventListener;
import framework.JSContainer;
import framework.MouseEventAble;
import framework.builder.BuilderEventListener;
import framework.builder.marshalling.BuilderEvent;
import framework.builder.marshalling.Component;
import framework.builder.marshalling.MarshallUtil;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Parameter;
import framework.designables.DesignableDelegate;
import framework.lightning.Col;
import framework.lightning.Grid;
import framework.lightning.Media;
import framework.lightning.SvgIcon;
import framework.lightning.designables.JSDesignableSOQL;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class SalesforceCrud extends JSContainer implements Designable ,MouseEventAble, DndAble {

	private SalesforceTable table = new SalesforceTable("table");

	private SalesforceForm form = new SalesforceForm();

	private JSDesignableSOQL soql = new JSDesignableSOQL("soql");

	private JSContainer listPanel = new JSContainer("div");
	
	private JSContainer detailPanel = new JSContainer("div");

	private String objectType = "Account";
	
	private JSContainer pageHeader = new JSContainer("div");
	
	
	

	
	private DesignableDelegate delegate = new DesignableDelegate(this);

	public SalesforceCrud(String name) {
		super(name, "div");
		addChild(pageHeader);
		pageHeader.addClass("slds-page-header").addClass("slds-join-bottom");
		
		Grid grid = new Grid("grid", "div");
		pageHeader.addChild(grid);
		
		Col leftCol = new Col("leftCol");
		grid.addChild(leftCol);
		grid.addClass("slds-has-flexi-truncate");
		Media media = new Media("media");
		leftCol.addChild(media);
		media.getFigureContainer().addChild(new SvgIcon("icon"));
		
		
		addChild(pageHeader);
		addChild(listPanel);
		addChild(detailPanel);
		setAttribute("identifier", "lgt:crud");
		listPanel.addChild(table);
		listPanel.addChild(soql);
		detailPanel.addChild(form);
		soql.addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {
				@SuppressWarnings("unchecked")
				Array<Object> data = (Array<Object>) evt.$get("data");
				table.setTableData(data);
				showList();
				render();
			}
		}, "success");
		//addChild(form);
		table.addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {
				Object data = (Object) evt.$get("row");
				showDetail(data);
				
			}
		}, "showDetail");
		showList();
	}

	public void refresh() {
		Object fi = new Object();
		for (Object o : table.getColumns()) {
			String name = (String) o.$get("name");
			if (!fi.hasOwnProperty(name)) {
				fi.$set(name, o);
			}
		}
		for (Object o : form.getFields()) {
			String name = (String) o.$get("name");
			if (!fi.hasOwnProperty(name)) {
				fi.$set(name, o);
			}
		}
		String query = "SELECT Id";
		for (String key : Object.keys(fi)) {
			if (!key.equals("Id"))
				query = query + ", " + key;
		}
		query = query + " FROM " + objectType;
		soql.setQuery(query);

		soql.execute();

	}
	
	public void showDetail(Object data){
		
		form.setData(data);
		listPanel.setStyle("display", "none");
		detailPanel.setStyle("display", "block");
	}
	
	public void showList(){
		listPanel.setStyle("display", "block");
		detailPanel.setStyle("display", "none");
	}

	public void setObjectType(String type) {
		this.objectType = type;
		table.setObjectType(type);
		form.setObjectType(type);
	}

	public void setColumns(Array<Object> fields) {
		table.setColumns(fields);;
	}

	public void setFields(Array<Object> fields) {
		form.setFields(fields);
	}
	
	public void save(){
		form.save();
	}

	@Override
	public void applyParam(String key, String value) {
		delegate.applyParameter(key, value, true);
		
		if(key.equalsIgnoreCase("objectType")){
			setObjectType(value);
		}
	}

	@Override
	public Array<Designable> getDesignables() {
		return new Array<Designable>(table,form);
	}

	@Override
	public Component getComponent() {
		return delegate.getComponent();
	}
	

	@Override
	public Array<Parameter> getParameters() {
		
		Array<Parameter> params = delegate.getParameters();
		AttributeParameter objectType = new AttributeParameter("objectType", "Object Type", "Basic");

		
		params.push(objectType);
		
		return params;
	}

	@Override
	public void addDesignable(Designable designable) {
		if(designable instanceof SalesforceTable){
			mirrorCopy(designable, table);
			
		}else if(designable instanceof SalesforceForm){
			mirrorCopy(designable, form);
		}
		
	}
	
	protected void mirrorCopy(Designable source, Designable dest){
		Component c = MarshallUtil.extract(source);
		dest.getComponent().events = c.events;
		for(String key : Object.keys(c.parameters)){
			String val = (String)c.parameters.$get(key);
			if(val != null)
				dest.applyParam(key, val);
		}
		
		for(String key : Object.keys(c.styles)){
			dest.setStyle(key, (String)c.styles.$get(key));
		}
		
		for (BuilderEvent event : c.events) {
			//alert("evnt found");
			BuilderEventListener listener = new BuilderEventListener(event.source,event.name,event.type);
			dest.addEventListener(listener, event.type);
		}
	}

	@Override
	public void removeDesignable(Designable designable) {
		
	}

	@Override
	public void moveDesignable(Designable designable, int steps) {
		
	}

	

}
