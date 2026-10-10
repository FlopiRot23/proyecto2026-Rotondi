const ANIMALES = [
  {
    id: "delfin",
    zona: 1,
    nombre: "Delfín Nariz de Botella",
    cientifico: "Tursiops truncatus",
    rango: "0m - 150m",
    imagen: "imagenes/delfin.jpg",
    resumen:
      "Se comunican mediante silbidos únicos que funcionan exactamente como nombres propios.",
    estado: "Preocupación Menor (LC)",
    perfil: [
      {
        etiqueta: "Rango de Profundidad",
        valor: "0m - 150m (costero y oceánico)",
      },
      { etiqueta: "Longitud Máxima", valor: "Hasta 4 metros" },
      { etiqueta: "Peso Estimado", valor: "Entre 200 y 300 kg" },
      {
        etiqueta: "Hábitat",
        valor: "Aguas templadas y tropicales de todo el mundo",
      },
      { etiqueta: "Dieta", valor: "Peces, calamares y crustáceos" },
    ],
    dato: "¿Sabías que cada delfín desarrolla un silbido propio y el resto del grupo lo usa para llamarlo?",
    parrafos: [
      "Vive en grupos de diez a treinta individuos con relaciones estables que pueden durar décadas. Cazan coordinados: rodean a los cardúmenes, los empujan contra la superficie y se reparten los turnos de ataque.",
      "Su ecolocalización emite hasta mil chasquidos por segundo. Con el eco distingue forma, tamaño y densidad y puede detectar un pez enterrado en la arena.",
    ],
  },
  {
    id: "tortuga",
    zona: 1,
    nombre: "Tortuga Verde",
    cientifico: "Chelonia mydas",
    rango: "0m - 110m",
    imagen: "imagenes/tortuga.jpg",
    resumen:
      "Navegan distancias masivas usando el campo magnético de la Tierra como su GPS interno.",
    estado: "En Peligro (EN)",
    perfil: [
      {
        etiqueta: "Rango de Profundidad",
        valor: "0m — 110m (praderas costeras)",
      },
      { etiqueta: "Longitud Máxima", valor: "Hasta 1,5 m de caparazón" },
      { etiqueta: "Peso Estimado", valor: "Hasta 190 kg" },
      { etiqueta: "Hábitat", valor: "Costas tropicales y subtropicales" },
      { etiqueta: "Dieta", valor: "Pastos marinos y algas" },
    ],
    dato: "¿Sabías que es la única tortuga marina que se vuelve herbívora al crecer? Su dieta de pasto marino tiñe su grasa de verde.",
    parrafos: [
      "Las hembras vuelven a desovar a la misma playa donde nacieron después de recorrer miles de kilómetros. La orientación combina el campo magnético con señales químicas del agua.",
      "Cada nidada tiene entre 100 y 200 huevos, y la temperatura de la arena define el sexo de las crías: cuanto más cálida, más hembras.",
    ],
  },
  {
    id: "payaso",
    zona: 1,
    nombre: "Pez Payaso",
    cientifico: "Amphiprion ocellaris",
    rango: "1m - 30m",
    imagen: "imagenes/pez-payaso.jpg",
    resumen:
      "Poseen una capa de mucosidad que los inmuniza completamente contra el veneno de la anémona.",
    estado: "Preocupación Menor (LC)",
    perfil: [
      {
        etiqueta: "Rango de Profundidad",
        valor: "1m — 30m (arrecifes de coral)",
      },
      { etiqueta: "Longitud Máxima", valor: "Hasta 11 cm" },
      { etiqueta: "Peso Estimado", valor: "Menos de 250 g" },
      { etiqueta: "Hábitat", valor: "Arrecifes del Indo-Pacífico" },
      { etiqueta: "Dieta", valor: "Zooplancton, algas y restos de la anémona" },
    ],
    dato: "¿Sabías que todos nacen macho? El ejemplar dominante del grupo cambia de sexo para convertirse en la hembra reproductora.",
    parrafos: [
      "Vive toda su vida dentro de una única anémona, a la que defiende de peces mariposa y otros depredadores. En intercambio, la anémona le da refugio frente a cualquier cazador.",
      "La inmunidad al veneno no es innata: el pez se frota lentamente contra los tentáculos hasta cubrirse de una mucosidad que la anémona reconoce como propia.",
    ],
  },
  {
    id: "medusa",
    zona: 2,
    nombre: "Medusa Luna Bioluminiscente",
    cientifico: "Aurelia aurita",
    rango: "200m - 800m",
    imagen: "imagenes/medusa.jpg",
    resumen:
      "Emiten destellos rítmicos de color cian para ahuyentar y confundir a los depredadores nocturnos.",
    estado: "No Evaluada (NE)",
    perfil: [
      { etiqueta: "Rango de Profundidad", valor: "200m — 800m" },
      { etiqueta: "Diámetro", valor: "Campana de 25 a 40 cm" },
      { etiqueta: "Peso Estimado", valor: "Más del 95% de su cuerpo es agua" },
      {
        etiqueta: "Hábitat",
        valor: "Aguas costeras y de mar abierto en todo el mundo",
      },
      { etiqueta: "Dieta", valor: "Zooplancton y larvas" },
    ],
    dato: "¿Sabías que no tiene cerebro ni corazón? Una red nerviosa repartida por la campana coordina todo su movimiento.",
    parrafos: [
      "Se desplaza contrayendo la campana, uno de los sistemas de propulsión más eficientes del reino animal en energía por distancia recorrida.",
      "Los destellos no son continuos: llegan en pulsos rítmicos que confunden la vista de sus depredadores y, a la vez, delatan su posición a cazadores más grandes.",
    ],
  },
  {
    id: "espada",
    zona: 2,
    nombre: "Pez Espada",
    cientifico: "Xiphias gladius",
    rango: "0m - 800m",
    imagen: "imagenes/pez-espada.jpg",
    resumen:
      "Tienen órganos especiales que calientan sus ojos y cerebro para cazar mejor en temperaturas gélidas.",
    estado: "Preocupación Menor (LC)",
    perfil: [
      { etiqueta: "Rango de Profundidad", valor: "0m — 800m (migra a diario)" },
      { etiqueta: "Longitud Máxima", valor: "Hasta 4,5 metros" },
      { etiqueta: "Peso Estimado", valor: "Hasta 650 kg" },
      { etiqueta: "Hábitat", valor: "Océanos templados y tropicales" },
      { etiqueta: "Dieta", valor: "Calamares y peces pelágicos" },
    ],
    dato: "¿Sabías que calienta sus ojos y su cerebro hasta 15 °C por encima del agua para no perder velocidad de reacción en la profundidad?",
    parrafos: [
      "Es uno de los peces más rápidos del mar: el cuerpo rígido y el rostro alargado reducen la resistencia al avance. Usa la espada para golpear y aturdir a sus presas, no para ensartarlas.",
      "Pasa el día a varios cientos de metros y sube de noche a cazar cerca de la superficie, siguiendo la misma migración vertical que su alimento.",
    ],
  },
  {
    id: "linterna",
    zona: 3,
    nombre: "Pez Linterna del Abismo",
    cientifico: "Melanocetus johnsonii",
    rango: "1.200m - 3.000m",
    imagen: "imagenes/pez-linterna.jpg",
    resumen:
      "Su antena está repleta de bacterias simbióticas que brillan para atraer presas descuidadas hacia su boca.",
    estado: "No Evaluada (NE)",
    perfil: [
      { etiqueta: "Rango de Profundidad", valor: "1.200m — 3.000m" },
      {
        etiqueta: "Longitud Máxima",
        valor: "Hembras hasta 18 cm; machos 3 cm",
      },
      { etiqueta: "Peso Estimado", valor: "Unos pocos gramos" },
      { etiqueta: "Hábitat", valor: "Zona batipelágica de todos los océanos" },
      { etiqueta: "Dieta", valor: "Peces y crustáceos que atrae con su luz" },
    ],
    dato: "¿Sabías que la luz de su antena no es propia? La producen bacterias simbióticas que el pez aloja y alimenta.",
    parrafos: [
      "El señuelo luminoso cuelga sobre su boca y se mueve como una presa pequeña. Cuando algo se acerca, la mandíbula se abre en milisegundos y el estómago se dilata para tragar animales más grandes que él.",
      "Los machos son diminutos y no cazan: viven apenas el tiempo necesario para encontrar una hembra siguiendo el rastro de su olor.",
    ],
  },
  {
    id: "calamar",
    zona: 3,
    nombre: "Calamar Gigante",
    cientifico: "Architeuthis dux",
    rango: "1.000m - 2.500m",
    imagen: "imagenes/calamar.jpg",
    resumen:
      "Poseen los ojos más grandes del reino animal, del tamaño de platos, optimizados para detectar destellos lejanos.",
    estado: "Datos Insuficientes (DD)",
    perfil: [
      {
        etiqueta: "Rango de Profundidad",
        valor: "1.000m — 2.500m (Principalmente batipelágico)",
      },
      { etiqueta: "Longitud Máxima", valor: "Hasta 13 metros (Hembras)" },
      { etiqueta: "Peso Estimado", valor: "Aproximadamente 275 kg" },
      { etiqueta: "Hábitat", valor: "Cañones marinos profundos globales" },
      { etiqueta: "Dieta", valor: "Peces de profundidad y otros calamares" },
    ],
    dato: "¿Sabías que sus ventosas tienen dientes afilados de quitina para sujetar firmemente a sus presas en la oscuridad?",
    parrafos: [
      "El calamar gigante es uno de los moluscos más esquivos de nuestro planeta. Ha sido observado vivo en su entorno natural solo en contadas ocasiones durante las últimas décadas gracias a sumergibles robóticos avanzados. Cuentan con un sistema de propulsión a chorro altamente eficiente y una inteligencia de cefalópodo que desconcierta a los investigadores.",
      "Para evitar a su depredador principal, el cachalote, estos calamares poseen ojos del tamaño de balones que reflejan cualquier pequeña chispa de bioluminiscencia provocada por el desplazamiento del gran mamífero en el agua negra.",
    ],
  },
  {
    id: "isopodo",
    zona: 3,
    nombre: "Isópodo Gigante",
    cientifico: "Bathynomus giganteus",
    rango: "550m - 2.500m",
    imagen: "imagenes/isopodo.jpg",
    resumen:
      "Un pariente agrandado de la cochinilla que limpia el fondo comiendo lo que cae desde arriba.",
    estado: "No Evaluada (NE)",
    perfil: [
      { etiqueta: "Rango de Profundidad", valor: "550m — 2.500m" },
      { etiqueta: "Longitud Máxima", valor: "Hasta 50 cm" },
      { etiqueta: "Peso Estimado", valor: "Cerca de 1,7 kg" },
      {
        etiqueta: "Hábitat",
        valor: "Fondos fangosos del Atlántico occidental",
      },
      { etiqueta: "Dieta", valor: "Carroña que se hunde hasta el fondo" },
    ],
    dato: "¿Sabías que puede pasar años sin comer? Un ejemplar en cautiverio rechazó todo alimento durante más de cinco años.",
    parrafos: [
      "Es un crustáceo emparentado con la cochinilla de tierra, agrandado por el gigantismo abisal. Se enrolla sobre sí mismo cuando algo lo amenaza y su caparazón queda como escudo.",
      "Come de a grandes atracones: cuando encuentra un cadáver se alimenta hasta quedar inmóvil, y después sobrevive meses con las reservas acumuladas.",
    ],
  },
  {
    id: "groenlandia",
    zona: 3,
    nombre: "Tiburón de Groenlandia",
    cientifico: "Somniosus microcephalus",
    rango: "0m - 2.200m",
    imagen: "imagenes/tiburon-groenlandia.jpg",
    resumen:
      "El vertebrado más longevo que se conoce: hay ejemplares de más de tres siglos nadando hoy.",
    estado: "Vulnerable (VU)",
    perfil: [
      { etiqueta: "Rango de Profundidad", valor: "0m — 2.200m" },
      { etiqueta: "Longitud Máxima", valor: "Hasta 7 metros" },
      { etiqueta: "Peso Estimado", valor: "Más de 1.000 kg" },
      { etiqueta: "Hábitat", valor: "Aguas del Ártico y del Atlántico norte" },
      { etiqueta: "Dieta", valor: "Peces, focas y carroña" },
    ],
    dato: "¿Sabías que es el vertebrado más longevo conocido? La datación de sus cristalinos da edades de hasta 400 años.",
    parrafos: [
      "Nada a menos de un kilómetro por hora, más lento que una foca dormida, y aun así aparecen focas en su estómago: se cree que las sorprende mientras descansan.",
      "Alcanza la madurez sexual alrededor de los 150 años, lo que vuelve a la especie extremadamente vulnerable a la pesca incidental.",
    ],
  },
  {
    id: "gota",
    zona: 4,
    nombre: "Pez Gota (Blobfish)",
    cientifico: "Psychrolutes marcidus",
    rango: "4.000m - 4.800m",
    imagen: "imagenes/pez-gota.jpg",
    resumen:
      "Fuera del agua se colapsa, pero a su profundidad natural tiene una densidad gelatinosa perfecta.",
    estado: "No Evaluada (NE)",
    perfil: [
      { etiqueta: "Rango de Profundidad", valor: "4.000m — 4.800m" },
      { etiqueta: "Longitud Máxima", valor: "Hasta 30 cm" },
      { etiqueta: "Peso Estimado", valor: "Cerca de 2 kg" },
      {
        etiqueta: "Hábitat",
        valor: "Fondos frente a Australia y Nueva Zelanda",
      },
      { etiqueta: "Dieta", valor: "Invertebrados que pasan cerca del fondo" },
    ],
    dato: "¿Sabías que casi no tiene músculo ni esqueleto? Su carne gelatinosa es menos densa que el agua y lo mantiene flotando sin gastar energía.",
    parrafos: [
      "A 4.000 metros la presión es unas 400 veces la de la superficie. Un cuerpo con vejiga natatoria sería inviable, así que la flotabilidad la resuelve con densidad, no con aire.",
      "Se queda quieto sobre el fondo esperando que la comida pase a su alcance. Su aspecto deformado, el que lo hizo famoso, aparece solo cuando lo suben en una red.",
    ],
  },
  {
    id: "dumbo",
    zona: 4,
    nombre: "Pulpo Dumbo",
    cientifico: "género Grimpoteuthis",
    rango: "4.000m - 6.000m",
    imagen: "imagenes/pulpo-dumbo.jpg",
    resumen:
      "Utilizan un par de aletas con forma de oreja para planear perezosamente en las llanuras abisales.",
    estado: "No Evaluada (NE)",
    perfil: [
      { etiqueta: "Rango de Profundidad", valor: "4.000m — 6.000m" },
      { etiqueta: "Longitud Máxima", valor: "Entre 20 y 30 cm" },
      { etiqueta: "Peso Estimado", valor: "Menos de 1 kg" },
      {
        etiqueta: "Hábitat",
        valor: "Cerca del fondo; el pulpo que vive más profundo",
      },
      { etiqueta: "Dieta", valor: "Gusanos y crustáceos que traga enteros" },
    ],
    dato: "¿Sabías que es el único grupo de pulpos que nada aleteando en vez de expulsar agua a chorro?",
    parrafos: [
      "Las dos aletas con forma de oreja salen de la cabeza y le permiten planear sin esfuerzo sobre las llanuras abisales. La membrana entre sus brazos se abre como un paraguas para frenar y girar.",
      "No tiene bolsa de tinta: a esa profundidad no serviría de nada, porque no hay luz que una nube oscura pueda bloquear.",
    ],
  },
];
const NOMBRES_ZONA = [
  "",
  "Zona Epipelágica",
  "Zona Mesopelágica",
  "Zona Batipelágica",
  "Zona Abisopelágica",
];

const PELUCHES = [
  { nombre: "Peluche Orca del Abismo", precio: 26 },
  { nombre: "Peluche Delfín Azul", precio: 18.99 },
  { nombre: "Peluche Pulpo Dumbo", precio: 24.99 },
  { nombre: "Peluche Medusa Brillo", precio: 20 },
  { nombre: "Peluche Pez Payaso", precio: 17.5 },
  { nombre: "Peluche Tortuga Marina", precio: 22.5 },
];
const CANTIDAD_MAXIMA = 100;
const ENVIO_GRATIS_DESDE = 60;
const COSTO_ENVIO = 8;

/**
 * Arma el HTML de la tarjeta de un animal
 * @method crearTarjeta
 * @param {object} animal - Un animal de la lista ANIMALES
 * @return {string} El HTML de la tarjeta
 */
let crearTarjeta = (animal) => {
  let clase = "etiqueta etiqueta-profunda";
  if (animal.zona === 1) {
    clase = "etiqueta etiqueta-luz";
  }
  let html =
    '<a class="panel tarjeta" href="animal.html?id=' + animal.id + '">';
  html +=
    '<img class="tarjeta-imagen" src="' +
    animal.imagen +
    '" alt="' +
    animal.nombre +
    '">';
  html += '<div class="tarjeta-cuerpo">';
  html += '<div class="tarjeta-titulo-fila">';
  html += '<h3 class="tarjeta-titulo">' + animal.nombre + "</h3>";
  html += '<span class="' + clase + '">' + animal.rango + "</span>";
  html += "</div>";
  html += '<p class="texto-suave">' + animal.resumen + "</p>";
  html += "</div></a>";
  return html;
};

/**
 * Dibuja las tarjetas de cada zona
 * @method mostrarZonas
 */
let mostrarZonas = () => {
  for (let zona = 1; zona <= 4; zona++) {
    let html = "";
    for (let i = 0; i < ANIMALES.length; i++) {
      if (ANIMALES[i].zona === zona) {
        html += crearTarjeta(ANIMALES[i]);
      }
    }
    document.getElementById("grilla-zona-" + zona).innerHTML = html;
  }
};

/**
 * Dibuja la ficha del animal elegido en la dirección
 * @method mostrarFicha
 */
let mostrarFicha = () => {
  const id = window.location.search.replace("?id=", "");

  let animal = null;
  for (let i = 0; i < ANIMALES.length; i++) {
    if (ANIMALES[i].id === id) {
      animal = ANIMALES[i];
    }
  }

  const ficha = document.getElementById("ficha");
  if (animal === null) {
    ficha.innerHTML = '<p class="texto-suave">No encontramos esa especie.</p>';
    return;
  }
  document.title = animal.nombre + " | Abisal";

  let parrafos = "";
  for (let i = 0; i < animal.parrafos.length; i++) {
    parrafos += '<p class="texto-suave">' + animal.parrafos[i] + "</p>";
  }

  let perfil = "";
  for (let i = 0; i < animal.perfil.length; i++) {
    perfil +=
      "<div><dt>" +
      animal.perfil[i].etiqueta +
      "</dt><dd>" +
      animal.perfil[i].valor +
      "</dd></div>";
  }
  perfil +=
    "<div><dt>Estado de conservación</dt><dd>" + animal.estado + "</dd></div>";

  let otros = "";
  let cantidad = 0;
  for (let i = 0; i < ANIMALES.length; i++) {
    if (
      ANIMALES[i].zona === animal.zona &&
      ANIMALES[i].id !== animal.id &&
      cantidad < 3
    ) {
      otros += crearTarjeta(ANIMALES[i]);
      cantidad++;
    }
  }

  const zona = NOMBRES_ZONA[animal.zona];
  let html = '<div class="encabezado-pagina">';
  html += '<p class="subtitulo">' + zona + "</p>";
  html += '<h2 class="titulo-grande">' + animal.nombre + "</h2>";
  html += '<p class="encabezado-texto">' + animal.cientifico + "</p></div>";
  html += '<section class="grilla grilla-2">';
  html += '<article class="panel tarjeta">';
  html +=
    '<img class="tarjeta-imagen" src="' +
    animal.imagen +
    '" alt="' +
    animal.nombre +
    '">';
  html += '<div class="tarjeta-cuerpo">' + parrafos + "</div></article>";
  html +=
    '<section class="panel contacto-panel"><h3 class="titulo-panel">Perfil de especie</h3>';
  html += '<dl class="datos-contacto">' + perfil + "</dl></section></section>";
  html +=
    '<section class="panel pedido"><h3>Dato curioso</h3><p>' +
    animal.dato +
    "</p></section>";
  html +=
    '<section class="club-comparacion"><h3 class="titulo-medio">Otras criaturas de la ' +
    zona +
    "</h3>";
  html += '<div class="grilla">' + otros + "</div></section>";
  html +=
    '<div><a class="boton" href="index.html">Volver al descenso</a></div>';
  ficha.innerHTML = html;
};

/**
 * Revisa que la cantidad de un campo sea un entero entre 1 y 100.
 * Si esta mal avisa con alert, vacia el campo y le da el foco
 * @method cantidadValida
 * @param {object} campo -el input de la cantidad
 * @return {boolean} true si la cantidad esta bien y false si esta mal
 */
let cantidadValida = (campo) => {
  const valor = campo.value;
  let mensaje = "";

  if (valor === "" || isNaN(valor)) {
    mensaje = "Ingresá un número.";
  } else if (valor % 1 !== 0) {
    mensaje = "La cantidad no puede tener decimales.";
  } else if (valor < 1 || valor > CANTIDAD_MAXIMA) {
    mensaje = "La cantidad tiene que estar entre 1 y " + CANTIDAD_MAXIMA + ".";
  }

  if (mensaje !== "") {
    alert(mensaje);
    campo.value = "";
    campo.focus();
    return false;
  }
  return true;
};

/**
 * Calcula el envio, es gratis a partir de $60, si no cuesta $8
 * @method calcularEnvio
 * @param {number} subtotal Precio de los peluches
 * @return {number} Lo que cuesta el envío
 */
let calcularEnvio = (subtotal) => {
  if (subtotal >= ENVIO_GRATIS_DESDE) {
    return 0;
  }
  return COSTO_ENVIO;
};

/**
 * Calcula el total de todos los peluches con cantidad
 * @method calcularPedido
 */
let calcularPedido = () => {
  const resultado = document.getElementById("resultado-pedido");
  resultado.textContent = "";
  let subtotal = 0;

  for (let numero = 1; numero <= PELUCHES.length; numero++) {
    const campo = document.getElementById("cantidad-" + numero);
    if (campo.value !== "") {
      if (!cantidadValida(campo)) {
        return;
      }
      subtotal += campo.value * PELUCHES[numero - 1].precio;
    }
  }

  if (subtotal === 0) {
    alert("Ingresá la cantidad de al menos un peluche.");
    return;
  }
  const envio = calcularEnvio(subtotal);
  resultado.innerHTML =
    "Subtotal: $" +
    subtotal.toFixed(2) +
    "<br>Envío: $" +
    envio.toFixed(2) +
    '<span class="resultado-total">Total: $' +
    (subtotal + envio).toFixed(2) +
    "</span>";
};

/**
 * Deja seleccionado en el formulario el plan que se eligió
 * @method elegirPlan
 * @param {string} plan -  Nombre del plan: basico, premium o VIP
 */
let elegirPlan = (plan) => {
  document.getElementById("registro-plan").value = plan;
};

/**
 * Valida correo y contraseña del club y muestra la sesion
 * @method iniciarSesion
 * @return {boolean} Siempre false, para que la página no se recargue
 */
let iniciarSesion = () => {
  const correo = document.getElementById("registro-correo");
  const clave = document.getElementById("registro-clave");

  if (!correo.value.includes("@")) {
    alert("Ingresá un correo válido.");
    correo.value = "";
    correo.focus();
    return false;
  }
  if (clave.value.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    clave.value = "";
    clave.focus();
    return false;
  }

  document.getElementById("sesion-saludo").textContent =
    "Bienvenido, " + correo.value.split("@")[0];
  document.getElementById("sesion-plan").textContent =
    "Sesión activa · Plan " + document.getElementById("registro-plan").value;
  document.getElementById("panel-registro").hidden = true;
  document.getElementById("panel-sesion").hidden = false;
  document.getElementById("seccion-articulos").hidden = false;
  return false;
};

/**
 * Cierra la sesión y vuelve a mostrar el formulario
 * @method cerrarSesion
 */
let cerrarSesion = () => {
  document.getElementById("formulario-registro").reset();
  document.getElementById("panel-registro").hidden = false;
  document.getElementById("panel-sesion").hidden = true;
  document.getElementById("seccion-articulos").hidden = true;
};
