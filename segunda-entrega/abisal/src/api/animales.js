import { pedirDatos } from '@/api/config.js'

/**
 * Trae todos los animales
 * @method obtenerAnimales
 * @return {Promise<object[]>} Lista de animales
 */
export let obtenerAnimales = async () => {
  return await pedirDatos('/animales')
}

/**
 * Trae un animal por su id
 * @method obtenerAnimal
 * @param {string} id - Id del animal que viene en la dirección
 * @return {Promise<object>} El animal pedido
 */
export let obtenerAnimal = async (id) => {
  return await pedirDatos('/animales/' + id)
}

/**
 * Trae los animales que viven en una zona
 * @method obtenerAnimalesPorZona
 * @param {number} zona - Número de la zona (1 a 4)
 * @return {Promise<object[]>} Lista de animales de esa zona
 */
export let obtenerAnimalesPorZona = async (zona) => {
  return await pedirDatos('/animales?zona=' + zona)
}
