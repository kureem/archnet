package framework.builder.editors;

import static def.dom.Globals.document;

import framework.EventListener;
import framework.JSContainer;
import framework.TreeItem;
import framework.builder.Builder;
import framework.builder.Component;
import framework.builder.Selector;
import framework.builder.marshalling.MarshallUtil;
import framework.design.Designable;
import framework.lightning.DropDown;
import framework.lightning.DropDownItem;
import jsweet.dom.Event;
import jsweet.lang.Array;

public class StructureTreeItem extends TreeItem implements EventListener {

	private Designable designable;

	private Selector selector;

	private Structure structure;

	private Designable parent;

	private DropDown dropdown = new DropDown("rightclick");

	private EventListener lsnClick = new EventListener() {

		@Override
		public void performAction(JSContainer source, Event evt) {
			click(source, evt);
		}
	};

	private EventListener lsnDblclick = new EventListener() {

		@Override
		public void performAction(JSContainer source, Event evt) {
			dblclick(source, evt);
		}
	};

	private EventListener lsnDelete = new EventListener() {

		@Override
		public void performAction(JSContainer source, Event evt) {

			if (parent != null) {
				parent.removeDesignable(designable);
				//designable = null;
				//structure.reload(parent);
				getParent().setVisible(false);
				VisualEditor editor = getAncestorWithClass("visual-editor");
				editor.dirty();
			}
			

		}
	};

	public void paste() {
		Designable clip = structure.getClipBoard();
		framework.builder.marshalling.Component cmp = MarshallUtil.extract(clip);
		Designable des = MarshallUtil.toDesignable(cmp);
		VisualEditor editor = getAncestorWithClass("visual-editor");
		editor.persist = true;
		editor.addNewComponent(des, designable);
		//structure.clearClipboard();
		
		editor.dirty();
	}
	
	public void pasteBefore() {
		Designable clip = structure.getClipBoard();
		Move(clip, true);
	}
	
	
	public void pasteAfter() {
		Designable clip = structure.getClipBoard();
		Move(clip, false);
	}
	
	private void Move(Designable clip, boolean before){
		Designable parent = getParentDesignable();
		
		
		
		if(parent != null){
			Array<Designable> children = parent.getDesignables();
			double currentIndex = children.indexOf(designable);
			
			
			for(Designable child : children){
				parent.removeDesignable(child);
			}
			
			Array<Designable> result = new Array<Designable>();
			
			
			framework.builder.marshalling.Component cmp = MarshallUtil.extract(clip);
			Designable d = MarshallUtil.toDesignable(cmp);
			for(double i = 0; i < children.length; i++){
				
				if(i == currentIndex){
					if(before){
						result.push(d);
						result.push(children.$get(i));
					}else{
						
						result.push(children.$get(i));
						result.push(d);
					}
				}else{
					result.push(children.$get(i));
				}
				
			}
			
			VisualEditor editor = getAncestorWithClass("visual-editor");
			editor.persist = true;
			for(Designable child : result){
				editor.addNewComponent(child, parent);
				//parent.addDesignable(child);
			}
			parent.setRendered(false);
			
			editor.dirty();
			
			structure.reload(parent);
			structure.render();
		}
	}
	/*private Designable getParentDesignable(Renderable d){
		Renderable parent = d.getParent();
		if(parent instanceof Designable){
			return (Designable)parent;
		}else if(parent == null){
			return null;
		}else{
			return getParentDesignable(parent);
		}
	}*/

	public StructureTreeItem(String name, Designable designable, Structure structure, Designable parent) {
		super(name, designable.getName());
		this.selector = structure.getSelector();
		this.parent = parent;
		this.structure = structure;
		this.designable = designable;
		addClass("structure-tree-item");
		setLeftIcon("template", "standard");

		DropDownItem deleteMenu = new DropDownItem("delete", "Delete");
		deleteMenu.setIcon("delete", "utility");

		DropDownItem copy = new DropDownItem("copy", "Copy");
		copy.setIcon("copy", "utility");
		
		DropDownItem cut = new DropDownItem("cut", "Cut");
		cut.setIcon("cut", "utility");
		
		DropDownItem paste = new DropDownItem("paste", "Paste");
		paste.setIcon("paste", "utility");
		
		DropDownItem exportAs = new DropDownItem("export", "Export");
		exportAs.setIcon("add_relationship", "action");
		
		
		
		
		
		DropDownItem pasteBefore = new DropDownItem("pasteBefore", "Paste Before");
		pasteBefore.setIcon("add_relationship", "action");
		
		DropDownItem pasteAfter = new DropDownItem("pasteAfter", "Paste After");
		pasteAfter.setIcon("add_relationship", "action");
		
		
		
		
		
		exportAs.addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {
				saveAsComponent();
			}
		}, "click");

		copy.addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {
				structure.copy(designable);
				dropdown.setVisible(false);
			}
		}, "click");

		cut.addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {
				setStyle("opacity", "0.5");
				structure.cut(designable);
				dropdown.setVisible(false);
			}
		}, "click");
 
		paste.addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {
				paste();
			}
		}, "click");
		
		
		pasteBefore.addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {
				pasteBefore();
			}
		}, "click");

		
		pasteAfter.addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {
				pasteAfter();
			}
		}, "click");
		
		deleteMenu.addEventListener(lsnDelete, "click");

		// dropdown.addItem(cut);
		
		dropdown.addItem(paste);
		dropdown.addItem(pasteBefore);
		dropdown.addItem(pasteAfter);
		dropdown.addItem(copy);
		dropdown.addItem(exportAs);
		dropdown.addItem(deleteMenu);
		
		

		dropdown.setVisible(false);
		addChild(dropdown);

		document.addEventListener("click", new def.dom.EventListener() {

			@Override
			public void $apply(def.dom.Event evt) {
				dropdown.setVisible(false);
				if(dropdown.isRendered())
					dropdown.render();

			}
		});
		/*
		 * addIcon("save", "utility", new EventListener() {
		 * 
		 * @Override public void performAction(JSContainer source, Event evt) {
		 * saveAsComponent(); } });
		 */
		addIcon("delete", "utility", lsnDelete);
		
		

		addEventListener(lsnClick, "click");
		addEventListener(lsnDblclick, "dblclick");

		addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {
				evt.preventDefault();
				//alert("xfsd");
				jsweet.dom.PointerEvent e = (jsweet.dom.PointerEvent)evt;
				if (structure.getClipBoard() == null) {
					paste.getParent().setVisible(false);
					pasteAfter.getParent().setVisible(false);
					pasteBefore.getParent().setVisible(false);
				} else {
					paste.getParent().setVisible(true);
					pasteAfter.getParent().setVisible(true);
					pasteBefore.getParent().setVisible(true);
				}
				dropdown.setVisible(true);
				dropdown.setStyle("left", (e.clientX +80) + "px");
				dropdown.setStyle("top", (e.clientY-80) + "px");

			}
		}, "contextmenu");
		
		
		/*setAttribute("draggable", "true");
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				DragEvent e = (DragEvent)evt;
				e.dataTransfer.effectAllowed = "move";
			}
		}, "dragstart");
		
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				DragEvent e = (DragEvent)evt;
				HTMLElement target = (HTMLElement)e.target;
				target = (HTMLElement)target.parentNode;
				HTMLElement sourceNode = source.getNative();
				if(isBefore(sourceNode, target)){
					target.parentNode.parentNode.insertBefore(sourceNode.parentNode,target.parentNode);
				}else{
					target.parentNode.insertBefore(sourceNode.parentNode, target.parentNode.nextSibling);
				}
			}
		}, "dragenter");*/
		

	}
	
	/*private boolean isBefore(HTMLElement a, HTMLElement b){
		if (a.parentNode == b.parentNode) {
	        for (Node cur = a; cur != null; cur = cur.previousSibling) {
	            if (cur.isEqualNode(b)) { 
	                return true;
	            }
	        }
	    }
	    return false;
	}*/

	public Designable getDesignable() {
		return designable;
	}

	public Designable getParentDesignable() {
		return parent;
	}

	@Override
	public void select(boolean b) {
		super.select(b);
		selector.select(designable);
	}

	public void saveAsComponent() {
		VisualEditor ve = structure.getAncestorWithClass("visual-editor");
		
		ve.saveAsComponent( designable);
	}

	public void dblclick(JSContainer source, Event evt) {

		evt.stopPropagation();

		Designable desgianble = getDesignable();
		String editorName = "editor:" + desgianble.getName();
		if (Builder.getInstance().isOpen(editorName)) {
			Editor<?> ee = Builder.getInstance().activateEditor(editorName);
			if (ee instanceof EventEditor) {
				((EventEditor) ee).setDesignable(desgianble);
			}

		} else {
			VisualEditor veditor = ((JSContainer) structure.getRootUINode()).getAncestorWithClass("visual-editor");
			EventEditor editor = new EventEditor(editorName, structure.getRootUINode(), veditor);
			editor.setDesignable(desgianble);
			EventEditor ed = (EventEditor) Builder.getInstance().openEditor("Event(" + desgianble.getName() + ")",
					editor);
			ed.setDesignable(desgianble);

		}
	}

	public void click(JSContainer source, Event evt) {
		evt.stopPropagation();

		VisualEditor editor = ((JSContainer) structure.getRootUINode()).getAncestorWithClass("visual-editor");
		Component willAdd = editor.getWillAddComponent();
		if (willAdd != null) {
			StructureTreeItem itemS = ((StructureTreeItem) source);
			editor.addNewComponent(willAdd, itemS.getDesignable());
			editor.dirty();
		} else {

			StructureTreeItem itemS = ((StructureTreeItem) source);

			if (structure.getSelected() != null) {
				structure.getSelected().select(false);
			}
			structure.setSelected(itemS);
			if(structure.getSelected() != null)
				structure.getSelected().select(true);
		}
	}

}
