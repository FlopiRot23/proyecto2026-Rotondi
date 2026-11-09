import { URL_API, pedirDatos } from '@/api/config.js'

/**
 * Busca un socio del club por su correo
 * @method buscarSocio
 * @param {string} correo - Correo del socio
 * @return {Promise<object|null>} El socio encontrado, o null si no existe
 */
export let buscarSocio = async (correo) => {
  const socios = await pedirDatos('/socios?correo=' + encodeURIComponent(correo))
  if (socios.length === 0) {
    return null
  }
  return socios[0]
}

/**
 * Registra un socio nuevo en el club con POST
 * @method registrarSocio
 * @param {object} socio - Datos del socio: correo y plan
 * @return {Promise<object>} El socio guardado, con el id que le asigna la API
 */
export let registrarSocio = async (socio) => {
  const respuesta = await fetch(URL_API + '/socios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(socio),
  })
  if (!respuesta.ok) {
    throw new Error('No se pudo registrar el socio (' + respuesta.status + ').')
  }
  return await respuesta.json()
}
