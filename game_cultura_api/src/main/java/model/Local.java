/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

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
    
    private Map<Usuario, String> comentarios;
    
    private List<String> fotos;
    
    public int getId(){
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
    
    public List<String> getComentarios(){
        return this.comentarios;
    }
    
    public void setComentarios(List<String> comentarios){
        this.comentarios = comentarios;
    }
    
    public List<String> getFotos(){
        return this.fotos;
    }
    
    public void setFotos(List<String> fotos){
        this.fotos = fotos;
    }
    
}
