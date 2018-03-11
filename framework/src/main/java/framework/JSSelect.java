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

import jsweet.dom.Element;
import jsweet.dom.HTMLOptionElement;
import jsweet.lang.Array;

public class JSSelect extends JSContainer implements InputField<Object> {

	private String previousValue;

	public JSSelect(String name) {
		super(name, "select");
	}

	public JSSelect addOption(JSOption option) {
		addChild(option);
		return this;
	}

	public void setMultiple(boolean b) {
		if (b) {
			setAttribute("multiple", "true");
		} else {
			setAttribute("multiple", null);
		}
	}

	public void setSize(double size) {
		setAttribute("size", size + "");
	}

	public boolean isMultiple() {
		return "true".equals(getAttribute("multiple"));
	}

	@Override
	public Object getValue() {

		jsweet.dom.HTMLSelectElement ele = (jsweet.dom.HTMLSelectElement) getNative();
		if (ele != null) {
			if (ele.multiple) {
				Array<String> result = new Array<String>();
				for(Element e : ele.selectedOptions){
						HTMLOptionElement opt = (HTMLOptionElement)e;
						result.push(opt.value);
				}
				return result;
			} else {
				return ele.value;
			}
		} else {
			String val = getAttribute("value");
			for (JSContainer opt : getChildren()) {
				if (opt.getAttribute("value").equals(val)) {
					return ((JSOption) opt).getValue();
				}
			}
		}
		return null;
	}

	@Override
	public void setValue(Object values) {
		
		previousValue = (String)getValue();
		if(values != null){
			jsweet.dom.HTMLSelectElement ele = (jsweet.dom.HTMLSelectElement) getNative();
			String firstVal = values.toString();
			Array<String> arrVal = new Array<String>();
			if(values instanceof Array){
				arrVal = (Array)values;
				if(arrVal.length > 0){
					firstVal = arrVal.$get(0);
				}else{
					firstVal = "";
				}
			}else{
				arrVal.push((String)values);
			}
			
			if (ele != null) {
				ele.value = firstVal;
			}
	
			setAttribute("value", firstVal);
			for (JSContainer opt : getChildren()) {
				((JSOption) opt).setSelected(false);
				for(String val : arrVal){
					if (opt.getAttribute("value").equals(val)) {
						((JSOption) opt).setSelected(true);
					}
				}
			}
		}else{
			for (JSContainer opt : getChildren()) {
				((JSOption) opt).setSelected(false);
			}
			jsweet.dom.HTMLSelectElement ele = (jsweet.dom.HTMLSelectElement) getNative();
			if (ele != null) {
				ele.value = "";
			}
			setAttribute("value", "");
		}
		

	}

	public String getPreviousValue() {
		return previousValue;
	}

}
