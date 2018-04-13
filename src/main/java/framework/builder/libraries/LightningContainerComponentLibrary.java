package framework.builder.libraries;

import framework.builder.Component;
import framework.builder.ComponentsLibrary;

public class LightningContainerComponentLibrary extends ComponentsLibrary{

	public LightningContainerComponentLibrary() {
		super("Containers");
		
		addComponents(new Component("lgt:bcr", "BRDC", "BreadCrumb"));
		addComponents(new Component("lgt:bcr-item", "BRDCI", "BreadCrumb Item"));
		
		 
		addComponents(new Component("lgt:grid", "GRID", "Grid"));
		addComponents(new Component("lgt:col", "COL", "Column"));
		
		
		addComponents(new Component("lgt:panel", "PANE", "Panel"));
		addComponents(new Component("lgt:panel-section", "SEC", "Panel Section"));
		
		
		
		
		
		addComponents(new Component("lgt:acc", "ACC", "Accordion"));
		addComponents(new Component("lgt:acc-item", "ACCI", "Accordion Item"));
		
		addComponents(new Component("lgt:tabs", "TABS", "Tabs"));
		addComponents(new Component("lgt:tab-item", "TABSI", "Tab Item"));
		
		addComponents(new Component("zs:cardlayout", "CRD", "Card Layout"));
		addComponents(new Component("zs:cardlayout-item", "CRDI", "Card Layout Item"));
		
		addComponents(new Component("lgt:popover", "POPOVER", "Pop Over"));
		addComponents(new Component("lgt:popover-footer-item", "LSTBXFI", "List Box Footer Item"));
		addComponents(new Component("lgt:listbox", "LSTBX", "List Box"));
		addComponents(new Component("lgt:listbox-item", "LSTBXI", "List Box Item"));
		
		addComponents(new Component("lgt:modal", "MODAL", "Modal"));
		
		addComponents(new Component("zs:http", "REST", "Rest Webservice"));
		addComponents(new Component("zs:service", "SERV", "Remote Service"));
		addComponents(new Component("lgt:soql", "SOQL", "Salesforce Query"));
		
		addComponents(new Component("lgt:crud", "CRUD", "Salesforce Crud"));
		addComponents(new Component("lgt:crud-table", "CRUD-TBL", "Salesforce Crud Table"));
		addComponents(new Component("lgt:crud-form", "CRUD-FRM", "Salesforce Crud Form"));
	}

}
