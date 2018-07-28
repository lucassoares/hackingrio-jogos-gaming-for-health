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
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private String nome;    
    
    private int level;
    
    private List<Local> visitados;
    
    private String nacionalidade;
    
    public String getNome(){
        return this.nome;
    }
    
    public void setNome(String nome) {
        return this.nome = nome;
    }
    
    public int getLevel() {
        return this.level;
    }
    
    public void setLevel(int level) {
        return this.level = level;
    }
    
    public List<Local> getVisitados() {
        return this.visitados;
    }
    
    public void setVisitados(List<Local> visitados ) {
        return this.visitados =  visitados;
    }
    
    public String getNacionalidade() {
        return this.nacionalidade;
    }
    
    public void setNacionalidade(String nacionalidade) {
        return this.nacionalidade = nacionalidade;
    }
}
