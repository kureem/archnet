package framework;

public interface ServiceCallback {

	boolean consume(Object response, double statusCode);
	
}
