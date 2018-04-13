package framework.salesforce;

import framework.lightning.designables.JSDesignableModal;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class SalesforceCrudModal extends JSDesignableModal{

	private SalesforceCrud crud = new SalesforceCrud("crud");
	
	public SalesforceCrudModal(String name) {
		super(name);
		applyParam("title", "Salesforce");
		
		crud.setObjectType("Account");
		//crud.setf
	}

	public void setColumns(Array<Object> fields) {
		crud.setColumns(fields);
	}

	public void setFields(Array<Object> fields) {
		crud.setFields(fields);
	}

	
	
	

}
