const CLASES_ZONA = ['', 'zona-epipelagica', 'zona-mesopelagica', 'zona-batipelagica', 'zona-abisopelagica']

/**
 * Devuelve la clase de fondo de la sección de una zona
 * @method claseZona
 * @param {number} zona - Número de la zona (1 a 4)
 * @return {string} La clase de la sección, por ejemplo "zona-epipelagica"
 */
export let claseZona = (zona) => {
  return CLASES_ZONA[zona]
}

/**
 * Devuelve el color de la etiqueta de profundidad: cian en la zona con luz y violeta en las profundas
 * @method claseEtiqueta
 * @param {number} zona - Número de la zona (1 a 4)
 * @return {string} "etiqueta-luz" para la zona 1 y "etiqueta-profunda" para las demás
 */
export let claseEtiqueta = (zona) => {
  if (zona === 1) {
    return 'etiqueta-luz'
  }
  return 'etiqueta-profunda'
}

/**
 * Arma la ruta de una imagen que está en public/imagenes
 * @method rutaImagen
 * @param {string} archivo - Nombre del archivo, por ejemplo "delfin.jpg"
 * @return {string} La ruta completa de la imagen
 */
export let rutaImagen = (archivo) => {
  return '/imagenes/' + archivo
}
