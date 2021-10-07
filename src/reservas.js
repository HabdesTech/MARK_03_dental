//-----------------------FUNCION PARA OBTENER LA FECHA
function fechaSesion() {
  const diaSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre", "Diciembre",
  ];

  const fecha = new Date();
  const añoActual = fecha.getFullYear();
  let nDia = fecha.getDay();
  let dia = fecha.getDate();
  const mesActual = fecha.getMonth();
  let fechaObtenida = diaSemana[nDia] + " " + dia + " de " + meses[mesActual] + " del " + añoActual;
  document.getElementById("mostrarFecha").innerHTML = fechaObtenida;
}

function recopilacionDatos() {
  // DETALLE DE LOS SEVICIOS EN RESERVA
  let diseñoDeSonrisas = document.getElementById("btn-check-outlined01").checked;
  let odontologiaGeneral = document.getElementById("btn-check-outlined02").checked;
  let limpiezaProfunda = document.getElementById("btn-check-outlined03").checked;
  let rehabilitacionOral = document.getElementById("btn-check-outlined04").checked;
  let periodoncia = document.getElementById("btn-check-outlined05").checked;
  let implantesDentales = document.getElementById("btn-check-outlined06").checked;
  let ortodonciaYBrackets = document.getElementById("btn-check-outlined07").checked;
  // DETALLE DE LA FECHA DE RESERVA
  let fechaReserva = document.getElementById("fechaDeReserva");
  // DETALLE DE LA HORA DE RESERVA
  let hora01 = document.getElementById("success-outlined01").checked;
  let hora02 = document.getElementById("success-outlined02").checked;
  let hora03 = document.getElementById("success-outlined03").checked;
  let hora04 = document.getElementById("success-outlined04").checked;
  let hora05 = document.getElementById("success-outlined05").checked;
  let hora06 = document.getElementById("success-outlined06").checked;
  let hora07 = document.getElementById("success-outlined07").checked;
  let hora08 = document.getElementById("success-outlined08").checked;
  let hora09 = document.getElementById("success-outlined09").checked;
  let hora10 = document.getElementById("success-outlined10").checked;
  let hora11 = document.getElementById("success-outlined11").checked;
  let hora12 = document.getElementById("success-outlined12").checked;
  let hora13 = document.getElementById("success-outlined13").checked;
  let hora14 = document.getElementById("success-outlined14").checked;
  let hora15 = document.getElementById("success-outlined15").checked;
  // DETALLE DEL USUARIO
  let nombreUsuario = document.getElementById("nombreUsuario");
  let dniUsuario = document.getElementById("dniUsuario");
  let telefonoUsuario = document.getElementById("telefonoUsuario");
  let correoUsuario = document.getElementById("correoUsuario");
  let metodoPago = document.getElementById("metodoPago");

  // ARRAY DE TODOS LOS SERVICIOS Y HORAS
  const TODOS_LOS_SERVICIOS = [
    diseñoDeSonrisas,
    odontologiaGeneral,
    limpiezaProfunda,
    rehabilitacionOral,
    periodoncia,
    implantesDentales,
    ortodonciaYBrackets
  ];
  const TODAS_LAS_HORAS = [
    hora01,
    hora02,
    hora03,
    hora04,
    hora05,
    hora06,
    hora07,
    hora08,
    hora09,
    hora10,
    hora11,
    hora12,
    hora13,
    hora14,
    hora15,
  ];

  // DETALLE DE LOS SERVICIOS DEL CLIENTE
  const DETALLE_DE_SERVICIOS = [
    { servicio: "Diseño de sonrisas", precio: 1500 },
    { servicio: "Odontología general", precio: 100 },
    { servicio: "Limpieza profunda", precio: 50 },
    { servicio: "Rehabilitación oral", precio: 500 },
    { servicio: "Periodoncia", precio: 95 },
    { servicio: "Implantes dentales", precio: 450 },
    { servicio: "Ortodoncia y brackets", precio: 1450 },
  ];

  const HORARIOS_DE_SERVICIO = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ];

  // DECLARACION DEL SERVICIO Y PRECIO A RESERVAR, se usará para crear el pedido de reserva
  let servicioSolicitado = [];
  let precioServicioSolicitado = [];
  let horaSolicitada = [];

  // CONDICIONAL PARA ASIGNAR UN STRING A LA VARIABLE "servicioSolicitado"
  for (let i = 0; i < TODOS_LOS_SERVICIOS.length; i++) {
    if (TODOS_LOS_SERVICIOS[i]) {
      servicioSolicitado.push(DETALLE_DE_SERVICIOS[i]["servicio"]);
    } else {
      console.log("Elige uno de nuestros servicios");
    }
  }

  // CONDICIONAL ALTERNA PARA NO MAS DE 2 SERVICIOS
  // if (diseñoDeSonrisas && odontologiaGeneral) {
  //     servicioSolicitado = DETALLE_DE_SERVICIOS.map((x) => {return x.servicio})
  // } else if (diseñoDeSonrisas) {
  //     servicioSolicitado = DETALLE_DE_SERVICIOS[0]["servicio"]
  // } else if (odontologiaGeneral) {
  //     servicioSolicitado = DETALLE_DE_SERVICIOS[1]["servicio"]
  // } else {
  //     alert("No se ha seleccionado un servicio")
  // }

  //  CONDICIONAL PARA DETERMINAR EL PRECIO DEL O LOS SERVICIOS A RESERVAR
  for (let i = 0; i < TODOS_LOS_SERVICIOS.length; i++) {
    if (TODOS_LOS_SERVICIOS[i]) {
      precioServicioSolicitado.push(DETALLE_DE_SERVICIOS[i]["precio"]);
    } else {
      console.log("Elige uno de nuestros servicios");
    }
  }
  let calculoDeServicio = precioServicioSolicitado.reduce((a, b) => a + b);

  // CONDICIONAL ALTERNA PARA NO MAS DE 2 SERVICIOS
  // if(diseñoDeSonrisas && odontologiaGeneral) {
  //     precioServicioSolicitado = DETALLE_DE_SERVICIOS.map((x) => {return x.precio})
  // } else if (diseñoDeSonrisas){
  //     precioServicioSolicitado = DETALLE_DE_SERVICIOS[0]["precio"]
  // } else if (odontologiaGeneral){
  //     precioServicioSolicitado =  DETALLE_DE_SERVICIOS[1]["precio"]
  // } else {
  //     alert("No se ha seleccionado un servicio")
  // }

  // CONDICIIONAL PARA ASIGNAR UN STRING A LA VARIABLE "horaSolicitada"
  for (let i = 0; i < TODAS_LAS_HORAS.length; i++) {
    if (TODAS_LAS_HORAS[i]) {
      horaSolicitada.push(HORARIOS_DE_SERVICIO[i]);
    } else {
      ("Elige una hora");
    }
  }

  // UN CALLBACK HELL INNECESARIO XDDDD
  // if(hora01){
  //     horaSolicitada = HORARIOS_DE_SERVICIO["0"]
  // } else if (hora02){
  //     horaSolicitada = HORARIOS_DE_SERVICIO["1"]
  // }
  // else if (hora03){
  //     horaSolicitada = HORARIOS_DE_SERVICIO["2"]
  // }
  // else if (hora04){
  //     horaSolicitada = HORARIOS_DE_SERVICIO["3"]
  // }
  // else if (hora05){
  //     horaSolicitada = HORARIOS_DE_SERVICIO["4"]
  // }
  // else if (hora06){
  //     horaSolicitada = HORARIOS_DE_SERVICIO["5"]
  // }
  // else if (hora07){
  //     horaSolicitada = HORARIOS_DE_SERVICIO["6"]
  // }
  // else if (hora08){
  //     horaSolicitada = HORARIOS_DE_SERVICIO["7"]
  // }
  // else if (hora09){
  //     horaSolicitada = HORARIOS_DE_SERVICIO["8"]
  // }
  // else if (hora10){
  //     horaSolicitada = HORARIOS_DE_SERVICIO["9"]
  // }
  // else if (hora11){
  //     horaSolicitada = HORARIOS_DE_SERVICIO["10"]
  // }
  // else if (hora12){
  //     horaSolicitada = HORARIOS_DE_SERVICIO["11"]
  // }
  // else if (hora13){
  //     horaSolicitada = HORARIOS_DE_SERVICIO["12"]
  // }
  // else if (hora14){
  //     horaSolicitada = HORARIOS_DE_SERVICIO["13"]
  // } else if (hora15){
  //     horaSolicitada = HORARIOS_DE_SERVICIO["14"]
  // } else {
  //     alert ("Por favor, selecciona una hora para la reserva")
  // }

  //CONDICIONAL PARA ENTREGAR DETALLE DEL METODO DE PAGO SELECCIONADO
  if (metodoPago.value == "Transferencia interbancaria") {
    formaPago = "Transferencia bancaria" + " " + 2003151735911;
  } else if (metodoPago.value == "Yape") {
    formaPago = "Yapea" + " -> " + 993722873;
  } else if (metodoPago.value == "Plin") {
    formaPago = "Plinea" + " -> " + 993722873;
  } else if (metodoPago.value == "tunki") {
    formaPago = "Tunkea" + " -> " + 993722873;
  } else {
    alert("Seleccioné un método de pago");
  }

  window.open(
    `https://api.whatsapp.com/send/?phone=51960995232&text=%F0%9F%91%8B+Hola%21+Acabo+de+realizar+una+reserva+en+https://veterinaria.habdes.digital/%3A%0A%0A%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BBDATOS+DEL+CLIENTE%3A%0ANombre%3A+${nombreUsuario.value}%0ADNI%3A+${dniUsuario.value}%0ATeléfono%3A+${telefonoUsuario.value}%0ACorreo+electrónico%3A+${correoUsuario.value}%0A%0A%F0%9F%93%A6+DETALLE+DE+LA+RESERVA%3A%0AServicios%3A+${servicioSolicitado}%0AFecha%3A+${fechaReserva.value}%0AHora%3A+${horaSolicitada}%0ATotal+a+pagar%3A+S/.+${calculoDeServicio}%0A%0A%F0%9F%92%B3+MÉTODO+DE+PAGO%3A%0AMétodo+de+pago+solicitado%3A+${formaPago}%0A%0A-------------------------------------------------------------------%0AEspere+mientras+confirmamos+su+reserva.+Gracias`,
    "_blank"
  );
  actualizarVentana();
}
function actualizarVentana() {
  swal(
    "Tu reserva se generó exitosamente",
    "Gracias por reservar con nosotros",
    "success"
  );
  // setTimeout(() => {document.getElementsByClassName("swal-button--confirm").click()},5000 )
  // // location.reload()
  setTimeout(() => {
    location.reload();
  }, 5000);
}

// %F0%9F%91%8B+Hola%21+Acabo+de+realizar+una+reserva+en+https://veterinaria.habdes.digital/%3A%0A%0A
// %F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BBDATOS+DEL+CLIENTE%3A%0A
// Nombre%3A+${nombreUsuario.value}%0A
// Mascota%3A+${nombreMascota.value}%0A
// Teléfono%3A+${telefonoUsuario.value}%0A
// Correo+electrónico%3A+${correoUsuario.value}%0A

// %F0%9F%93%A6+DETALLE+DE+LA+RESERVA%3A%0A
// Servicios%3A+${servicioSolicitado}%0A
// Fecha%3A+${fechaReserva.value}%0A
// Hora%3A+${horaSolicitada}%0A
// Total+a+pagar%3A+S/.+${precioServicioSolicitado}%0A%0A

// %F0%9F%92%B3+MÉTODO+DE+PAGO%3A%0A
// Método+de+pago+solicitado%3A+${formaPago}%0A%0A
// -----------------------------------%0A
// Espere+mientras+confirmamos+su+reserva.+Gracias
