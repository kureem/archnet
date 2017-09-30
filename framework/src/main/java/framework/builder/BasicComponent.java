package framework.builder;

public class BasicComponent extends Component{

	public BasicComponent(String name, String initial, String label) {
		super("html:"+ name, initial, label);
		addClass("designer-component");
	}

}
