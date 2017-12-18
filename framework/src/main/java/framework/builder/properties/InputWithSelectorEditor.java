package framework.builder.properties;

import framework.EventListener;
import framework.JSContainer;
import framework.design.Designable;
import framework.design.Parameter;
import framework.lightning.IconButton;
import jsweet.dom.Event;

public abstract class InputWithSelectorEditor<T> extends AbstractInputPropertyEditor{

	private IconButton icon =null;
	
	private ItemSelector<T> modal;
	
	protected T selectedItem;
	
	public InputWithSelectorEditor(String name, ItemSelector<T> modal) {
		super(name);
		this.modal = modal;
	}

	@Override
	public void initEditor(Designable designable, Parameter parameter) {
		if(icon == null){
			icon  = new IconButton("icon");
			getParent().addChild(icon.addClass("input-icon"));
			getParent().addChild(modal);
			icon.addEventListener(new EventListener() {
				
				@Override
				public void performAction(JSContainer source, Event evt) {
					modal.open();
				}
			}, "click");
			
			modal.addOnItemSeletedListener(new ItemSelectedListener<T>() {

				@Override
				public void onItemSelected(T item) {
					selectedItem  = item;
				}
			});
		}
	}


}
