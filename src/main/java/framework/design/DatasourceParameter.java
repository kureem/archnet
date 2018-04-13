package framework.design;

import framework.builder.properties.PropertyEditor;

public class DatasourceParameter extends AttributeParameter{

	public DatasourceParameter(String name, String label, String category) {
		super(name,label,category);
	}

	@Override
	public PropertyEditor getEditor(Designable designable) {
		/*options = new Array<>();
		Builder builder = ((JSContainer)designable).getAncestorWithClass("builder");
		File project = builder.getProject();
		for(File f :  project.getChild("variables").getChildren()){
			options.push(new Option(f.getTitle(),f.getName()));
		}
		
		return super.getEditor(designable);*/
		
		return null;
	}
	
	
	
	

}
