package framework.builder.data;

import java.util.List;

import jsweet.lang.Array;

public interface DataEnvironment {
	
	public Array<DataStructure> getDataStructures();
	
	
	public void saveStructure(DataStructure datastructure);

	
	public void deleteStructure(String name);
	
	
}
