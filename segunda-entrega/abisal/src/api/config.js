export const URL_API = 'http://localhost:3001'

/**
 * Pide datos a json-server con GET y los devuelve ya convertidos desde JSON
 * @method pedirDatos
 * @param {string} ruta - Ruta del recurso, por ejemplo "/animales"
 * @return {Promise<any>} Los datos que devuelve la API
 */
export let pedirDatos = async (ruta) => {
  const respuesta = await fetch(URL_API + ruta)
  if (!respuesta.ok) {
    throw new Error('No se pudieron cargar los datos (' + respuesta.status + ').')
  }
  return await respuesta.json()
}
