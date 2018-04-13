package framework.util;

import jsweet.lang.Array;
import jsweet.lang.Object;
@SuppressWarnings({ "rawtypes", "unchecked" })
public class HashMap<K,V> implements Map<K, V> {
	
	
	private Object d = new Object();

	
	@Override
	public Array<K> keySet() {
		Array result = new Array();
		for(String key : Object.keys(d)){
			result.push(key);
		}
		return result;
	}

	@Override
	public Map<K, V> put(K key, V value) {
		d.$set((String)key, value);
		return this;
	}

	@Override
	public V get(K key) {
		return (V)d.$get((String)key);
	}

	@Override
	public boolean containsKey(K key) {
		return keySet().indexOf(key)>=0;
	}

}
