package framework.builder;

import framework.EventListener;
import framework.JSContainer;
import framework.builder.data.File;
import framework.builder.data.ProjectService;
import framework.builder.data.RemoteDataListener;
import framework.core.BeanFactory;
import jsweet.dom.Event;
import jsweet.lang.Array;

public class OpenProject extends ItemSelector implements EventListener, RemoteDataListener<Object> {

	private Builder builder_;

	private UIFile selectedItem = null;

	public OpenProject(String name, Builder builder) {
		super(name, "Open Project");
		this.builder_ = builder;
		getSaveButton().addEventListener(this, "click");
		getInput().setVisible(false);
		getSaveButton().setLabel("Open");
	}

	@Override
	public void performAction(JSContainer source, Event evt) {
		if(source instanceof UIFile){
			selectedItem = ((UIFile)source);
		}else if (selectedItem != null) {
			File p = (File) selectedItem.getData();
			builder_.openProject(p);
			close();
			getBackdrop().close();
		}
		
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public void dataLoaded(Object data) {
		Array<jsweet.lang.Object> nprojects = (Array<jsweet.lang.Object>) data;
		for (jsweet.lang.Object p : nprojects) {
			File project = new File(p);
			UIFile file = new UIFile(project.getName());
			file.setTitle(project.getTitle());
			file.setAbbr("LGT");
			file.setData(project);
			file.addEventListener(this, "click");
			getFilesList().addFile(file);
		}
		render();
		// TODO Auto-generated method stub

	}

	public void init() {
		getFilesList().clearChildren();
		getFilesList().setRendered(false);
		BeanFactory.getInstance().getBeanOfType(ProjectService.class).getProjects(this,this);
	}

}
