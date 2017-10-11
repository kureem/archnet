package com.archnet;

import javax.persistence.Entity;

@Entity
public class Project extends File{
	
	private String projectType;
 
	public String getProjectType() {
		return projectType;
	}

	public void setProjectType(String projectType) {
		this.projectType = projectType;
	}
	
	
	

}
