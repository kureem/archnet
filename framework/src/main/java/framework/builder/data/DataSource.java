package framework.builder.data;

import jsweet.lang.Array;

public interface DataSource<T> {
	
	public void getList(RemoteDataListener<Array<T>> loader, int offset, int max);
	
	public void getItem(T item,RemoteDataListener<T> loader);
	
	public void count(RemoteDataListener<Long> loader);
	
	public void save(T data,RemoteDataListener<T> response);
	
	public void delete(T data,RemoteDataListener<T> response);

}
