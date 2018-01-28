package framework.builder.data;

import static def.jquery.Globals.$;

import def.jquery.JQueryXHR;
import jsweet.lang.Array;
import jsweet.util.function.TriFunction;

public class RestDataSource implements DataSource<jsweet.lang.Object> {

	private jsweet.lang.Object config;
	
	private Array<jsweet.lang.Object> cached = new Array<>();

	public jsweet.lang.Object getConfig() {
		return config;
	}
	
	public void setUrl(String url){
		config.$set("url", url);
	}
	
	public void setFilter(jsweet.lang.Object filter){
		config.$set("filter", filter);
	}

	public void setConfig(jsweet.lang.Object config) {
		this.config = config;
	}
	
	public Array<jsweet.lang.Object> getCached(){
		return cached;
	}

	@Override
	public void getList(RemoteDataListener<Array<jsweet.lang.Object>> loader, int offset, int max) {
		String url = (String) config.$get("url");
		jsweet.lang.Object filter = (jsweet.lang.Object) config.$get("filter");
		if(filter == null){
			filter = new jsweet.lang.Object();
		}
		
		filter.$set("offset", offset);
		filter.$set("max", max);
		$.get(url, filter, new TriFunction<Object, String, JQueryXHR, Object>() {

			@SuppressWarnings("unchecked")
			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				cached = ((Array<jsweet.lang.Object>) t);
				loader.dataLoaded((Array<jsweet.lang.Object>) t);
				return null;
			}
		}, "json");
	}

	@Override
	public void save(jsweet.lang.Object data, RemoteDataListener<jsweet.lang.Object> response) {

		String url = (String) config.$get("url");
		$.post(url, data, new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				response.dataLoaded((jsweet.lang.Object) t);
				return null;
			}
		}, "json");

	}

	@Override
	public void delete(jsweet.lang.Object data, RemoteDataListener<jsweet.lang.Object> response) {
		String url = (String) config.$get("url");
		$.post(url + "/delete", data, new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				response.dataLoaded((jsweet.lang.Object) t);
				return null;
			}
		}, "json");

	}

	@Override
	public void count(RemoteDataListener<Long> loader) {
		String url = (String) config.$get("url");
		jsweet.lang.Object filter = (jsweet.lang.Object) config.$get("filter");
		if(filter == null){
			filter = new jsweet.lang.Object();
		}
		$.get(url + "/count", filter, new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				loader.dataLoaded((Long) t);
				return null;
			}
		}, "json");

	}

	@Override
	public void getItem(jsweet.lang.Object item, RemoteDataListener<jsweet.lang.Object> loader) {
		String url = (String) config.$get("url");
		$.get(url + "/load", item, new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				loader.dataLoaded((jsweet.lang.Object) t);
				return null;
			}
		}, "json");

	}

}
