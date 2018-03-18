package framework.lightning.designables;

import framework.Adaptor;
import framework.ServiceCallback;
import framework.core.BeanFactory;
import framework.design.AttributeParameter;
import framework.design.Designable;
import framework.design.NameParameter;
import framework.design.Option;
import framework.design.Parameter;
import framework.designables.JSDesignableDataProvider;
import jsweet.dom.CustomEvent;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class JSDesignableSOQL extends JSDesignableDataProvider implements Designable{
	
	private Adaptor adaptor = BeanFactory.getInstance().getBeanOfType(Adaptor.class);

	public JSDesignableSOQL(String name) {
		super(name);
		applyParam("limit", "10");
		applyParam("offset", "0");
	}

	@Override
	public void execute() {
		String query = getAttribute("query");
		String offset = getAttribute("offset");
		String limit = getAttribute("limit");
		
		if(limit != null && limit.length() > 0){
			query = query + " LIMIT " + limit;
		}
		
		if(offset != null && offset.length() > 0){
			query = query + " OFFSET " + offset;
		}
		
		
		
		Object payload = new Object();
		payload.$set("q", query);
		
		adaptor.Execute(this, "query", payload, new ServiceCallback() {
			
			@Override
			public boolean consume(java.lang.Object response, double statusCode) {
				CustomEvent evt = new CustomEvent("success");
				evt.$set("data", response);
				fireListener("success",evt );
				return true;
			}
		});
		
		
	}

	
	public JSDesignableSOQL setQuery(String query){
		applyParam("query", query);
		return this;
	}
	
	public JSDesignableSOQL setOffSet(int offset){
		applyParam("offset",offset + "");
		return this;
	}
	
	public JSDesignableSOQL setLimit(int limit){
		applyParam("limit",limit + "");
		return this;
	}
	
	
		// TODO Auto-generated cons
	@Override
	public Array<Parameter> getParameters() {
	//	Array<Parameter> params = delegate.getParameters();
		
		Array<Parameter> params = new Array<>();
		params.push(new NameParameter("Name", "Basic"));
		AttributeParameter hidden = new AttributeParameter("dhidden", "Hidden", "Basic");
		hidden.options.push(new Option("",""));
		
		AttributeParameter exposeAs = new AttributeParameter("exposeAs", "Expose with var", "Basic");
		
		params.push(hidden, exposeAs);

		//AttributeParameter url = new AttributeParameter("service", "Service", "Basic");
		//AttributeParameter method = new AttributeParameter("method", "Method", "Basic");
		
		AttributeParameter query = new AttributeParameter("query", "Query", "Basic");
		
		AttributeParameter limit = new AttributeParameter("limit", "Limit", "Basic");
		
		AttributeParameter offset = new AttributeParameter("offset", "Offset", "Basic");
		
		params.push(query, limit,offset);

		return params;

	}

}
