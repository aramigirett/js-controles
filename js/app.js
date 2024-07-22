/*
DOMContentLoaded sirve para controlar
que primero se cargue TODO el docmento
HTML, por ultimo javascript
*/
document
.addEventListener("DOMContentLoaded", function(){
    //rsta es zona segura  
    //console.log(document.getElementById("txtNombre").value);
    //console.log(document.getElementById("txtApellido").value);
});

//añadiendo evento click al boton mostrar
const btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", function(){
    //console.log('haciendo click');
    //alert("hice click");
    //recuperando info del formulario
    const nombres = document.getElementById("txtNombre").value;
    const apellido = document.getElementById("txtApelldo").value;
    const cedula = document.getElementById("txtCedula").value;
    const direccion = document.getElementById("txtDireccion").value;
    console.log('nombres' + nombres + ',apellidos' + apellido + ',cedula' + cedula + 'direccion' + direccion+);
});


function hola(nombre, apellido) {
    console.log(nombre, apellido);
    //codigo reutilizable
}