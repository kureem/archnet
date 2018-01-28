package framework.builder;

import framework.EventListener;
import framework.JSContainer;
import framework.builder.editors.VisualEditor;
import framework.design.Designable;
import jsweet.dom.Event;

public class SelectComponentEvent implements EventListener {

	private Selector selector = null;

	public SelectComponentEvent(Selector selector) {
		super();
		this.selector = selector;
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		evt.stopPropagation();
		
		VisualEditor editor = source.getAncestorWithClass("visual-editor");
		if(editor != null && editor.getWillAddComponent() != null){
			Component willAdd = editor.getWillAddComponent();
			editor.addNewComponent(willAdd, (Designable)source);
		}else{
			evt.stopPropagation();
			selector.select((Designable)source);
		}
	}

}