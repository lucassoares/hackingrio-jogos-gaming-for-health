package com.hackingrio.developers.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.hackingrio.developers.model.Local;


@RepositoryRestResource(collectionResourceRel = "local", path = "local")
public interface LocalRepository extends JpaRepository<Local, Long> {
    
}
