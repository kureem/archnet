package framework.builder.data;

import java.util.List;

public interface DataEnvironment {
	
	public List<DataStructure> getDataStructures();
	
	
	public void saveStructure(DataStructure datastructure);

	
	public void deleteStructure(String name);
}
