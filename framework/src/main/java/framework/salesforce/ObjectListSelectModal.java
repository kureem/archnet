package framework.salesforce;

import framework.EventListener;
import framework.JSContainer;
import framework.designables.JSDesignableCardLayout;
import framework.lightning.Button;
import framework.lightning.designables.JSDesignableModal;
import jsweet.dom.CustomEvent;
import jsweet.dom.Event;
import jsweet.lang.Object;

public class ObjectListSelectModal extends JSDesignableModal{

	private ObjectList list = null;
	
	private FieldsList fields = new FieldsList("fields");
	
	private JSDesignableCardLayout cardLayout = new JSDesignableCardLayout("layout", "div");
	
	private Button saveButton = new Button();
	
	private Button backButton = new Button();
	
	public ObjectListSelectModal(String name, String title) {
		super(name);
		setTitle(title);
		list = new ObjectList("objects");
		cardLayout.addItem(list);
		cardLayout.addItem(fields);
		getBody().addChild(cardLayout);
		
		//cardLayout.activate("objects");
		list.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				String name = (String)((Object)evt.$get("row")).$get("name");
				fields.setType(name);
				cardLayout.activate("fields");
			}
		}, "showDetail");
		setTitle("Select Object Types to work with");
		getFooter().addChild(saveButton.setLabel("Save").addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				CustomEvent evt1 = new CustomEvent("selectItems");
				evt1.$set("data", list.getSelectedItems());
				fireListener("selectItems", evt1);
			}
		}, "click"));
		
		getFooter().addChild(backButton.setLabel("Back").setStyle("float", "left").addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				cardLayout.activate("objects");
			}
		}, "click"));
		
		
	}

}
