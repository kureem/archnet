package framework.builder.data;

import jsweet.lang.Array;

public interface DataEnvironment {
	
	public void getDataStructures(RemoteDataListener<Array<DataStructure>> listener);
	
	
	public void saveStructure(DataStructure datastructure);

	
	public void deleteStructure(String name);
	
	
}
