package framework.salesforce;

import framework.lightning.designables.JSDesignableModal;

public class FieldListSelectModal extends JSDesignableModal{
	private FieldsList fields = new FieldsList("fields");
	
	public FieldListSelectModal(String name,String title) {
		super(name);
		setTitle(title);
		getBody().addChild(fields);
		fields.getTable().setSelectable(true);
		fields.setStyle("display", "block");
		//fields.setType(type);
	}
	
	public FieldsList getList(){
		return fields;
	}
	
	
}
