package framework;

public interface Function3<T1, T2, T3, R> {

	/**
	 * Applies this function to the given arguments.
	 */
	R apply(T1 p1, T2 p2, T3 p3);

}
