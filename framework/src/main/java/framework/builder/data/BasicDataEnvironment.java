package framework.builder.data;

import jsweet.lang.Array;

public class BasicDataEnvironment implements DataEnvironment{

	public static Array<DataStructure> structures = new Array<>();
	
	
	@Override
	public Array<DataStructure> getDataStructures() {
		return structures;
	}

	@Override
	public void saveStructure(DataStructure datastructure) {
		for(DataStructure structure : structures){
			/*if(structure.name.equals(datastructure.name)){
				structure.label = datastructure.label;
				structure.fields = datastructure.fields;
				return;
			}*/
		}
		structures.push(datastructure);
	}

	@Override
	public void deleteStructure(String name) {
		
		 Array<DataStructure> tmp = new Array<>();
		for(DataStructure structure : structures){
			if(!structure.getName().equals(name)){
				tmp.push(structure);
			}
		}
		
		structures = tmp;
	}

}
