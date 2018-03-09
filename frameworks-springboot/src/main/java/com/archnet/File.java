package com.archnet;

import java.util.LinkedList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class File {

	@Id
	private String path;

	private String title;

	private String name;
	
	@Column(length=600000000)
	private String data;

	//private Date dateCreated = new Date();

	//private Date dateModified = new Date();

	//private String author;

	private String type = getClass().getName();

	@JsonIgnore
	@OneToOne
	private File parent;
	
	
	@OneToMany(fetch=FetchType.EAGER,cascade = CascadeType.ALL)
	private List<File> children = new LinkedList<>();

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	
	public File getParent() {
		return parent;
	}
	
	

	public void addFile(File file) {

		file.parent = this;
		children.add(file);
		file.setPath(path + "/" + file.getName());

	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<File> getChildren() {
		return children;
	}

	public void setChildren(List<File> children) {
		this.children = children;
	}

	public void setParent(File parent) {
		this.parent = parent;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	

}
