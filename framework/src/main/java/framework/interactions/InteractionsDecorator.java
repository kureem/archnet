package framework.interactions;

import framework.Renderable;
import framework.core.Decorator;

public class InteractionsDecorator implements Decorator {

	private final static DraggableRenderer draggableRenderer = new DraggableRenderer();

	private final static DroppableRenderer droppableRenderer = new DroppableRenderer();

	@Override
	public void decorate(Renderable renderable) {
		if (renderable instanceof Draggable) {
			if (!renderable.getRenderers().contains(draggableRenderer)) {
				renderable.addRenderer(draggableRenderer);
			}

		}

		if (renderable instanceof Droppable) {
			if (!renderable.getRenderers().contains(droppableRenderer)) {
				renderable.addRenderer(droppableRenderer);
			}
		}
	}

}
