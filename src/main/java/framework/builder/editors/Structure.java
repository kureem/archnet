package framework.builder.editors;

import static jsweet.lang.Globals.parseInt;

import framework.EventListener;
import framework.JSContainer;
import framework.TreeItem;
import framework.builder.Builder;
import framework.builder.Selector;
import framework.builder.data.File;
import framework.design.Designable;
import framework.util.HashMap;
import framework.util.Map;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.JSON;
import jsweet.lang.Object;

public class Structure extends JSContainer {

	private Designable root;

	private JSContainer ul = new JSContainer("ul");
	
	private Map<String, JSContainer> lis = new HashMap<>();


	private JSContainer liRoot = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");

	private TreeItem selected = null;

	private File file;

	private Selector selector;

	private boolean cut = false;

	private Designable clipboardItem = null;
	
	TreeItem dataRoot = new TreeItem("", "Data").setLeftIcon("https://d13yacurqjgara.cloudfront.net/users/82092/screenshots/1073359/spinner.gif");

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


	public Structure(String name, Designable root, File f, Selector selector) {
		super(name, "div");
		addClass("structure");
		this.selector = selector;
		this.file = f;
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
		
		if(itemS != null){
		
			setSelected(itemS);
			getSelected().select(true);
			JSContainer parent = (JSContainer)designable;
			while(true){
				parent = (JSContainer)parent.getParent();
				if(parent == null){
					return;
				}
				if(parent instanceof Designable){
					StructureTreeItem itemP = getItem((Designable)parent, liRoot);
					itemP.open();
				}
			}
		}else{
			
			//not open in tree
			//move to parentw
			
			JSContainer parent = (JSContainer)designable;
			Array<Designable> stack = new Array<Designable>();
			
			while (true){
				
				parent = (JSContainer)parent.getParent();
				if(parent == null){
					return;
				}
				if(parent instanceof Designable){
					StructureTreeItem itemP = getItem((Designable)parent, liRoot);
					
					if(itemP != null){
						stack.push((Designable)parent);
						break;
					}else{
						stack.push((Designable)parent);
					}
				}
				
			}
			
			while(stack.length > 0){
				Designable d = stack.pop();
				getItem(d, liRoot).open();
				
			}
		
			 itemS = getItem(designable, liRoot);
			
			if(itemS != null){
			
				setSelected(itemS);
				getSelected().select(true);
			}
			
		}

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
		
		ul.clearChildren();

		ul.setRendered(false);
		
		liRoot = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
		
		ul.addChild(liRoot.addClass("type-ui"));
		addNode(root, liRoot, 1, null);
		
		String[] items = new String[]{"scripts", "stylesheets", "templates", "components"};
		String[] labels = new String[]{"JS", "CSS", "HTML", "Modules"};
		
		for(int i = 0; i < items.length; i++){
			JSContainer li = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
			addTreeItem(li, items[i], labels[i]);
			lis.put(items[i], li);
		}
		
		
		
		renderFiles();

	}
	
	private void addTreeItem(JSContainer li, String type,String label){
		TreeItem item =new TreeItem("", label);
		if(type.equals("types")){
			
			item.addIcon("import", "utility",new NewFileStructureEventListener( type, file, this));
			
		}else{
			item.addIcon("add", "utility", new NewFileStructureEventListener( type, file, this));
			
		}
		//item.addIcon(name, type, listener); 
		item.addClass("type-" + type).addEventListener(toggleSelect, "click");
		li.addChild(item);
		ul.addChild(li);
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
		return (TreeItem)lis.get(type).getChildren().$get(0);
	}

	public void reload(String type) {
		//clipboardItem = null;
		reload();
		TreeItem item = getItem(type);
		item.open();
	}

	public void reload(Designable designable) {
		//clipboardItem = null;
		StructureTreeItem item = getItem(designable, liRoot);
		if (item != null) {
			Double level =parseInt(item.getParent().getAttribute("aria-level")); 
					 //document.parseInt(item.getParent().getAttribute("aria-level"));
			JSContainer li = item.getParent();
			li.clearChildren();
			li.setRendered(false);
			addNode(designable, li, level.intValue(), item.getParentDesignable()).open();
			item.open();
		}
	}

	public void unselect(JSContainer c) {

	}

	public void renderFiles() {
			
		for (String type : lis.keySet()) {
			JSContainer cstylesheets = new JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
			if(file.getChild(type) != null){
				
				if(type.equals("types")){
					File ftype = file.getChild("types");
					@SuppressWarnings("unchecked")
					Array<Object> arrTypes = (Array<Object>)JSON.parse(ftype.getData());
					if(arrTypes != null){
						for(Object o : arrTypes){
							TypeTreeItem item = new TypeTreeItem(ftype,o,this);
							//TreeItem item = new FileTreeItem(f, type, Builder.getInstance(), this);
							item.addEventListener(toggleSelect, "click");
							JSContainer li = new JSContainer("li").addChild(item).setAttribute("role", "treeitem")
									.setAttribute("aria-level", "3");
							lis.get(type).addChild(cstylesheets.addChild(li));
						}
					}
				}else{
				
					for (File f : file.getChild(type).getChildren()) {
						TreeItem item = new FileTreeItem(f, type, Builder.getInstance(), this);
						item.addEventListener(toggleSelect, "click");
						JSContainer li = new JSContainer("li").addChild(item).setAttribute("role", "treeitem")
								.setAttribute("aria-level", "3");
						lis.get(type).addChild(cstylesheets.addChild(li));
					}
				}
			}else{
				lis.get(type).addChild(cstylesheets);
			}
			
		}

	}

	public StructureTreeItem addNode(Designable ctn, JSContainer li, int level, Designable parent) {
		StructureTreeItem item = new StructureTreeItem(ctn.getName(), ctn, this, parent);
		li.addChild(item).setAttribute("role", "treeitem").setAttribute("aria-level", level + "");

		Array<Designable> designables = ctn.getDesignables();
		if (designables != null && designables.length > 0) {
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
