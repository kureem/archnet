package framework.builder.editors;

import framework.Renderable;
import framework.builder.data.File;

public interface Editor<T> extends Renderable {

	// public void openNew();

	// public void close();

	public void save();
	
	public void dirty();
	
	public void clean();

	// public void undo();

	// public void redo();

	public void open(File file);

	public Structure getStructure();

	public VisualEditor getRootEditor();

}
