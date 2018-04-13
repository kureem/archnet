package framework;

import jsweet.lang.Object;

public class ObjectBuilder {
	
	private  jsweet.lang.Object obj;
	
	public static ObjectBuilder New(){
		
		return New(new jsweet.lang.Object());
	}

	public static ObjectBuilder New(Object o){
		
		ObjectBuilder d = new ObjectBuilder();
		d.obj = o;
		return d;
	}
	
	
	public ObjectBuilder set(String key, java.lang.Object value){
		obj.$set(key, value);
		return this;
	}
	
	public ObjectBuilder setArray(String key, java.lang.Object...value){
		obj.$set(key, value);
		return this;
	}
	
	
	public ObjectBuilder clear(){
		for(String s : Object.keys(obj)){
			obj.$delete(s);
		}
		
		return this;
	}
	
	public ObjectBuilder remove(String key){
		obj.$delete(key);
		return this;
	}
	
	public Object done(){
		return obj;
	}
}
