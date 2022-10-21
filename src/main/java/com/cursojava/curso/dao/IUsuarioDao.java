package com.cursojava.curso.dao;

import com.cursojava.curso.models.Usuario;

import java.util.List;

public interface IUsuarioDao {
    List<Usuario> getUsuarios();
    void eliminar(Long id);
    void crear(Usuario usuario);
    Usuario obtenerUsuarioPorCredenciales(Usuario usuario);
}
