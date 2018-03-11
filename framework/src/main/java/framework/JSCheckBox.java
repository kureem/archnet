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

import framework.InputField;
import framework.InputTypes;
import framework.JSContainer;
import jsweet.dom.HTMLInputElement;

public class JSCheckBox extends JSContainer implements InputField<Boolean> {

	public JSCheckBox(String name) {
		super(name, "input");
		setAttribute("type", InputTypes.checkbox);
	}

	public JSCheckBox setDisabled(boolean b) {
		if (b) {
			setAttribute("disabled", "true");
		} else {
			setAttribute("disabled", null);
		}
		return this;
	}

	@Override
	public Boolean getValue() {
		
		HTMLInputElement el = (HTMLInputElement)getNative();
		if(el != null){
			//setValue(el.checked);
			return el.checked;
		}
		if (getAttribute("value") != null && "true".equalsIgnoreCase(getAttribute("value"))) {
			return true;
		}
		return false;
	}

	@Override
	public void setValue(Boolean b) {
		if (b) {
			setAttribute("value", "true");
			setAttribute("checked", "true");
		} else {
			setAttribute("value", "false");
			setAttribute("checked", null);
		}
		HTMLInputElement el = (HTMLInputElement)getNative();
		if(el != null){
			setValue(el.checked);
		//	return el.checked;
		}
		

	}


	public boolean isChecked() {
		return getValue();
	}

	public void setChecked(boolean b) {
		setValue(b);
	}

}
