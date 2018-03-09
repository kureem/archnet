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
		
		addComponents(new Component("zs:http", "REST", "Rest Webservice"));
		addComponents(new Component("zs:service", "SERV", "Remote Service"));
	}

}
