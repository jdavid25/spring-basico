// Call the dataTables jQuery plugin
$(document).ready(function() {
    // document ready
});

async function registrarUsuario(){

    let datos = {};
    datos.nombre = document.querySelector('#nombre').value;
    datos.apellido = document.querySelector('#apellido').value;
    datos.email = document.querySelector('#email').value;
    datos.password = document.querySelector('#clave').value;

    let repetirClave = document.querySelector('#repetir_clave').value;
    if( repetirClave != datos.password ){
        alert('La contraseña no coincide');
        return;
    }

    console.log(datos);
    const request = await fetch('/api/usuarios',{
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(datos)
        });
    alert('la cuenta fue creada con exito!');
    location.href = "http://localhost:8080/login.html";
}