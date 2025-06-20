const form = document.getElementById('formLogin');
const alerta = document.getElementById('alertaPersonalizada');
const mensajeAlerta = document.getElementById('mensajeAlerta');
const botonCerrarAlerta = document.getElementById('botonCerrarAlerta');

form.addEventListener('submit', function(event) {
event.preventDefault(); 

const usuario = document.getElementById("usuario").value;
const contrasena = document.getElementById("contrasena").value;

if (usuario === "admin" && contrasena === "1234") {
    mostrarAlerta("¡Bienvenido a tu cuenta!");
} else {
    mostrarAlerta("Usuario o contraseña incorrectos");
}
});

function mostrarAlerta(mensaje) {
mensajeAlerta.textContent = mensaje;
alerta.style.display = 'flex';
}

botonCerrarAlerta.onclick = () => {
alerta.style.display = 'none';
if (mensajeAlerta.textContent === "¡Bienvenido!") {
    form.submit();
}
};