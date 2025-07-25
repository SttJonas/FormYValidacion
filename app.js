const form = document.getElementById("formulario");

//se obtiene el contenedor donde se mostrarán los mensajes creados
const contenedor = document.getElementById("alertaContenedor");

// verificacion para que la contraseña tenga al menos una letra y un numero
//  let tieneLetra = password.match(/[a-z A-Z]/g);
//  let tieneNumero = password.match(/[0-9]/g);
//  if (!tieneLetra || !tieneNumero) {
//    mostrarMensaje();
//    return; //se para el codigo si la evaluacion falla
//  }

function validarPassword(pass) {
  if (!(pass.length >= 6 && /[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass))) {
    mostrarMensaje("la contraseña debe tener al menos 6 caracteres, una mayuscula, una minuscula y un numero");
    return false;
  }
  return true;
}


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
  let letras = nombre.match(/[a-zA-Z]/g);
  if (!letras || letras.length < 3) {
    mostrarMensaje("El nombre debe tener al menos 3 letras");
    return; //se para el codigo si la evaluacion falla
  }

  //validacion para que el email tenga si o si "@" y "."
  if (!email.match(/@/) || !email.match(/\./)) {
    mostrarMensaje("el email no tiene un formato correcto");
    return;
  }

  //validacion de la contraseña
  //se llama a la funcion validarPassword para verificar que la contraseña cumpla con los requisitos
  if (!validarPassword(password)) {
  return; //se para el código si la validación falla
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
