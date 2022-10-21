package com.cursojava.curso.controllers;

import com.cursojava.curso.dao.IUsuarioDao;
import com.cursojava.curso.models.Usuario;
import com.cursojava.curso.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;

@RestController
public class AuthController {

    @Autowired
    private IUsuarioDao iUsuarioDao;

    @Autowired
    private JWTUtil jwtUtil;

    @PostMapping("api/login")
    public String login(@RequestBody Usuario usuario){
        Usuario usuarioLogeado = iUsuarioDao.obtenerUsuarioPorCredenciales(usuario);
        if(usuarioLogeado != null){
            String tokenJWT = jwtUtil.create(String.valueOf(usuario.getId()),usuario.getEmail());
            return tokenJWT;
        }
        return "FAIL";
    }
}
