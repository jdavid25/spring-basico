// Call the dataTables jQuery plugin
$(document).ready(function() {
    // document ready
});

async function iniciarSesion(){

    let datos = {};
    datos.email = document.querySelector('#email').value;
    datos.password = document.querySelector('#clave').value;

    const request = await fetch('/api/login',{
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(datos)
        });

    const respuesta = await request.text();

    if(respuesta != 'FAIL'){
        localStorage.token = respuesta;
        localStorage.email = datos.email;
        location.href = "http://localhost:8080/usuarios.html";
    }else{
        alert('Credenciales incorrectas!');
    }
}