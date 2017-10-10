package framework.builder.libraries;

import static def.dom.Globals.prompt;

import framework.EventListener;
import framework.JSContainer;
import framework.builder.data.DataEnvironment;
import framework.builder.data.DataStructure;
import framework.core.BeanFactory;
import framework.lightning.Button;
import framework.lightning.GlobalHeader;
import jsweet.dom.Event;

public class DataComposer extends JSContainer{
	
	//private JSHTMLFragment fragment = new JSHTMLFragment("card", "#card");
	
	private GlobalHeader header = new GlobalHeader("header");
	
	private Button addNew = new Button();
	
	
	private DataEnvironment dataEnvironment;
	
	
	public DataComposer(String name, String tag) { 
		super(name, tag);
		
		dataEnvironment = BeanFactory.getInstance().getBeanOfType(DataEnvironment.class);
		
		addNew.setLabel("Add New");
		header.addChild(addNew);
		addChild(header);
	//	DataItem item = new DataItem("", structures.get(0));
		
		//addChild(item);
		
		addNew.setState(Button.STATE_BRAND);
		addNew.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				String name = prompt("Label of Data structure");
				
				DataStructure structure = new DataStructure();
				structure.name = name;
				structure.label = name;
				dataEnvironment.saveStructure(structure);
				DataItem item = new DataItem(name, structure);
				addChild(item);
				
			}
		}, "click");
		/*addChild(accordion);
		
		
		Card card = new Card("card", "div");
		card.getBody().addChild(new JSContainer("p").setHtml("I belong to you"));
		
		AccordionItem item = new AccordionItem("1", "This is a title");
		//JSContainer p = new JSContainer("p").setHtml("sdfsdfsdfsfds");
		item.getContent().addChild(card);
		card.getHeaderMedia().addBody(new JSContainer("h2").addChild(new JSContainer("")).setHtml("Cause there is no none"));
		item.open();
		accordion.addItem(item);
		*/
		
		
	}

}
