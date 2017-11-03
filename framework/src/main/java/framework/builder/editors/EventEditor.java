package framework.builder.editors;

import static def.dom.Globals.alert;

import java.util.List;

import framework.EventListener;
import framework.JSContainer;
import framework.JSOption;
import framework.JSSelect;
import framework.builder.BuilderEventListener;
import framework.builder.data.File;
import framework.builder.marshalling.Component;
import framework.design.Designable;
import framework.lightning.Grid;
import jsweet.dom.Event;

public class EventEditor extends AbstractEditor<Component> {

	JSContainer component = new JSContainer("label");
	// JSSelect component = new JSSelect("components");
	JSSelect events = new JSSelect("events");

	private Designable root;

	private JavascriptEditor editor = new JavascriptEditor("sd");
	
	private String justSaved = "";

	public EventEditor(String name, Designable root) {
		super(name, "div");

		Grid grid = new Grid("", "div");
		addChild(grid);
		// grid.setAlignSpread(true);

		JSContainer colLeft = new JSContainer("div");
		JSContainer colRight = new JSContainer("div");
		grid.addChild(colLeft.addClass("slds-col"));
		grid.addChild(colRight.addClass("slds-col"));
		this.root = root;

		for (String s : EventTypes.events)
			events.addOption(new JSOption(s.replace("on", ""), s.replace("on", "")));

		colLeft.addChild(component.setStyle("width", "100%"));
		colRight.addChild(events.setStyle("width", "100%"));

		events.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
					//alert("dsfsds");
					if(!justSaved.equals(events.getValue())){
						justSaved = events.getValue();
						save(events.getValue());
						
					}
			}
		}, "focus");
		events.addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {
				
				String id = component.getAttribute("desid");
				Designable des = findDesignableById(root, id);
				fillValue(des, false);
			}
		}, "change");

		addChild(editor);

	}

	public void fillValue(Designable des, boolean updEvtSelect) {
		boolean s = false;
		component.setHtml(des.getName());
		if (!updEvtSelect) {
			List<EventListener> listeners = des.getListeners().get(events.getValue());
			if (listeners != null) {
				for (EventListener e : listeners) {
					if (e instanceof BuilderEventListener) {

						BuilderEventListener bel = (BuilderEventListener) e;
						editor.setValue(bel.getSource());
						if (editor.getEditor() != null) {
							editor.getEditor().setValue(bel.getSource());
						} else {
							
						}
						s = true;
					}
				}
			}
			if (!s) {
				if (editor != null && editor.getEditor() != null){
					editor.getEditor().setValue("");
					editor.setValue("");
				}
					
			}
		}
		String last = "click";
		String lastSrc = getSource(des, last);
		for (JSContainer opt : events.getChildren()) {
			JSOption option = (JSOption) opt;
			String type = option.getValue();
			String src = getSource(des, type);
			if (src != null && src.trim().length() > 0) {
				option.setStyle("font-weight", "bold");
				last = type;
				lastSrc = src;
			} else {
				option.setStyle("font-weight", "normal");
			}
		}
		if (updEvtSelect && !s) {
			events.setValue(last);
			editor.setValue(lastSrc);
			if (editor.getEditor() != null) {
				editor.getEditor().setValue(lastSrc);
			} else {
				
			}
		}
	}

	public String getSource(Designable des, String type) {
		List<EventListener> listeners = des.getListeners().get(type);
		if (listeners != null) {
			for (EventListener l : listeners) {
				if (l instanceof BuilderEventListener) {
					BuilderEventListener evt = (BuilderEventListener) l;
					return evt.getSource();
				}
			}
		}
		return null;
	}

	/*
	 * public void addComponentOption(Designable designable){
	 * component.addOption(new JSOption(designable.getName(),
	 * designable.getId())); for(Designable des : designable.getDesignables()){
	 * addComponentOption(des); } }
	 */

	public void reactivate(){
		setDesignable(findDesignableById(root, component.getAttribute("desid")));
	}
	
	public void setDesignable(Designable designable) {

		component.setAttribute("desid", designable.getId());
		fillValue(designable, true);
	}

	private Designable findDesignableById(Designable parent, String id) {
		if (parent.getId().equals(id)) {
			return parent;
		}

		for (Designable des : parent.getDesignables()) {
			Designable res = findDesignableById(des, id);
			if (res != null) {
				return res;
			}
		}

		return null;
	}

	@Override
	public void save() {
		
		String type = events.getValue();
		save(type);
		//super.save();
	}

	public void save(String type) {
		String componentId = component.getAttribute("desid");

		String src = editor.getEditor().getValue();
		alert(type + ":" + src);
		Designable des = findDesignableById(root, componentId);
		if (des != null) {
			List<EventListener> listeners = des.getListeners().get(type);
			if (listeners != null) {
				for (EventListener l : listeners) {
					if (l instanceof BuilderEventListener) {
						BuilderEventListener evt = (BuilderEventListener) l;
						evt.setSource(src);
						return;

					}
				}
				BuilderEventListener l = new BuilderEventListener(src);
				des.addEventListener(l, type);
			} else {

				BuilderEventListener l = new BuilderEventListener(src);
				des.addEventListener(l, type);
			}
		}

		// TODO Auto-generated method stub

	}

	@Override
	public String getMarshall() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Component createNew(File f) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Component unmarshall(File f) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void consume(Component data) {
		// TODO Auto-generated method stub

	}

}
