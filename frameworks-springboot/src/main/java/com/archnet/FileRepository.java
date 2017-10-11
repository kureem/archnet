package com.archnet;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface FileRepository extends CrudRepository<File, String>{	
	
	public List<File> findByType(String type);

}
