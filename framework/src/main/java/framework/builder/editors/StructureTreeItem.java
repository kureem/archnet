package framework.builder.editors;

import static def.dom.Globals.console;
import static def.dom.Globals.document;

import framework.EventListener;
import framework.JSContainer;
import framework.TreeItem;
import framework.builder.Builder;
import framework.builder.Component;
import framework.builder.Selector;
import framework.builder.data.File;
import framework.builder.data.ProjectService;
import framework.builder.data.RemoteDataListener;
import framework.builder.marshalling.MarshallUtil;
import framework.core.BeanFactory;
import framework.design.Designable;
import framework.lightning.DropDown;
import framework.lightning.DropDownItem;
import jsweet.dom.Event;
import jsweet.lang.JSON;

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
				structure.reload(parent);
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
		editor.addNewComponent(des, designable);
		structure.clearClipboard();
		if (structure.isCut()) {
			parent.removeDesignable(designable);
			structure.reload(parent);
		}
		editor.dirty();
	}

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

		deleteMenu.addEventListener(lsnDelete, "click");

		// dropdown.addItem(cut);
		dropdown.addItem(paste);
		dropdown.addItem(copy);
		dropdown.addItem(exportAs);
		dropdown.addItem(deleteMenu);

		dropdown.setVisible(false);
		addChild(dropdown);

		document.addEventListener("click", new def.dom.EventListener() {

			@Override
			public void $apply(def.dom.Event evt) {
				dropdown.setVisible(false);
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
				if (structure.getClipBoard() == null) {
					paste.setVisible(false);
				} else {
					paste.setVisible(true);
				}
				dropdown.setVisible(true);

			}
		}, "contextmenu");

	}

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
		String marshall = JSON.stringify(MarshallUtil.extract(designable));
		File project = structure.getFile();
		String name = designable.getName();
		if (!name.endsWith(".cmp")) {
			name = name + ".cmp";
		}
		project.createFile(name, "components", new RemoteDataListener<java.lang.Object>() {

			@Override
			public void dataLoaded(Object data) {
				File fff = new File((jsweet.lang.Object) data);
				fff.setData(marshall);
				BeanFactory.getInstance().getBeanOfType(ProjectService.class).saveFile(fff, new RemoteDataListener<java.lang.Object>() {

					@Override
					public void dataLoaded(Object data) {
						console.log(data);
					}
				});

				structure.reload("components");
				structure.render();

			}
		});
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
			structure.getSelected().select(true);
		}
	}

}
