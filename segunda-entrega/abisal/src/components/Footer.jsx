import { Link } from 'react-router-dom'

/**
 * Pie de página del sitio con los links de navegación y los créditos
 * @method Footer
 * @return {JSX.Element} El pie de página
 */
let Footer = () => {
  return (
    <footer className="pie">
      <p className="pie-titulo">Abismo Azul</p>
      <p>Mostrando los secretos mejor guardados de nuestro planeta azul.</p>
      <div className="pie-columnas">
        <nav className="pie-columna" aria-label="Explorar">
          <h3>Explorar</h3>
          <Link to="/">Inicio</Link>
          <a href="/#zona-1">Especies</a>
          <a href="/#zona-4">Profundidades</a>
        </nav>
        <nav className="pie-columna" aria-label="Servicios">
          <h3>Servicios</h3>
          <Link to="/tienda">Tienda de peluches</Link>
          <Link to="/club">Club Exclusivo</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>
      <p className="pie-creditos">© 2026 Florencia Rotondi Michelfelder. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer
