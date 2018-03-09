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

import jsweet.dom.HTMLElement;
import jsweet.dom.HTMLInputElement;

public class JSInput extends JSContainer implements InputField<String>{

	public JSInput(String name) {
		super(name, "input");
		setType(InputTypes.text);
	}
	
	
	public JSInput setType(String type){
		setAttribute("type", type);
		return this;
	}
	
	public JSInput setDisabled(boolean b){
		if(b){
			setAttribute("disabled", "true");
		}else{
			setAttribute("disabled", null);
		}
		return this;
	}


	@Override
	public String getValue() {
		HTMLElement nat = getNative();
		if(nat != null){
			HTMLInputElement el = (HTMLInputElement)nat;
			return el.value;
		}
		
		return getAttribute("value");
	}


	@Override
	public void setValue(String val) {
		HTMLElement nat = getNative();
		if(nat != null){
			HTMLInputElement el = (HTMLInputElement)nat;
			el.value = val;
		}
		
	//	return getAttribute("value");
		setAttribute("value", val);
	}


	@Override
	public void setRawValue(String value) {
		setAttribute("value", value);
	}


	
	
	

}
