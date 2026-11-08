/**
 * Campo de formulario genérico con etiqueta y mensaje de error accesible
 * @method Input
 * @param {object} props - Propiedades del campo
 * @param {string} props.id - Id del input, se usa también para el label y el error
 * @param {string} props.etiqueta - Texto del label
 * @param {string} props.tipo - Tipo del input: "text", "email", "password" o "number"
 * @param {string} props.valor - Valor actual del campo
 * @param {Function} props.onChange - Función que se ejecuta cada vez que cambia el valor
 * @param {string} props.error - Mensaje de error; texto vacío si el valor está bien
 * @param {string} props.placeholder - Texto de ayuda dentro del campo
 * @param {string} [props.contenedor] - Clase del contenedor: "campo" o "campo-cantidad"
 * @return {JSX.Element} El campo con su label y su error
 */
let Input = ({ id, etiqueta, tipo, valor, onChange, error, placeholder, contenedor = 'campo' }) => {
  const idError = id + '-error'
  const hayError = error !== ''
  return (
    <div className={contenedor}>
      <label htmlFor={id}>{etiqueta}</label>
      <input
        id={id}
        type={tipo}
        value={valor}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={hayError}
        aria-describedby={hayError ? idError : undefined}
      />
      {hayError && (
        <p id={idError} className="mensaje-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input
