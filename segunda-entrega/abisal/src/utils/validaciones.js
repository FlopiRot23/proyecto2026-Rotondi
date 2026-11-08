export const LARGO_MINIMO_CLAVE = 6

/**
 * Revisa el correo del formulario del club y arma el mensaje de error
 * @method validarCorreo
 * @param {string} correo - Correo escrito por la persona
 * @return {string} El mensaje de error, o un texto vacío si el correo está bien
 */
export let validarCorreo = (correo) => {
  const texto = correo.trim()
  if (texto === '') {
    return 'Ingresá tu correo.'
  }
  const partes = texto.split('@')
  if (partes.length !== 2 || partes[0] === '' || !partes[1].includes('.')) {
    return 'Ingresá un correo válido, por ejemplo ejemplo@correo.com.'
  }
  return ''
}

/**
 * Revisa la contraseña del formulario del club y arma el mensaje de error
 * @method validarClave
 * @param {string} clave - Contraseña escrita por la persona
 * @return {string} El mensaje de error, o un texto vacío si la contraseña está bien
 */
export let validarClave = (clave) => {
  if (clave === '') {
    return 'Ingresá una contraseña.'
  }
  if (clave.length < LARGO_MINIMO_CLAVE) {
    return 'La contraseña debe tener al menos ' + LARGO_MINIMO_CLAVE + ' caracteres.'
  }
  return ''
}
