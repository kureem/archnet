package framework.renderer;

import static def.jquery.Globals.$;
import static jsweet.dom.Globals.document;

import java.util.List;

import framework.EventListener;
import framework.InputField;
import framework.JSContainer;
import framework.JSHTMLFragment;
import framework.JSInput;
import framework.Renderable;
import framework.core.BeanFactory;
import framework.core.Decorator;
import framework.core.DecoratorsRegistry;
import jsweet.dom.HTMLElement;
import jsweet.dom.HTMLInputElement;
import jsweet.dom.HTMLSelectElement;
import jsweet.dom.HTMLTextAreaElement;
import jsweet.dom.NamedNodeMap;
import jsweet.dom.Node;

public class ContainerRenderer implements Renderer<JSContainer> {

	public void decorate(JSContainer c) {
		for (Decorator dec : BeanFactory.getInstance().getBeanOfType(DecoratorsRegistry.class).getDecorators()) {
			dec.decorate(c);
		}
	}

	public void doRender(JSContainer c, HTMLElement root) {
		HTMLElement jq = document.getElementById(c.getId());
		String tag = c.getTag();
		boolean rendered = c.isRendered();
		String name = c.getName();
		String html = c.getHtml();
		Renderable parent = c.getParent();
		if (!rendered) {
			decorate(c);
			if (jq != null)
				jq.remove();
			HTMLElement njq = document.createElement(tag);
			if (name != null && name.length() > 0)
				njq.setAttribute("name", name);
			njq.setAttribute("id", c.getId());
			njq.innerHTML = html;
			renderAttributes(njq, c, false);
			renderStyles(njq, c, false);

			if (parent == null) {
				if (root == null) {
					Node body = document.getElementsByTagName("body").$get(0);
					body.appendChild(njq);
				} else {
					if (parent instanceof JSHTMLFragment) {
						$(parent).find("#" + parent.getId() + " [name=" + name + "]").replaceWith(njq);
					} else {
						root.appendChild(njq);
					}
				}
			} else {

				if (parent instanceof JSHTMLFragment) {
					$("#" + parent.getId() + " [name=" + name + "]").replaceWith(njq);
				} else {
					int index = parent.getChildren().indexOf(c);
					Renderable nextSib = null;
					if (index < parent.getChildren().size() - 1) {
						nextSib = parent.getChildren().get(index + 1);
						if (!nextSib.isRendered()) {
							nextSib = null;
						}
					}

					if (nextSib != null) {
						Node p = document.getElementById(parent.getId());
						p.insertBefore(njq, document.getElementById(nextSib.getId()));
					} else {
						document.getElementById(parent.getId()).appendChild(njq);
					}
				}
			}
			renderEvents(njq, c);
			execCommands(njq, c);
			c.flush("a28n12l10");
		} else {
			renderAttributes(jq, c, true);
			renderStyles(jq, c, true);
			execCommands(jq, c);
			c.flush("a28n12l10");

		}
	}

	protected void execCommands(HTMLElement njq, Renderable container) {
		/*for (JSCommand command : container.getCommands()) {
			String name = command.getName();
			jsweet.lang.Object params = command.getParameters();
			String variable = command.getVariable();
			if ("null".equals(variable)) {
				variable = null;
			}
			if (params == null && variable == null) {
				eval("njq." + name + "()");
			} else if (params != null) {
				eval("njq." + name + "(params)");
			} else if (variable != null) {
				eval("njq." + name + "(" + variable + ")");
			}
		}*/
	}

	protected void renderEvents(HTMLElement njq, JSContainer c) {

		for (String key : c.getListeners().keySet()) {
			final List<EventListener> listeners = c.getListeners().get(key);
			njq.addEventListener(key, (evt) -> {
				synchronizeFields(c.getRoot().getNative(), c.getRoot());
				for (EventListener l : listeners) {
					
					l.performAction(c, evt);
				}
				c.getRoot().render();
			});

		}
	}

	protected void synchronizeFields(HTMLElement njq, Renderable jsfield) {

		if (jsfield instanceof InputField) {
			InputField<String> inputField = (JSInput) jsfield;
			if (jsfield.getTag().equals("input") && "checkbox".equals(jsfield.getAttribute("type"))) {
				HTMLInputElement field = (HTMLInputElement) document.getElementById(jsfield.getId());
				if (field.checked) {
					inputField.setRawValue("true");
				} else {
					inputField.setRawValue("false");
				}
			} else if (jsfield.getTag().equals("input")) {

				HTMLInputElement field = (HTMLInputElement) document.getElementById(jsfield.getId());
				if ("checkbox".equals(jsfield.getAttribute("type"))) {
					if (field.checked) {
						inputField.setRawValue("true");
					} else {
						inputField.setRawValue("false");
					}
				} else {
					String value = field.value;
					inputField.setRawValue(value);
				}
			} else if (jsfield.getTag().equalsIgnoreCase("select")) {
				HTMLSelectElement field = (HTMLSelectElement) document.getElementById(jsfield.getId());
				String value = field.value;
				inputField.setRawValue(value);
			} else if (jsfield.getTag().equalsIgnoreCase("textarea")) {
				HTMLTextAreaElement field = (HTMLTextAreaElement) document.getElementById(jsfield.getId());
				String value = field.value;
				inputField.setRawValue(value);
			} else {
				HTMLElement field = document.getElementById(jsfield.getId());
				if(field != null){
					String value = field.getAttribute("value");
					inputField.setRawValue(value);
				}
			}
		}

		for (Renderable c : jsfield.getChildren()) {
			synchronizeFields(document.getElementById(c.getId()), c);
		}

	}

	protected void renderAttributes(HTMLElement njq, Renderable c, boolean changed) {

		if (changed) {
			for (String key : c.getChangedAttributes()) {
				if (c.getAttribute(key) == null) {
					njq.removeAttribute(key);
				} else {
					njq.setAttribute(key, c.getAttribute(key));
				}
			}
		} else {
			for (String key : c.getAttributeNames()) {
				if (c.getAttribute(key) != null)
					njq.setAttribute(key, c.getAttribute(key));
			}
		}
	}

	protected void clearAttributes(HTMLElement elem) {
		NamedNodeMap attrs = elem.attributes;
		for (double i = 0; i < attrs.length; i++) {
			if (!attrs.$get(i).name.equals("id"))
				elem.removeAttribute(attrs.$get(i).name);
		}
	}

	protected void clearStyles(HTMLElement jq) {
		jq.removeAttribute("style");

	}

	protected void renderStyles(HTMLElement njq, Renderable c, boolean changed) {

		if (changed) {
			for (String key : c.getChangedStyles()) {
				njq.style.setProperty(key, c.getStyle(key));
			}
		} else {
			for (String key : c.getStyleNames()) {
				njq.style.setProperty(key, c.getStyle(key));
			}
		}
	}
}
