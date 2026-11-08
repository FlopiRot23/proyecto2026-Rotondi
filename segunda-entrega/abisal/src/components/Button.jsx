/**
 * Botón genérico del sitio con el estilo "boton"
 * @method Button
 * @param {object} props - Propiedades del botón
 * @param {JSX.Element|string} props.children - Texto del botón
 * @param {string} [props.type] - Tipo del botón: "button" o "submit"
 * @param {Function} [props.onClick] - Función que se ejecuta al hacer clic
 * @param {boolean} [props.destacado] - true para pintarlo de cian
 * @return {JSX.Element} El botón
 */
let Button = ({ children, type = 'button', onClick, destacado = false }) => {
  let clase = 'boton'
  if (destacado) {
    clase = 'boton boton-cian'
  }
  return (
    <button type={type} className={clase} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
