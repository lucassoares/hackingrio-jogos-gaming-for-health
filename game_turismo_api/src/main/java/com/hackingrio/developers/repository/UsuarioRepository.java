package com.hackingrio.developers.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.hackingrio.developers.model.Usuario;
import com.hackingrio.developers.service.Security;

@RepositoryRestResource(collectionResourceRel = "usuario", path = "usuario")
public interface UsuarioRepository extends JpaRepository<Usuario, String> {

	Usuario findByUsername(String username);

}
