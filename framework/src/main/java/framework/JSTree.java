package framework;

public class JSTree extends JSContainer{

	private JSContainer ul = new JSContainer("ul").addClass("slds-tree").setAttribute("role", "tree");
	
	private JSContainer title = new JSContainer("h4").addClass("slds-text-title_caps");
	
	public JSTree(String name) {
		super(name, "div");
		addClass("slds-tree_container");		
		addChild(title);
		addChild(ul);
	}
	
	public void setTitle(String title){
		this.title.setHtml(title);
	}

}
