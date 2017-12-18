package framework.builder.libraries;

import framework.JSContainer;
import framework.builder.data.DataStructure;
import framework.builder.data.File;
import framework.builder.editors.Editor;
import framework.builder.editors.Structure;
import framework.builder.editors.VisualEditor;
import jsweet.lang.Array;

public class DataComposer extends JSContainer implements Editor<Array<DataStructure>> {

	//private Array<DataStructure> structures = new Array<DataStructure>();

	private VisualEditor editor;
	
	private Structure structure;
	
	public DataComposer(String name, VisualEditor editor, Structure structure) {
		super(name, "div");
		this.editor = editor;
		this.structure = structure;
	}

	@Override
	public void save() {
		
	}

	@Override
	public void dirty() {
		
	}

	@Override
	public void clean() {
		
	}

	@Override
	public void open(File file) {
		DataStructure struct = (DataStructure)file;
		DataItem item = new DataItem(struct.getName(), struct);
		addChild(item);
	}

	@Override
	public Structure getStructure() {
		return structure;
	}

	@Override
	public VisualEditor getRootEditor() {
		return editor;
	}

	

}
