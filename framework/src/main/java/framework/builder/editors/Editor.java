package framework.builder.editors;

import framework.Renderable;

public interface Editor extends Renderable {

	public void openNew();

	public void close();

	public void save();

	public void undo();

	public void redo();
	
	public void open(Object file);
}
