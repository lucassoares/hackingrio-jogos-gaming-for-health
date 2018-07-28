package com.hackingrio.developers.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hackingrio.developers.model.Usuario;
import com.hackingrio.developers.repository.UsuarioRepository;
import com.hackingrio.developers.service.Security;

@Controller
@RequestMapping(value="/user/**")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	@ResponseBody
	public String index() {
		return "Ola";
	}
	
	@PostMapping(value = "/singin/")
	@ResponseBody
	public String singIn(@RequestParam("username") String username, @RequestParam("password") String password) throws Exception {
		try{
			String cripto = Security.criptografiaBase64Encoder(password);
			Usuario usuario = usuarioRepository.findByUsername(username);
			if(cripto.equals(usuario.getPassword())) return "True";
			else {
				throw new Exception("Senha ou usuário não estão corretos!"); 
			}
		}catch(Exception e) {
			throw new Exception("Senha ou usuário não estão corretos!"); 
		}
	}
	
	@PostMapping(value = "/singup/")
	@ResponseBody	
	public String singUp(@RequestParam("username") String username, @RequestParam("password") String password) throws Exception {
		try{
			String criptografado = Security.criptografiaBase64Encoder(password);
			Usuario usuario = new Usuario();
			usuario.setUsername(username);
			usuario.setPassword(criptografado);
			usuarioRepository.save(usuario);
			return usuario.toString();
		}catch(Exception e) {
			throw new Exception("Senha ou usuário não estão corretos!"); 
		}
	}
}
