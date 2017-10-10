package framework.builder.data;

import java.util.LinkedList;
import java.util.List;

public class BasicDataEnvironment implements DataEnvironment{

	private static List<DataStructure> structures = new LinkedList<>();
	
	
	@Override
	public List<DataStructure> getDataStructures() {
		return structures;
	}

	@Override
	public void saveStructure(DataStructure datastructure) {
		for(DataStructure structure : structures){
			if(structure.name.equals(datastructure.name)){
				structure.label = datastructure.label;
				structure.fields = datastructure.fields;
				return;
			}
		}
		structures.add(datastructure);
		//document.set
	}

	@Override
	public void deleteStructure(String name) {
		for(DataStructure structure : structures){
			if(structure.name.equals(name)){
				structures.remove(structure);
				return;
			}
		}
	}

}
