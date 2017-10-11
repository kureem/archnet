package framework.builder;

import static def.dom.Globals.alert;

import java.util.LinkedList;
import java.util.List;

import def.js.JSON;
import framework.EventListener;
import framework.JSContainer;
import framework.builder.data.File;
import framework.builder.data.ProjectService;
import framework.builder.data.RemoteDataListener;
import framework.core.BeanFactory;
import jsweet.dom.Event;

public class NewFile extends ItemSelector{

	private UIFile lightning = new UIFile("lightning").setAbbr("LGT").setTitle("Lightning").setHelp("Salesforce Lightning Project");
	
	private UIFile mobile = new UIFile("mobile").setAbbr("MOB").setTitle("Mobile Application").setHelp("Mobile application using OnsenUI framework");
	
	private UIFile html = new UIFile("html").setAbbr("HTM").setTitle("HTML template").setHelp("Create a fragment of HTML that can be used as template for other components");
	
	private UIFile css = new UIFile("css").setAbbr("CSS").setTitle("CSS sheet").setHelp("Create an cascading stylesheet to be included in project");
	
	private UIFile javascript = new UIFile("js").setAbbr("JS").setTitle("Javascript file").setHelp("Create a new javascript file to be included in project");
	
	
	private List<UIFile> files = new LinkedList<>();
	
	private String fileType = null;
	
	private Builder builder;
	
	public NewFile(String name, Builder builder_) {
		super(name, "New File");
		this.builder= builder_;
		getFilesList().addFile(lightning);
		getFilesList().addFile(mobile);
		getFilesList().addFile(html);
		getFilesList().addFile(css);
		getFilesList().addFile(javascript);
		
		files.add(lightning);
		files.add(mobile);
		files.add(html);
		files.add(css);
		files.add(javascript);
		
		for(UIFile file : files){
			file.addEventListener(new EventListener() {
				
				@Override
				public void performAction(JSContainer source, Event evt) {
					// TODO Auto-generated method stub
					fileType = source.getName();
				}
			}, "click");
		}
		
		
		getSaveButton().addEventListener(new EventListener() {
			
			@Override
			public void performAction(JSContainer source, Event evt) {
				if(fileType == null){
					alert("Please select a file type");
					return ;
				}
				
				String name = getInput().getValue();
				if(name == null || name.trim().length() <=0){
					alert("Please enter a name for the file");
					return;
				}
				
				BeanFactory.getInstance().getBeanOfType(ProjectService.class).createProject(name, name, new RemoteDataListener() {
					
					@Override
					public void dataLoaded(Object data) {
						
						File project = new File(new jsweet.lang.Object(data));
						
						
						
						
						alert(JSON.stringify(data));
						
						close();
						render();
						getBackdrop().render();
						builder.openProject(project);
						builder.render();
						// TODO Auto-generated method stub
						
					}
				});
			}
		}, "click");
	}

}
