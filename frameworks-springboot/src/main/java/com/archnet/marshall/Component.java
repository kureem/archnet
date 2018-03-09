package com.archnet.marshall;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@JsonIgnoreProperties
public class Component {
	public String impl;

	public Map<String,Object> parameters = new HashMap<String, Object>();

	public List<Component> children = new ArrayList<>();

	public List<BuilderEvent> events = new ArrayList<BuilderEvent>();

	public Map<String,String> styles =  new HashMap<String, String>();

	public Object data = new Object();
	
	public Map<String, Object> custom = new HashMap<String, Object>();

}
