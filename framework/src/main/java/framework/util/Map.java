package framework.util;

import jsweet.lang.Array;

public interface Map <K,V>{
	
	public Array<K> keySet();
	
	public Map<K,V> put(K key, V value);
	
	public V get(K key);
	
	public boolean containsKey(K key);

}
