package framework.builder.data;

import framework.JSContainer;
import jsweet.lang.Array;

public interface DataEnvironment {
	
	public void getDataStructures(JSContainer source,RemoteDataListener<Array<DataStructure>> listener);
	
	
	public void saveStructure(DataStructure datastructure);

	
	public void deleteStructure(String name);
	
	
}
