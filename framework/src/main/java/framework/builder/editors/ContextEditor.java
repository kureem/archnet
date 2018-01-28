package framework.builder.editors;

import static def.dom.Globals.close;

import framework.EventListener;
import framework.JSContainer;
import framework.ObjectBuilder;
import framework.builder.data.DynaForm;
import framework.builder.data.File;
import framework.lightning.Backdrop;
import framework.lightning.Button;
import framework.lightning.Modal;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.JSON;
import jsweet.lang.Object;

public class ContextEditor extends AbstractEditor<Object>{
	
	DynaForm form = new DynaForm("form");

	public ContextEditor(String name, VisualEditor rootEditor) {
		super(name, "div", rootEditor);
	}

	//private Object attribute =new Object();
	
	
	@Override
	public String getMarshall() {
		return JSON.stringify(form.getValue());
	}

	@Override
	public Object createNew(File f) {
		//return attribute;
		Object o = new Object();
		form.setValue(o);
		return o;
	}

	@Override
	public Object unmarshall(File f) {
		String data = f.getData();
		return (Object)JSON.parse(data);
	}

	@Override
	public void consume(Object data) {
		
		Object fldName = new Object();
		fldName.$set("name", "name");
		fldName.$set("label", "Name");
		fldName.$set("type", "text");
		
		Object fldLabel = new Object();
		fldLabel.$set("name", "label");
		fldLabel.$set("type", "text");
		fldLabel.$set("label", "Label");
		
		Object fldType = new Object();
		fldType.$set("name", "type");
		fldType.$set("type", "multi");
		fldType.$set("label", "Type");
		
		
		
		
		//List<Object> options = new ArrayList<Object>();
		
		//String[] types = new String[]{"Text", "Number", "Boolean","Date" ,"Array", "Object", "Formula"};
		Object[] options = new Object[]{ 
				ObjectBuilder.New()
				.set("name", "Text")
				.set("label", "Text")
				.setArray("fields", 
					ObjectBuilder.New().set("name", "size").set("label", "Size").set("type", "number").done(),
					ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(),
					ObjectBuilder.New().set("name", "format").set("label", "Format").set("type", "String").done(),
					ObjectBuilder.New().set("name", "mask").set("label", "Mask").set("type", "String").done(),
					ObjectBuilder.New().set("name", "default").set("label", "Default").set("type", "String").done()
				
				).done(),
				//Number
				ObjectBuilder.New()
				.set("name", "Number")
				.set("label", "Number")
				.setArray("fields", 
					ObjectBuilder.New().set("name", "min").set("label", "Min").set("type", "number").done(),
					ObjectBuilder.New().set("name", "max").set("label", "Max").set("type", "number").done(),
					ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(),
					ObjectBuilder.New().set("name", "format").set("label", "Format").set("type", "String").done(),
					ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "String").done()
				
				).done(),
				ObjectBuilder.New()
				.set("name", "Boolean")
				.set("label", "Boolean")
				.setArray("fields", 
					//ObjectBuilder.New().set("name", "min").set("label", "Min").set("type", "number").done(),
					//ObjectBuilder.New().set("name", "max").set("label", "Max").set("type", "number").done(),
					ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(),
					//ObjectBuilder.New().set("name", "format").set("label", "Format").set("type", "String").done(),
					ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "boolean").done()
				
				).done(),
				ObjectBuilder.New()
				.set("name", "Date")
				.set("label", "Date")
				.setArray("fields", 
					ObjectBuilder.New().set("name", "min").set("label", "Min").set("type", "number").done(),
					ObjectBuilder.New().set("name", "max").set("label", "Max").set("type", "number").done(),
					ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(),
					ObjectBuilder.New().set("name", "format").set("label", "Format").set("type", "String").done(),
					ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "String").done()
				
				).done(),
				ObjectBuilder.New()
				.set("name", "Array")
				.set("label", "Array")
				.setArray("fields", 
					ObjectBuilder.New().set("name", "min").set("label", "Min").set("type", "number").done(),
					ObjectBuilder.New().set("name", "max").set("label", "Max").set("type", "number").done(),
					ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(),
					ObjectBuilder.New().set("name", "type").set("label", "Type").set("type", "String").done(),
					ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "String").done()
				
				).done(),
				ObjectBuilder.New()
				.set("name", "Object")
				.set("label", "Object")
				.setArray("fields", 
				//	ObjectBuilder.New().set("name", "min").set("label", "Min").set("type", "number").done(),
				//	ObjectBuilder.New().set("name", "max").set("label", "Max").set("type", "number").done(),
					ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(),
					ObjectBuilder.New().set("name", "type").set("label", "Type").set("type", "String").done(),
					ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "String").done()
				
				).done(),
				ObjectBuilder.New()
				.set("name", "Formula")
				.set("label", "Formula")
				.setArray("fields", 
				//	ObjectBuilder.New().set("name", "min").set("label", "Min").set("type", "number").done(),
				//	ObjectBuilder.New().set("name", "max").set("label", "Max").set("type", "number").done(),
					ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(),
					ObjectBuilder.New().set("name", "formula").set("label", "Formula").set("type", "String").done(),
					ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "String").done()
				
				).done()
		};
		
		fldType.$set("options", options);
		//InputTypes.checkbox
		
		Array<Object> fields =new Array<Object>(fldName, fldLabel, fldType);
		
		///alert(JSON.stringify(fields));
		
		Modal modal = new Modal("modal", "Edit Variable");
		
		Button save = new Button("save");
		save.setLabel("Save");
		save.setState(Button.STATE_BRAND);
		modal.getFooter().addChild(save);
		save.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				save();
				close();
				modal.close();
				modal.getBackdrop().close();
			}
		}, "click");
		
		Button cancel = new Button("cancel");
		cancel.setLabel("Cancel");
		modal.getFooter().addChild(cancel);
		cancel.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				close();
				modal.close();
				modal.getBackdrop().close();
				
			}
		}, "click");
		
		
		form.setStyle("padding", "12px");
		form.setFields(fields);
		modal.setBody(form);
		addChild(modal);
		Backdrop bd = new Backdrop("bd");
		addChild(bd);
		modal.setBackdrop(bd);
		modal.open();
		bd.open();
		form.setValue(data);
	}
	
	
	
	
}
