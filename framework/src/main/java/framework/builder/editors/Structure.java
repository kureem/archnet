package framework.builder.editors;


import java.util.List;

import framework.EventListener;
import framework.JSContainer;
import framework.TreeItem;
import framework.design.Designable;
import jsweet.dom.Event;


public class Structure extends JSContainer{

	
	private Designable root ;
	
	
	private JSContainer ul = new JSContainer("ul");
	
	private JSContainer liJS ;
	
	
	private JSContainer liCss = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
	
	
	private JSContainer liRoot = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
	
	private TreeItem selected = null;
	
	public Structure(String name, Designable root) {
		super(name, "div");
		addClass("structure");
		addClass("slds-tree_container");
		
		addChild(ul.addClass("slds-tree").setAttribute("role", "tree"));
		this.root = root;
		reload();
		
	}
	
	
	public void reload(){
		ul.getChildren().clear();
		
		ul.setRendered(false);
		
		 liJS = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
		
		
		 liCss = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
		
		
		 liRoot = new JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
		
		 
		ul.addChild(liRoot);
		addNode(root, liRoot,1);
		
		//liJS.setHtml("js");
		liJS.addChild(new TreeItem("", "JS"));
		ul.addChild(liJS);
		
		liCss.addChild(new TreeItem("", "CSS"));
		ul.addChild(liCss);
	}
	
	public void unselect(JSContainer c){
		
	}
	
	public void addNode(Designable ctn, JSContainer li, int level){
		//li.setHtml(ctn.getName());
		StructureTreeItem item =new StructureTreeItem("",ctn); 
		li.addChild(item).setAttribute("role", "treeitem").setAttribute("aria-level", level +"");
		li.addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				// TODO Auto-generated method stub
				evt.stopPropagation();
				if(selected != null && item.equals(selected)){
					return;
				}
				item.select(true);
				if(selected != null){
					selected.select(false);
				}
				selected = item;
				
			}
		}, "click");
		List<Designable> designables = ctn.getDesignables();
		if(designables != null && designables.size() >0){
			item.leaf(false);
			JSContainer children = new JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
			li.addChild(children);
			for(Designable c : ctn.getDesignables()){
				JSContainer child = new JSContainer("li");
				children.addChild(child);
				addNode(c, child, level+1);
			}
		}else{
			item.leaf(true);
		}
		
	}


	
	

}
 