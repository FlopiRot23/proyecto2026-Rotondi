import { pedirDatos } from '@/api/config.js'

/**
 * Trae las cuatro zonas del océano
 * @method obtenerZonas
 * @return {Promise<object[]>} Lista de zonas
 */
export let obtenerZonas = async () => {
  return await pedirDatos('/zonas')
}

/**
 * Trae una zona por su número
 * @method obtenerZona
 * @param {number} id - Número de la zona (1 a 4)
 * @return {Promise<object>} La zona pedida
 */
export let obtenerZona = async (id) => {
  return await pedirDatos('/zonas/' + id)
}
