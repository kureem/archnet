package framework;

public interface InputField<T> extends Renderable{

	public T getValue();
	
	public void setValue(T val);
	
	public void setRawValue(String value);
	 
}
 