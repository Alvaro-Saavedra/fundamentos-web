// Mostrar nombre en consola
console.log("Alvaro Saavedra");

// Capturar el botón
const boton = document.querySelector("button");

// Agregar evento al botón
boton.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    alert("Formulario enviado correctamente");
});
