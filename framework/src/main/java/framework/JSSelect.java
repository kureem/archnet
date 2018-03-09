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

public class JSSelect extends JSContainer implements InputField<String> {

	
	private String previousValue;
	public JSSelect(String name) {
		super(name, "select");
	}

	public JSSelect addOption(JSOption option) {
		addChild(option);
		return this;
	}

	@Override
	public String getValue() {
		jsweet.dom.HTMLSelectElement ele = (jsweet.dom.HTMLSelectElement) getNative();
		if(ele != null){
			return ele.value;
		}
		String val = getAttribute("value");
		for (JSContainer opt : getChildren()) {
			if (opt.getAttribute("value").equals(val)) {
				return ((JSOption) opt).getValue();
			}
		}
		return null;
	}

	@Override
	public void setValue(String val) {
		previousValue = getValue();
		jsweet.dom.HTMLSelectElement ele = (jsweet.dom.HTMLSelectElement) getNative();
		if(ele != null){
			ele.value = val;
		}
		
		setAttribute("value", val);
		for (JSContainer opt : getChildren()) {
			if (opt.getAttribute("value").equals(val)) {
				((JSOption) opt).setSelected(true);
			}
		}
		
	}
	
	public String getPreviousValue(){
		return previousValue;
	}

	@Override
	public void setRawValue(String value) {
		setAttribute("value", value);
	}

}
