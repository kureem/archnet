package framework.builder.data;

import framework.core.BeanFactory;
import jsweet.lang.Array;

public class BasicDataEnvironment implements DataEnvironment{

	public static Array<DataStructure> structures = new Array<>();
	
	
	@Override
	public void getDataStructures(RemoteDataListener<Array<DataStructure>> listener) {
		if(structures.length == 0){
			BeanFactory.getInstance().getBeanOfType(ProjectService.class).getDataStructures(new RemoteDataListener<Object>() {
				
				@SuppressWarnings("unchecked")
				@Override
				public void dataLoaded(Object data) {
					
					jsweet.lang.Object obj = (jsweet.lang.Object)data;
					
					Array<jsweet.lang.Object> sobjects =(Array<jsweet.lang.Object>) obj.$get("sobjects");
					for(jsweet.lang.Object o : sobjects){
						DataStructure structure = new DataStructure(o);
						structures.push(structure);
					}
					listener.dataLoaded(structures);
				}
			});
		}else{
			listener.dataLoaded(structures);
		}
	}

	@Override
	public void saveStructure(DataStructure datastructure) {
		//for(DataStructure structure : structures){
			/*if(structure.name.equals(datastructure.name)){
				structure.label = datastructure.label;
				structure.fields = datastructure.fields;
				return;
			}*/
		//}
		//structures.push(datastructure);
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
