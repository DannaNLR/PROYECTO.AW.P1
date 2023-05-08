const email= document.getElementById("email");
const contraseña= document.getElementById("password");
const apellido= document.getElementById("Surname");
const nombre= document.getElementById("Name");
const telefono= document.getElementById("mobile");
const form= document.getElementById("inicio");

/*Comprobacion de registro*/
function validarFormulario() {
    var formulario = document.getElementById("formulario");
    var username = formulario.elements["username"].value;
    var email = formulario.elements["email"].value;
    var password = formulario.elements["password"].value;

    if (username.length < 4) {
    alert("El nombre de usuario debe tener al menos 4 caracteres.");
    return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
    alert("Por favor ingrese un correo electrónico válido.");
    return false;
    }

    if (password.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return false;
    }

    return true;
    
}
document.getElementById("formulario").addEventListener("submit", function() {
    window.location.replace("index.html");
});

/*Comprobacion de inicio de sesion*/
function validarFormulario() {
// Obtener los valores de los campos del formulario
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

if (password.length < 8) {
    alert("Por favor ingrese una contraseña valida.")
    return false;
    }

if (!email.includes("@")) {
    alert("Por favor ingrese un correo electrónico válido.");
    return false;
}
return true;
}

document.getElementById("inicio").addEventListener("submit", function() {
    window.location.replace("index1.html");
});

// Función para editar el marca
function editarmarca() {
    var marca = prompt("Ingrese el nueva marca");
    if (marca != null) {
        document.getElementById("marca").innerHTML = marca;
    }
}

// Función para editar modelo
function editarmodelo() {
    var modelo = prompt("Ingrese nuevo modelo");
    if (modelo != null) {
        document.getElementById("modelo").innerHTML = modelo;
    }
}

// Función para editar año
function editaraño() {
    var año = prompt("Ingrese nuevo año");
    if (año != null) {
        document.getElementById("año").innerHTML = año;
    }
}

// Función para editar color
function editarcolor() {
    var color = prompt("Ingrese nuevo color");
    if (color != null) {
        document.getElementById("color").innerHTML = color;
    }
}

// Función para guardar los cambios
function guardarCambios() {
    alert("Cambios guardados correctamente");
}
//agregar vehiculo
const vehiculo = {};

function registrarVehiculo(event) {
        event.preventDefault();
    
    const vehiculo = {
    marca: document.getElementById('marca').value,
    modelo: document.getElementById('modelo').value,
    año: document.getElementById('año').value,
    color: document.getElementById('color').value
    };
    
    localStorage.setItem('vehiculo', JSON.stringify(vehiculo));
    window.location.href = 'index2.html';
}