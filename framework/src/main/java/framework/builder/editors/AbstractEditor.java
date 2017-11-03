package framework.builder.editors;

import framework.JSContainer;
import framework.builder.Builder;
import framework.builder.data.File;
import framework.builder.data.ProjectService;
import framework.builder.data.RemoteDataListener;
import framework.core.BeanFactory;

public abstract class AbstractEditor<T> extends JSContainer implements Editor<T> {

	private File file;

	private ProjectService projectService = BeanFactory.getInstance().getBeanOfType(ProjectService.class);

	public AbstractEditor(String name, String tag) {
		super(name, tag);
	}

	public abstract String getMarshall();

	public void save() {
		String data = getMarshall();
		file.setData(data);
		projectService.saveFile(file, new RemoteDataListener() {

			@Override
			public void dataLoaded(Object data) {
				String title = getAttribute("title");
				Builder.websocket.send("open:" + title);

				// alert(JSON.stringify(data));
			}
		});
	}

	public abstract T createNew(File f);

	public abstract T unmarshall(File f);

	public abstract void consume(T data);

	public void open(File f) {
		this.file = f;
		if (file.getData() != null && file.getData().length() > 0) {
			T unmarshaled = unmarshall(file);
			consume(unmarshaled);
		} else {
			consume(createNew(file));
		}
	}

}
