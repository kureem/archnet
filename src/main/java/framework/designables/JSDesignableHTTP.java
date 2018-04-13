package framework.designables;

import static def.jquery.Globals.$;

import def.jquery.JQueryAjaxSettings;
import def.jquery.JQueryXHR;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.Option;
import framework.design.Parameter;
import jsweet.dom.CustomEvent;
import jsweet.lang.Array;
import jsweet.lang.JSON;

public class JSDesignableHTTP extends JSDesignableDataProvider implements Designable {

	public JSDesignableHTTP() {
		super("Http Connector");
		applyParam("method", "GET");
	}

	public void execute() {
		String url = getAttribute("url");
		String method = getAttribute("method");
		String payload = getAttribute("payload");
		if (url != null && method != null && method.length() > 0 && url.length() > 0) {
			if (payload == null || payload.length() <= 0) {
				payload = "{}";
			}

			JQueryAjaxSettings settings = new JQueryAjaxSettings() {
				@Override
				public java.lang.Object error(JQueryXHR jqXHR, String textStatus, String errorThrown) {
					CustomEvent evt = new CustomEvent("error");
					evt.$set("error", errorThrown);
					fireListener("error", evt);
					return null;
				}

				@Override
				public java.lang.Object success(java.lang.Object data, String textStatus, JQueryXHR jqXHR) {
					CustomEvent evt = new CustomEvent("success");
					evt.$set("data", data);
					evt.$set("status", textStatus);
					fireListener("success", evt);
					return null;
				}
				@Override
				public Object beforeSend(JQueryXHR jqXHR, JQueryAjaxSettings settings) {
					CustomEvent evt = new CustomEvent("beforeSend");
					//evt.$set("data", data);
					evt.$set("settings", settings);
					fireListener("beforeSend", evt);
					return null;
				}
			};

			settings.type = method;

			settings.data = JSON.parse(payload);
			settings.url = url;
			$.ajax(settings);

		}
	}
	
	

	@Override
	public Array<Parameter> getParameters() {
		Array<Parameter> params = delegate.getParameters();

		AttributeParameter url = new AttributeParameter("url", "Url", "Basic");
		AttributeParameter method = new AttributeParameter("method", "Method", "Basic");
		method.options.push(new Option("GET", "GET"));
		method.options.push(new Option("POST", "POST"));
		AttributeParameter payload = new AttributeParameter("payload", "Payload", "Basic");

		params.push(url, method, payload);

		return params;
	}

}
