export const CANTIDAD_MAXIMA = 100
export const ENVIO_GRATIS_DESDE = 60
export const COSTO_ENVIO = 8

/**
 * Revisa la cantidad escrita para un peluche y arma el mensaje de error
 * @method validarCantidad
 * @param {string} valor - Lo que se escribió en el campo de cantidad
 * @return {string} El mensaje de error, o un texto vacío si la cantidad está bien
 */
export let validarCantidad = (valor) => {
  const numero = Number(valor)
  if (valor === '' || isNaN(numero)) {
    return 'Ingresá un número.'
  }
  if (numero % 1 !== 0) {
    return 'La cantidad no puede tener decimales.'
  }
  if (numero < 1 || numero > CANTIDAD_MAXIMA) {
    return 'La cantidad tiene que estar entre 1 y ' + CANTIDAD_MAXIMA + '.'
  }
  return ''
}

/**
 * Indica si la cantidad es un entero entre 1 y CANTIDAD_MAXIMA
 * @method cantidadValida
 * @param {string} valor - Lo que se escribió en el campo de cantidad
 * @return {boolean} true si la cantidad está bien y false si está mal
 */
let cantidadValida = (valor) => {
  return validarCantidad(valor) === ''
}

/**
 * Calcula el envío: es gratis desde ENVIO_GRATIS_DESDE y si no cuesta COSTO_ENVIO
 * @method calcularEnvio
 * @param {number} subtotal - Precio de los peluches
 * @return {number} Lo que cuesta el envío
 */
let calcularEnvio = (subtotal) => {
  if (subtotal >= ENVIO_GRATIS_DESDE) {
    return 0
  }
  return COSTO_ENVIO
}

/**
 * Calcula subtotal, envío y total sumando solo los peluches con una cantidad válida
 * @method calcularPedido
 * @param {object[]} peluches - Lista de peluches con id y precio
 * @param {object} cantidades - Cantidad escrita para cada peluche, con el id como clave
 * @return {{subtotal: number, envio: number, total: number}} El detalle del pedido
 */
export let calcularPedido = (peluches, cantidades) => {
  let subtotal = 0
  for (let i = 0; i < peluches.length; i++) {
    const valor = cantidades[peluches[i].id] || ''
    if (cantidadValida(valor)) {
      subtotal += Number(valor) * peluches[i].precio
    }
  }
  if (subtotal === 0) {
    return { subtotal: 0, envio: 0, total: 0 }
  }
  const envio = calcularEnvio(subtotal)
  return { subtotal: subtotal, envio: envio, total: subtotal + envio }
}

/**
 * Da formato de precio con dos decimales
 * @method formatearPrecio
 * @param {number} numero - El importe
 * @return {string} El importe con signo $, por ejemplo "$26.00"
 */
export let formatearPrecio = (numero) => {
  return '$' + numero.toFixed(2)
}
