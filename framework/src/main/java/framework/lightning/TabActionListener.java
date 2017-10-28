package framework.lightning;

public interface TabActionListener {
	
	public void onActivate(TabItem item);
	
	public void onDeactivate(TabItem item);
	
	public void onClose(TabItem item);

}
