/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hackingrio.developers.model;

import java.util.List;
import java.util.Map;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


/**
 *
 * @author Matheus
 */
@Entity
public class Local {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private String nome;
    
    private int avaliacao;
    
    @ElementCollection
    private Map<Usuario, String> comentarios;
    
    @ElementCollection
    private List<String> fotos;
    
    public Long getId(){
        return this.id;
    }
    
    public String getNome(){
        return this.nome;
    }
    
    public void setNome(String nome){
        this.nome = nome;
    }
    
    public int getAvaliacao(int avaliacao){
        return this.avaliacao;
    }
    
    public void setAvaliacao(int avaliacao){
        this.avaliacao = avaliacao;
    }
    
    public Map<Usuario, String> getComentarios(){
        return this.comentarios;
    }
    
    public void setComentarios(Map<Usuario, String> comentarios){
        this.comentarios =  comentarios;
    }
    
    public List<String> getFotos(){
        return this.fotos;
    }
    
    public void setFotos(List<String> fotos){
        this.fotos = fotos;
    }
    
}
