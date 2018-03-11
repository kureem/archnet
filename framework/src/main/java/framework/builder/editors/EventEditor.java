package framework.builder.editors;

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
import jsweet.lang.Array;

public class EventEditor extends AbstractEditor<Component> {

	JSContainer component = new JSContainer("label");
	
	private JSContainer functionName = new JSContainer("div");
	JSSelect events = new JSSelect("events");

	private Designable root;

	private JavascriptEditor editor = new JavascriptEditor("sd", null);

	private String justSaved = "";

	public EventEditor(String name, Designable root, VisualEditor veditor) {
		super(name, "div", veditor);
		addClass("event-editor");
		this.editor.setRootEditor(veditor);
		Grid grid = new Grid("", "div");
		addChild(grid);

		JSContainer colLeft = new JSContainer("div");
		JSContainer colRight = new JSContainer("div");
		grid.addChild(colLeft.addClass("slds-col").addClass("col-left"));
		grid.addChild(colRight.addClass("slds-col").addClass("col-right"));
		this.root = root;

		for (String s : EventTypes.events)
			events.addOption(new JSOption(s.replace("on", ""), s.replace("on", "")));

		colLeft.addChild(component.setStyle("width", "100%"));
		colLeft.addChild(functionName);
		functionName.setHtml("function(JSContainer source, Event event){");
		colRight.addChild(events.setStyle("width", "100%"));

		events.addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {

				if (!justSaved.equals(events.getValue())) {
					justSaved = (String)events.getValue();
					save((String)events.getValue());

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
	

	private void decoName(){
		
	}
	@SuppressWarnings("unchecked")
	public void fillValue(Designable des, boolean updEvtSelect) {
		boolean s = false;
		component.setHtml(des.getName());
		if (!updEvtSelect) {
			Array<EventListener> listeners = (Array<EventListener>)des.getListeners().$get((String)events.getValue());
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
				if (editor != null && editor.getEditor() != null) {
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

	@SuppressWarnings("unchecked")
	public String getSource(Designable des, String type) {
		Array<EventListener> listeners = (Array<EventListener>)des.getListeners().$get(type);
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

	public void reactivate() {
		setDesignable(findDesignableById(root, component.getAttribute("desid")));
	}

	public void setDesignable(Designable designable) {

		component.setAttribute("desid", designable.getId());
		events.clearChildren();
		events.setRendered(false);
		for (String s : (((JSContainer)designable)).advancedEventTypes())
			events.addOption(new JSOption(s.replace("on", ""), s.replace("on", "")));
		
		//filtering goes here
		
		for (String s : EventTypes.events)
			events.addOption(new JSOption(s.replace("on", ""), s.replace("on", "")));
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

		String type = (String)events.getValue();
		save(type);

		clean();
	}

	@SuppressWarnings("unchecked")
	public void save(String type) {
		String componentId = component.getAttribute("desid");

		String src = editor.getEditor().getValue();
		// alert(type + ":" + src);
		Designable des = findDesignableById(root, componentId);
		if (des != null) {
			Array<EventListener> listeners = (Array<EventListener>)des.getListeners().$get(type);
			if (listeners != null) {
				for (EventListener l : listeners) {
					if (l instanceof BuilderEventListener) {
						BuilderEventListener evt = (BuilderEventListener) l;
						evt.setSource(src);
						return;

					}
				}
				BuilderEventListener l = new BuilderEventListener(src,des.getName(),type);
				des.addEventListener(l, type);
			} else {

				BuilderEventListener l = new BuilderEventListener(src,des.getName(),type);
				des.addEventListener(l, type);
			}
		}

	}

	@Override
	public String getMarshall() {
		return null;
	}

	@Override
	public Component createNew(File f) {
		return null;
	}

	@Override
	public Component unmarshall(File f) {
		return null;
	}

	@Override
	public void consume(Component data) {

	}

}
