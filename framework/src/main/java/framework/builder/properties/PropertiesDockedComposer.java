package framework.builder.properties;

import framework.EventListener;
import framework.JSContainer;
import framework.builder.editors.VisualEditor;
import framework.design.Designable;
import framework.design.ExtDesignable;
import framework.lightning.DockedComposer;
import framework.lightning.TabItem;
import jsweet.dom.Event;
import jsweet.lang.Object;

public class PropertiesDockedComposer extends DockedComposer {

	private ProtertiesEditorTabs mainEditor = new ProtertiesEditorTabs("mainEditor");
	private PropertiesEditor basicEditorBody = new BasicPropertiesEditor("basic");
	
		
	//private PropertiesEditor eventEditor = new EventsPropertiesEditor();

	public PropertiesDockedComposer(String name) {
		super(name);
		getTitle().setHtml("Properties");

		addClass("properties-composer");
		
		
		
		
		getBody().addChild(mainEditor);
		minimize.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				VisualEditor editor = getAncestorWithClass("visual-editor");
				if(closed)
				editor.closeRight();
				else
					editor.openRight();
				
			}
		}, "click");
	}

	public void selectComponent(Designable designable) {
	
		mainEditor.clear();
		basicEditorBody.setRendered(false);
		
		mainEditor.addItem("Basic", basicEditorBody).setActive(true);
		basicEditorBody.setComponent(designable);
		PropertiesEditor advancedPropertiesEditorBody = new AdvancedPropertiesEditor();
		TabItem adv = mainEditor.addItem("Advanced", advancedPropertiesEditorBody);
		advancedPropertiesEditorBody.setComponent(designable);
		if(advancedPropertiesEditorBody.getChildren().length == 0){
			adv.setVisible(false);
		}else{
			adv.setVisible(true);
		}
		
		
		if(designable instanceof ExtDesignable){
			
		}else{
			KeyValueEditor customPropertiesEditorBody = new KeyValueEditor("custom"){

				@Override
				public void applyDataOnDesignable(Designable designable, Object data) {
					designable.setData(data);
				}

				@Override
				public Object getDataFromDesignable(Designable designable) {
					return (Object)designable.getData();
				}
				
			};

			mainEditor.addItem("Custom", customPropertiesEditorBody);
			customPropertiesEditorBody.setComponent(designable);
		}
		
		
		
		
		
		if(designable instanceof ExtDesignable){
			ExtPropertiesEditor[] editors =  ((ExtDesignable)designable).getExtEditors();
			if(editors != null && editors.length > 0){
				for(ExtPropertiesEditor e : editors){
					e.setComponent(designable);
					mainEditor.addItem(e.getLabel((ExtDesignable)designable), e).setActive(false);
				
				}
			}
		}
		
	/*	mainEditor.getItems().$get(0).setActive(true);
		if
		mainEditor.getItems().$get(1).setActive(false);
		mainEditor.getItems().$get(2).setActive(false);
	*/	
	}
}
