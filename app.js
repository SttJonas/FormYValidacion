const form = document.getElementById("formulario");

//se obtiene el contenedor donde se mostrarán los mensajes creados
const contenedor = document.getElementById("alertaContenedor");

//Se agrega un evento al formulario para que se ejecute cuando el usuario haga click 
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // se obtiene el valor del campo "nombre"
  const nombre = document.getElementById("nombre").value.trim();

  // se obtiene el valor del campo "email"
  const email = document.getElementById("email").value.trim();

  // se obtiene el valor del campo "password"
  const password = document.getElementById("password").value;

  // se obtiene el valor del campo "confirmar contraseña"
  const confirmar = document.getElementById("confirmaPassword").value;

  // se obtiene el valor del campo "edad"
  const edad = document.getElementById("edad").value;

  //validacion para que el nombre tnga al menos 3 letras
  if (nombre.length < 3) {
    mostrarMensaje("El nombre debe tener al menos 3 letras");
    return; //se para el codigo si la evaluacion falla
  }

  //validacion para que el email tenga si o si "@" y "."
  if (!email.includes("@") || !email.includes(".")) {
    mostrarMensaje("el email no tiene un formato correcto");
    return;
  }

  //la contraseña debe tener como minimo 6 caracteres
  if (password.length < 6) {
    mostrarMensaje("la contraseña debe tener 6 caracteres o más");
    return; //se para el codigo si la evaluacion falla
  }

  //validacion para que la contraseña y la confirmacion sean iguales 
  if (password !== confirmar) {
    mostrarMensaje("las contraseñas son diferentes");
    return; //se para el codigo si la evaluacion falla
  }

  //la edad no puede estar vacia y debe ser mayor que 12
  if (edad === "" || Number(edad) <= 12) {
    mostrarMensaje("la edad debe ser mayor que 12");
    return; //se para el codigo si la evaluacion falla
  }

  //si todas la svalidaciones se cumplem, se muestra un mensaje de exito
  Swal.fire({
    icon: "success",
    title: "exito",
    text: "formulario enviado correctamente",
    timer: 3000,
    showConfirmButton: false
  });
  mostrarMensaje("formulario enviado correctamente");

  //muestra la cantidad de vocales del nombre
  const cantidadVocales = contarVocales(nombre);
  Swal.fire({
    icon: "success",
    title: "vocales",
    text: "el nombre tiene " + cantidadVocales + " vocales",
    timer: 4000,
    showConfirmButton: false
  });
});

//crea un p con y lo elimina despues de 5 segundos 
function mostrarMensaje(texto) {
  const alerta = document.createElement("p");
  alerta.textContent = texto;
  contenedor.appendChild(alerta);

  setTimeout(function () {
    contenedor.removeChild(alerta);
  }, 5000);
}

//cuenta cuantas vocales hay en el nombre
function contarVocales(nombre) {
  let cantL = 0;
  for (let i = 0; i < nombre.length; i++) {
    if (
      nombre[i] === "a" || nombre[i] === "e" || nombre[i] === "i" ||
      nombre[i] === "o" || nombre[i] === "u"
    ) {
      cantL++;
    }
  }
  return cantL;
}
