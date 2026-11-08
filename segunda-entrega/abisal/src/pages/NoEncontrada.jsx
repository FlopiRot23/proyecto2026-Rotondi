import { useEffect } from 'react'
import { Link } from 'react-router-dom'

/**
 * Página que se muestra cuando la dirección no corresponde a ninguna ruta
 * @method NoEncontrada
 * @return {JSX.Element} El aviso de página no encontrada con un link al inicio
 */
let NoEncontrada = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Página no encontrada | Abisal'
  }, [])

  return (
    <main className="seccion">
      <div className="encabezado-pagina">
        <p className="subtitulo">Error 404</p>
        <h2 className="titulo-grande">Página no encontrada</h2>
        <p className="encabezado-texto">Esta parte del océano todavía no fue explorada. Revisá la dirección.</p>
      </div>
      <div>
        <Link className="boton" to="/">
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}

export default NoEncontrada
