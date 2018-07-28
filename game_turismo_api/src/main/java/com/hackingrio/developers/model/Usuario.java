/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hackingrio.developers.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.annotations.NaturalId;

/**
 *
 * @author Matheus
 */
@Entity
public class Usuario {
    @Id
    private String username;
	
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private String password;
    
    private String nome;    
    
    private int level;
    
    @OneToMany
    private List<Local> visitados;
    
    private String nacionalidade;
    
    public String getNome(){
        return this.nome;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public int getLevel() {
        return this.level;
    }
    
    public void setLevel(int level) {
        this.level = level;
    }
    
    public List<Local> getVisitados() {
        return this.visitados;
    }
    
    public void setVisitados(List<Local> visitados ) {
        this.visitados =  visitados;
    }
    
    public String getNacionalidade() {
        return this.nacionalidade;
    }
    
    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
    
    
}
