package com.archnet.salesforce;

//@Component
public class Force {

/*	private static final String REST_VERSION = "41.0";

	//@Bean
	private OAuth2RestTemplate oAuth2RestTemplate(OAuth2ProtectedResourceDetails resource,
			OAuth2ClientContext context) {
		return new OAuth2RestTemplate(resource, context);
	}

	@Autowired
	private OAuth2RestTemplate restTemplate;

	@SuppressWarnings("unchecked")
	private static String restUrl(OAuth2Authentication principal) {
		HashMap<String, Object> details = (HashMap<String, Object>) principal.getUserAuthentication().getDetails();
		HashMap<String, String> urls = (HashMap<String, String>) details.get("urls");
		return urls.get("rest").replace("{version}", REST_VERSION);
	}

	@SuppressWarnings("unchecked")
	public Map<Object, Object> types(OAuth2Authentication principal) {
		String url = restUrl(principal) + "sobjects";
		return restTemplate.getForObject(url, Map.class);
	}
	
	
	@SuppressWarnings("unchecked")
	public Map<Object,Object> describe(OAuth2Authentication principal, String type){
		String url = restUrl(principal) + "sobjects/"+type+"/describe";
		return restTemplate.getForObject(url, Map.class);
	}

	public List<Account> accounts(OAuth2Authentication principal) {
		String url = restUrl(principal) + "query/?q={q}";

		Map<String, String> params = new HashMap<>();
		params.put("q", "SELECT Id, Name, Type, Industry, Rating FROM Account");

		return restTemplate.getForObject(url, QueryResultAccount.class, params).records;
	}

	@JsonIgnoreProperties(ignoreUnknown = true)
	public static class Account {
		public String Id;
		public String Name;
		public String Industry;
		public String Rating;
	}

	@JsonIgnoreProperties(ignoreUnknown = true)
	private static class QueryResult<T> {
		public List<T> records;
	}

	private static class QueryResultAccount extends QueryResult<Account> {
	}*/

}