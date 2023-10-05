let registro = [];

function registrar() {
  
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let fecha = document.getElementById("fecha").value;
  let correo = document.getElementById("correo").value;
  let telefono = document.getElementById("telefono").value;
  let identificacion = document.getElementById("identificacion").value;
  let numero = document.getElementById("numero").value;
  let hombre = document.getElementById("hombre").checked;
  let mujer = document.getElementById("mujer").checked;
  let otro = document.getElementById("otro").checked;
  let genero = 0;
  if (hombre) {
    genero = " hombre";
  } else if (mujer) {
    genero = "mujer";
  } else if (otro) {
    genero = "otro";
  }
  let user = {
    nombre: nombre,
    apellido: apellido,
    identificacion: identificacion,
    fecha: fecha,
    correo: correo,
    telefono: telefono,
    genero: genero,
    numero: numero,
  };
  

  registro.push(user);
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("identificacion").value = "";
  document.getElementById("numero").value = "";
  document.getElementById("hombre").checked = false;
  document.getElementById("mujer").checked = false;
  document.getElementById("otro").checked = false;

  console.log(registro);
}

function validar() {
  if (document.getElementById("nombre").value == "") {
      document.getElementById("alert").textContent = "El nombre no debe estar vacio"
      setTimeout(() => {
          document.getElementById("alert").textContent = ""
      }, 2000);
  } else if (document.getElementById("apellido").value == "") {
      document.getElementById("alert").textContent = "El apellido no debe estar vacio"
      setTimeout(() => {
          document.getElementById("alert").textContent = ""
      }, 2000);
  }
  else if (document.getElementById("fecha").value == "") {
    document.getElementById("alert").textContent = "seleccione un fecha de nacimiento"
    setTimeout(() => {
        document.getElementById("alert").textContent = ""
    }, 2000);
}
else if (document.getElementById("correo").value == "") {
  document.getElementById("alert").textContent = "El correo no debe estar vacio"
  setTimeout(() => {
      document.getElementById("alert").textContent = ""
  }, 2000);
}
else if (document.getElementById("telefono").value == "") {
  document.getElementById("alert").textContent = "El telefono no debe estar vacio"
  setTimeout(() => {
      document.getElementById("alert").textContent = ""
  }, 2000);
}
else if (document.getElementById("numero").value == "") {
  document.getElementById("alert").textContent = "El numero de identificacion no debe estar vacio"
  setTimeout(() => {
      document.getElementById("alert").textContent = ""
  }, 2000);
}
else if (document.getElementById("identificacion").value == "") {
  document.getElementById("alert").textContent = "seleccione un tipo de identificacion valido"
  setTimeout(() => {
      document.getElementById("alert").textContent = ""
  }, 2000);
}
else if (document.getElementById("").value == "") {
  document.getElementById("alert").textContent = "seleccione su genero"
  setTimeout(() => {
      document.getElementById("alert").textContent = ""
  }, 2000);
}





  else {
   registrar()
  }
}