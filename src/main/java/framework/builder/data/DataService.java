package framework.builder.data;

import static def.jquery.Globals.$;

import framework.util.Map;

import def.jquery.JQueryXHR;
import jsweet.util.function.TriFunction;

public class DataService {

	public void getDataTypes(RemoteDataListener<Object> listener) {
		
		$.get("/objects/describe", new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				listener.dataLoaded(t);

				return null;
			}
		}, "json");

	}

	public void describe(String type, RemoteDataListener<Object> listener) {
		
		$.get("/objects/describe/" + type, new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				listener.dataLoaded(t);

				return null;
			}
		}, "json");

	}

	public void query(String query, RemoteDataListener<Object> listener) {
		
		$.get("/objects/query?q=" + query, new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				listener.dataLoaded(t);

				return null;
			}
		}, "json");

	}

	public void create(String type, Map<String, Object> fields, RemoteDataListener<Object> listener) {
		
		jsweet.lang.Object data = new jsweet.lang.Object();
		for (String key : fields.keySet()) {
			data.$set(key, fields.get(key));
		}

		$.post("/projects/create?name=" + type, data, new TriFunction<Object, String, JQueryXHR, Object>() {

			@Override
			public Object apply(Object t, String u, JQueryXHR v) {
				listener.dataLoaded(t);
				return null;
			}
		}, "json");

	}

	public void update(String type, String objectId, Map<String, Object> fields, RemoteDataListener<Object> listener) {
		
		jsweet.lang.Object data = new jsweet.lang.Object();
		for (String key : fields.keySet()) {
			data.$set(key, fields.get(key));
		}

		$.post("/projects/update?name=" + type + "&id=" + objectId, data,
				new TriFunction<Object, String, JQueryXHR, Object>() {

					@Override
					public Object apply(Object t, String u, JQueryXHR v) {
						listener.dataLoaded(t);
						return null;
					}
				}, "json");

	}

	public void delete(String type, String objectId, RemoteDataListener<Object> listener) {
		$.get("/projects/delete?name=" + type + "&id=" + objectId,
				new TriFunction<Object, String, JQueryXHR, Object>() {

					@Override
					public Object apply(Object t, String u, JQueryXHR v) {
						listener.dataLoaded(t);
						return null;
					}
				}, "json");

	}

}
