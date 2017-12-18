/*
 * Copyright 2002-2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package framework;

import framework.renderer.Renderer;
import jsweet.dom.HTMLElement;
import jsweet.dom.HTMLTextAreaElement;

public class JSTextArea extends JSContainer implements InputField<String>{

	private final static Renderer<JSTextArea> TEXT_AREA_RENDERER = new Renderer<JSTextArea>() {

		@Override
		public void doRender(JSTextArea c, HTMLElement root) {
			HTMLTextAreaElement elem = (HTMLTextAreaElement)root;
			elem.value = c.getValue();
		}
		
	};
	
	public JSTextArea(String name) {
		super(name, "textarea");
		addRenderer(TEXT_AREA_RENDERER);
	}

	public JSTextArea setDisabled(boolean b) {
		if (b) {
			setAttribute("disabled", "true");
		} else {
			setAttribute("disabled", null);
		}
		return this;
	}

	@Override
	public String getValue() {
		return getAttribute("value");
	}

	@Override
	public void setValue(String val) {
		setAttribute("value", val);
	}

	@Override
	public void setRawValue(String value) {
		setAttribute("value", value);
	}
	
	

	
}
