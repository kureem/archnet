package framework.builder.editors;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import framework.EventListener;
import framework.JSContainer;
import framework.TreeItem;
import framework.builder.Builder;
import framework.builder.Selector;
import framework.builder.data.File;
import framework.design.Designable;
import jsweet.dom.Event;

public class Structure extends JSContainer {

	private Designable root;

	private JSContainer ul = new JSContainer("ul");

	private JSContainer liJS;

	private JSContainer liData;

	private JSContainer liTemplates;

	private JSContainer liComponents;

	private JSContainer liCss = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");

	private JSContainer liRoot = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");

	private TreeItem selected = null;

	private File file;

	private Selector selector;

	private boolean cut = false;

	private Designable clipboardItem = null;

	EventListener toggleSelect = new EventListener() {

		@Override
		public void performAction(JSContainer source, Event evt) {
			if (selected != null) {
				selected.select(false);
			}

			selected = ((TreeItem) source);
			((TreeItem) source).select(true);
		}
	};

	// private Builder builder = null;

	public Structure(String name, Designable root, File f, Selector selector) {
		super(name, "div");
		addClass("structure");
		this.selector = selector;
		this.file = f;
		// this.builder = builder;
		addClass("slds-tree_container");

		addChild(ul.addClass("slds-tree").setAttribute("role", "tree"));
		this.root = root;
		reload();
	}

	public void copy(Designable des) {
		cut = false;
		clipboardItem = des;
	}

	public void cut(Designable des) {
		cut = true;
		clipboardItem = des;
	}

	public boolean isCut() {
		return cut;
	}

	public Designable getClipBoard() {
		return clipboardItem;
	}

	public void clearClipboard() {
		clipboardItem = null;
	}

	public File getFile() {
		return file;
	}

	public Selector getSelector() {
		return selector;
	}

	public Designable getRootUINode() {
		return root;
	}

	public void select(Designable designable) {

		if (getSelected() != null) {
			getSelected().select(false);
		}
		StructureTreeItem itemS = getItem(designable, liRoot);
		setSelected(itemS);
		getSelected().select(true);

		// StructureTreeItem item = getItem(designable, liRoot);
		// setSelected(item);
	}

	public void setSelected(TreeItem item) {
		if (selected != null) {
			selected.select(false);
		}
		this.selected = item;
		selected.select(true);

	}

	public TreeItem getSelected() {
		return selected;
	}

	public void reload() {
		clipboardItem = null;
		
		ul.getChildren().clear();

		ul.setRendered(false);

		liJS = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");

		liCss = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");

		liData = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");

		liTemplates = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");

		liRoot = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");

		liComponents = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");

		ul.addChild(liRoot.addClass("type-ui"));
		addNode(root, liRoot, 0, null);

		liJS.addChild(new TreeItem("", "JS").addClass("type-scripts").addEventListener(toggleSelect, "click"));
		ul.addChild(liJS);

		liCss.addChild(new TreeItem("", "CSS").addClass("type-stylesheets").addEventListener(toggleSelect, "click"));
		ul.addChild(liCss);

		liTemplates.addChild(
				new TreeItem("", "Templates").addClass("type-templates").addEventListener(toggleSelect, "click"));
		ul.addChild(liTemplates);

		liData.addChild(new TreeItem("", "Data").addClass("type-data").addEventListener(toggleSelect, "click"));
		ul.addChild(liData);

		liComponents.addChild(
				new TreeItem("", "Components").addClass("type-components").addEventListener(toggleSelect, "click"));
		ul.addChild(liComponents);

		renderFiles();

	}

	public StructureTreeItem getItem(Designable designable, JSContainer currentNode) {
		for (JSContainer des : currentNode.getChildren()) {
			if (des instanceof StructureTreeItem) {
				StructureTreeItem titem = (StructureTreeItem) des;
				if (designable.getId().equals(titem.getDesignable().getId())) {
					return titem;
				}
			}
			StructureTreeItem child = getItem(designable, des);
			if (child != null) {
				return child;
			}
		}

		return null;
	}

	public TreeItem getItem(String type) {
		if (type.equals("stylesheets")) {
			return (TreeItem) liCss.getChildren().get(0);
		} else if (type.equals("templates")) {
			return (TreeItem) liTemplates.getChildren().get(0);
		} else if (type.equals("scripts")) {
			return (TreeItem) liJS.getChildren().get(0);
		} else if (type.equals("data")) {
			return (TreeItem) liData.getChildren().get(0);
		} else if (type.equals("components")) {
			return (TreeItem) liComponents.getChildren().get(0);
		}
		return null;
	}

	public void reload(String type) {
		clipboardItem = null;
		reload();
		TreeItem item = getItem(type);
		item.open();
	}

	public void reload(Designable designable) {
		clipboardItem = null;
		StructureTreeItem item = getItem(designable, liRoot);
		// alert(item);
		if (item != null) {
			Integer level = Integer.parseInt(item.getParent().getAttribute("aria-level"));
			JSContainer li = item.getParent();
			li.getChildren().clear();
			li.setRendered(false);
			addNode(designable, li, level, item.getParentDesignable()).open();
			item.open();

		}
	}

	public void unselect(JSContainer c) {

	}

	public void renderFiles() {
		String[] types = new String[] { "stylesheets", "scripts", "templates", "data", "components" };
		Map<String, JSContainer> lis = new HashMap<String, JSContainer>();
		lis.put("stylesheets", liCss);
		lis.put("data", liData);
		lis.put("scripts", liJS);
		lis.put("templates", liTemplates);
		lis.put("components", liComponents);

		for (String type : types) {
			JSContainer cstylesheets = new JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
			for (File f : file.getChild(type).getChildren()) {
				TreeItem item = new FileTreeItem(f, type, Builder.getInstance(), this);
				item.addEventListener(toggleSelect, "click");
				JSContainer li = new JSContainer("li").addChild(item).setAttribute("role", "treeitem")
						.setAttribute("aria-level", "2");
				lis.get(type).addChild(cstylesheets.addChild(li));
			}
		}

	}

	public StructureTreeItem addNode(Designable ctn, JSContainer li, int level, Designable parent) {
		// li.setHtml(ctn.getName());
		StructureTreeItem item = new StructureTreeItem(ctn.getName(), ctn, this, parent);
		li.addChild(item).setAttribute("role", "treeitem").setAttribute("aria-level", level + "");

		List<Designable> designables = ctn.getDesignables();
		if (designables != null && designables.size() > 0) {
			item.leaf(false);
			JSContainer children = new JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
			li.addChild(children);
			for (Designable c : ctn.getDesignables()) {
				JSContainer child = new JSContainer("li");
				children.addChild(child);
				addNode(c, child, level + 1, ctn);
			}
		} else {
			item.leaf(true);
		}
		return item;

	}

}
