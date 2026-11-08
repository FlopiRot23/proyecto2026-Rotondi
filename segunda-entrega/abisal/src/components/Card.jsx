import { Link } from 'react-router-dom'

/**
 * Tarjeta genérica con imagen, título, etiqueta opcional y contenido
 * @method Card
 * @param {object} props - Propiedades de la tarjeta
 * @param {string} props.imagen - Ruta de la imagen
 * @param {string} props.alt - Texto alternativo de la imagen
 * @param {string} props.titulo - Título de la tarjeta
 * @param {string} [props.etiqueta] - Texto de la etiqueta que va al lado del título
 * @param {string} [props.claseEtiqueta] - Clase de color de la etiqueta: "etiqueta-luz" o "etiqueta-profunda"
 * @param {string} [props.enlace] - Ruta a la que lleva la tarjeta; si no tiene, la tarjeta no es un link
 * @param {JSX.Element} props.children - Contenido de la tarjeta debajo del título
 * @return {JSX.Element} La tarjeta
 */
let Card = ({ imagen, alt, titulo, etiqueta, claseEtiqueta, enlace, children }) => {
  const contenido = (
    <>
      <img className="tarjeta-imagen" src={imagen} alt={alt} />
      <div className="tarjeta-cuerpo">
        <div className="tarjeta-titulo-fila">
          <h3 className="tarjeta-titulo">{titulo}</h3>
          {etiqueta && <span className={'etiqueta ' + claseEtiqueta}>{etiqueta}</span>}
        </div>
        {children}
      </div>
    </>
  )

  if (enlace) {
    return (
      <Link className="panel tarjeta" to={enlace}>
        {contenido}
      </Link>
    )
  }
  return <article className="panel tarjeta">{contenido}</article>
}

export default Card
