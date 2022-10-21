// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarUsuarios();
  $('#usuarios').DataTable();
  actualizarEmailUsuario();
});

function actualizarEmailUsuario(){
    document.querySelector('#email-usuario').innerHTML = localStorage.email;
}

async function cargarUsuarios() {

    const request = await fetch('/api/usuarios',{
        method: 'GET',
        headers: getHeaders()
    });
    const usuarios = await request.json();
    let listadoUsuarios = '';
    for(let usuario of usuarios){
        let telefono = usuario.telefono ? usuario.telefono : '-';
        let usuarioHTML = `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.nombre} ${usuario.apellido}</td>
                <td>${usuario.email}</td>
                <td>${telefono}</td>
                <td><a href="#" class="btn btn-danger btn-circle btn-sm" onClick="eliminarUsuario(${usuario.id})">
                    <i class="fas fa-trash"></i>
                </a></td>
            </tr>
        `;
        listadoUsuarios += usuarioHTML;
    }

    document.querySelector('#usuarios tbody').outerHTML = listadoUsuarios;
}

async function eliminarUsuario(id){
    if(!confirm('¿Esta seguro de eliminar este usuario?')) return;

    const request = await fetch('/api/usuarios/'+id,{
            method: 'DELETE',
            headers: getHeaders()
        });
    location.reload();
}

function getHeaders(){
    return {
       'Accept' : 'application/json',
       'Content-Type' : 'application/json',
       'Authorization' : localStorage.token
   }
}