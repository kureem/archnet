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

public class JSOption extends JSContainer {

	public JSOption(String text, String value) {
		super("option");
		setAttribute("value", value);
		setHtml(text);
	}

	public String getValue() {
		return getAttribute("value");
	}

	public void setValue(String value) {
		setAttribute("value", value);
	}

	public String getText() {
		return getHtml();
	}

	public void setText(String label) {
		setHtml(label);
	}
	
	public void setSelected(boolean b){
		if (b) {
			setAttribute("selected", "true");
		}else{
			setAttribute("selected", null);
		}
	}

}
