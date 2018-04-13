package framework.core;

public class BeanFactory {

	private static BeanFactory INSTANCE = new BeanFactory();

	private jsweet.lang.Object beans = new jsweet.lang.Object();

	public static BeanFactory getInstance() {
		return INSTANCE;
	}

	protected void onInit(Object obj) {

		if (obj instanceof Initializable) {
			((Initializable) obj).doInit();
		}

	}

	protected void initBeanFactoryAware(Object bean) {

		if (bean instanceof BeanFactoryAware) {
			initBeanFactoryAware((BeanFactoryAware) bean);
		}
	}
 
	public void addBean(Class<?> mixing, Object instance) {
		String mixxingName = mixing.toString();
		
		onInit(instance);
		initBeanFactoryAware(instance);
		beans.$set(mixxingName, instance);
	//	addBean(name, instance);
	}

	

	@SuppressWarnings("unchecked")
	public <T> T getBeanOfType(Class<T> clazz) {
		for (String key : jsweet.lang.Object.keys(beans)) {
			Object bean = beans.$get(key);
			try{
				if (bean.getClass().isAssignableFrom(clazz)) {
					return (T) bean;
				}
			}catch(Exception e){
			
			}
		}
		
		
		String mixing = clazz.toString();
		if(beans.hasOwnProperty(mixing)){
			return (T)beans.$get(mixing);
		}
		return null;
		//throw new java.lang.RuntimeException("No bean of type " + clazz.getName() + " found in factory");
	}

	public Object getBean(String name) {
		return beans.$get(name);
	}

}
