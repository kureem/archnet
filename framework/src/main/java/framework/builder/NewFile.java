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

public class NewFile extends ItemSelector {

	private UIFile lightning = new UIFile("lightning").setAbbr("LGT").setTitle("Lightning")
			.setHelp("Salesforce Lightning Project");

	private UIFile mobile = new UIFile("mobile").setAbbr("MOB").setTitle("Mobile Application")
			.setHelp("Mobile application using OnsenUI framework");

	private UIFile html = new UIFile("templates").setAbbr("HTM").setTitle("HTML template")
			.setHelp("Create a fragment of HTML that can be used as template for other components");

	private UIFile css = new UIFile("stylesheets").setAbbr("CSS").setTitle("CSS sheet")
			.setHelp("Create an cascading stylesheet to be included in project");

	private UIFile javascript = new UIFile("scripts").setAbbr("JS").setTitle("Javascript file")
			.setHelp("Create a new javascript file to be included in project");

	private List<UIFile> files = new LinkedList<>();

	private String fileType = null;

	private Builder builder;

	public NewFile(String name, Builder builder_) {
		super(name, "New File");
		this.builder = builder_;
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

		for (UIFile file : files) {
			file.addEventListener(new EventListener() {

				@Override
				public void performAction(JSContainer source, Event evt) {
					fileType = source.getName();
				}
			}, "click");
		}

		getSaveButton().addEventListener(new EventListener() {

			@Override
			public void performAction(JSContainer source, Event evt) {
				if (fileType == null) {
					alert("Please select a file type");
					return;
				}

				String name = getInput().getValue();
				if (name == null || name.trim().length() <= 0) {
					alert("Please enter a name for the file");
					return;
				}
				
				if(fileType.equalsIgnoreCase("lightning")){
					createLightning(name);
				}else if(fileType.equalsIgnoreCase("mobile")){
					
				}else{
					createFile(name, fileType);
				}
			}
		}, "click");
	}

	public void createFile(String name, String type){
		if(type.equalsIgnoreCase("stylesheets")){
			if(!name.endsWith(".css")){
				name = name + ".css";
			}
		}else if(type.equalsIgnoreCase("scripts")){
			
			if(!name.endsWith(".js")){
				name = name + ".js";
			}
			
		}else if(type.equalsIgnoreCase("templates")){
			if(!name.endsWith(".html")){
				name = name + ".html";
			}
		}else if(type.equalsIgnoreCase("data")){
			if(!name.endsWith(".dat")){
				name = name + ".dat";
			}
		}
		File project = builder.getProject();
		project.createFile(name, type, new RemoteDataListener() {
			
			@Override
			public void dataLoaded(Object data) {
				alert(JSON.stringify(data));
			}
		});
		
	}
	
	public void createLightning(String name) {
		
		if(!name.endsWith(".prj")){
			name = name + ".prj";
		}

		BeanFactory.getInstance().getBeanOfType(ProjectService.class).createProject(name, name,
				new RemoteDataListener() {

			@Override
			public void dataLoaded(Object data) {

				File project = new File(new jsweet.lang.Object(data));
				close();
				render();
				getBackdrop().render();
				builder.openProject(project);
				builder.render();
			}
		});
		
		
	}

}
