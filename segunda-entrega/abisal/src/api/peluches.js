import { pedirDatos } from '@/api/config.js'

/**
 * Trae los peluches de la tienda
 * @method obtenerPeluches
 * @return {Promise<object[]>} Lista de peluches
 */
export let obtenerPeluches = async () => {
  return await pedirDatos('/peluches')
}
