package framework.builder.editors;

import static def.dom.Globals.alert;

import java.util.List;

import framework.EventListener;
import framework.JSContainer;
import framework.TreeItem;
import framework.builder.Builder;
import framework.builder.Component;
import framework.builder.data.File;
import framework.design.Designable;
import jsweet.dom.Event;

public class Structure extends JSContainer {

	private Designable root;

	private JSContainer ul = new JSContainer("ul");

	private JSContainer liJS;
	
	private JSContainer liData;
	
	private JSContainer liTemplates;

	private JSContainer liCss = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");

	private JSContainer liRoot = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");

	private TreeItem selected = null;

	private Builder builder = null;

	public Structure(String name, Designable root, Builder builder) {
		super(name, "div");
		addClass("structure");
		this.builder = builder;
		addClass("slds-tree_container");

		addChild(ul.addClass("slds-tree").setAttribute("role", "tree"));
		this.root = root;
		reload();

	}

	public void reload() {
		
		
		ul.getChildren().clear();

		ul.setRendered(false);
		

		liJS = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");

		liCss = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
		
		liData = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
		
		liTemplates = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");

		liRoot = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");

		ul.addChild(liRoot);
		addNode(root, liRoot, 1);
		
		liJS.addChild(new TreeItem("", "JS"));
		ul.addChild(liJS);

		liCss.addChild(new TreeItem("", "CSS"));
		ul.addChild(liCss);
		
		liTemplates.addChild(new TreeItem("", "Templates"));
		ul.addChild(liTemplates);
		
		liData.addChild(new TreeItem("", "Data"));
		ul.addChild(liData);
		renderFiles();
	}
	
	public StructureTreeItem getItem(Designable designable, JSContainer currentNode){
		for(JSContainer des : currentNode.getChildren()){
			if(des instanceof StructureTreeItem){
				StructureTreeItem titem = (StructureTreeItem)des;
				if(designable.getId().equals(titem.getDesignable().getId())){
					return titem;
				}
			}
			StructureTreeItem child = getItem(designable, des);
			if(child != null){
				return child;
			}
		}
		
		return null;
	}
	
	public TreeItem getItem(String type){
		if(type.equals("stylesheets")){
			return (TreeItem)liCss.getChildren().get(0);
		}else if(type.equals("templates")){
			return (TreeItem)liTemplates.getChildren().get(0);
		}else if(type.equals("scripts")){
			return (TreeItem)liJS.getChildren().get(0);
		}else if(type.equals("data")){
			return (TreeItem)liData.getChildren().get(0);
		}
		return null;
	}
	
	
	public void reload(String type){
		reload();
		TreeItem item = getItem(type);
		item.open();
	}
	
	public void reload(Designable designable){
		StructureTreeItem item = getItem(designable, liRoot);
		//alert(item);
		if(item != null){
			Integer level = Integer.parseInt(item.getParent().getAttribute("aria-level"));
			JSContainer li = item.getParent();
			li.getChildren().clear();
			li.setRendered(false);
			addNode(designable, li, level);
			item.open();
			
		}
	}

	public void unselect(JSContainer c) {
		
	}
	
	
	public void renderFiles(){
		
		EventListener listener = new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				// TODO Auto-generated method stub
				File f = (File)source.getData();
				if(f.getName().endsWith("html")){
					HTMLEditor editor = new HTMLEditor(f.getName());
					builder.openEditor(f.getName(), editor);
					editor.open(f);
				}else if(f.getName().endsWith("css")){
					CSSEditor editor = new CSSEditor(f.getName());
					builder.openEditor(f.getName(), editor);
					editor.open(f);
				}else if(f.getName().endsWith("js")){
					JavascriptEditor editor = new JavascriptEditor(f.getName());
					builder.openEditor(f.getName(), editor);
					editor.open(f);
				}
				
			}
		};
		
		JSContainer cstylesheets = new JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
		for(File f : builder.getProject().getStylesheets()){
			TreeItem item = new TreeItem(f.getName(), f.getTitle());
			item.addIcon("delete", "utility");
			item.addIcon("up", "utility");
			item.addIcon("down", "utility");
			item.addIcon("copy", "utility");
			item.addIcon("cut", "utility");
			item.addIcon("paste", "utility");
			item.setData(f);
			item.addEventListener(listener, "click");
			JSContainer li =new JSContainer("li").addChild(item).setAttribute("role", "treeitem").setAttribute("aria-level", "2");
			liCss.addChild(cstylesheets.addChild(li));
		}
		
		JSContainer cscripts = new JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
		for(File f : builder.getProject().getScripts()){
			TreeItem item = new TreeItem(f.getName(), f.getTitle());
			item.setData(f);
			item.addEventListener(listener, "click");
			JSContainer li =new JSContainer("li").addChild(item).setAttribute("role", "treeitem").setAttribute("aria-level", "2");
			liJS.addChild(cscripts.addChild(li));
		}
		
		JSContainer cdata = new JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
		for(File f : builder.getProject().getDataEnvironment()){
			TreeItem item = new TreeItem(f.getName(), f.getTitle());
			item.setData(f);
			item.addEventListener(listener, "click");
			JSContainer li =new JSContainer("li").addChild(item).setAttribute("role", "treeitem").setAttribute("aria-level", "2");
			liData.addChild(cdata.addChild(li));
		}
		
		JSContainer chtml = new JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
		for(File f : builder.getProject().getTemplates()){
			TreeItem item = new TreeItem(f.getName(), f.getTitle());
			item.setData(f);
			item.addEventListener(listener, "click");
			JSContainer li =new JSContainer("li").addChild(item).setAttribute("role", "treeitem").setAttribute("aria-level", "2");
			liTemplates.addChild(chtml.addChild(li));
		}
	}
	

	public void addNode(Designable ctn, JSContainer li, int level) {
		// li.setHtml(ctn.getName());
		StructureTreeItem item = new StructureTreeItem(ctn.getName(), ctn);
		li.addChild(item).setAttribute("role", "treeitem").setAttribute("aria-level", level + "");
		item.addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {
				evt.stopPropagation();
				
				VisualEditor editor = ((JSContainer)root).getAncestorWithClass("visual-editor");
				Component willAdd = editor.getWillAddComponent();
				if(willAdd != null){
					//source.setStyle("cursor", "")
					StructureTreeItem itemS = ((StructureTreeItem) source);
					//itemS.getDesignable();
					editor.addNewComponent(willAdd,itemS.getDesignable());
				}else{
					
					StructureTreeItem itemS = ((StructureTreeItem) source);
	
					if (selected != null) {
						selected.select(false);
					}
					
					
					selected = itemS;
					selected.select(true);
				}
			}
		}, "click");

		item.addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {

				evt.stopPropagation();
				EventEditor editor = new EventEditor("editor", root);
				builder.openEditor("Event editor", editor);
				editor.setDesignable(item.getDesignable());
			}
		}, "dblclick");

		List<Designable> designables = ctn.getDesignables();
		if (designables != null && designables.size() > 0) {
			item.leaf(false);
			JSContainer children = new JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
			li.addChild(children);
			for (Designable c : ctn.getDesignables()) {
				JSContainer child = new JSContainer("li");
				children.addChild(child);
				addNode(c, child, level + 1);
			}
		} else {
			item.leaf(true);
		}

	}

}
