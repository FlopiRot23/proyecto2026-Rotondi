import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SesionContext } from '@/components/SesionContext.js'

/**
 * Devuelve la clase del link del menú según si es la página actual
 * @method claseMenu
 * @param {object} estado - Estado del NavLink
 * @param {boolean} estado.isActive - true si el link es el de la página actual
 * @return {string} "activo" para la página actual, o texto vacío
 */
let claseMenu = ({ isActive }) => {
  if (isActive) {
    return 'activo'
  }
  return ''
}

/**
 * Encabezado del sitio con el logo, el menú y el botón de sesión
 * @method Header
 * @return {JSX.Element} El encabezado
 */
let Header = () => {
  const { sesion } = useContext(SesionContext)
  let textoSesion = 'Ingresar'
  if (sesion !== null) {
    textoSesion = 'Mi cuenta'
  }

  return (
    <header className="cabecera">
      <h1 className="logo">
        <Link to="/">
          <span className="logo-icono"></span>Abisal
        </Link>
      </h1>
      <nav className="menu" aria-label="Navegación principal">
        <NavLink to="/" end className={claseMenu}>
          Inicio
        </NavLink>
        <NavLink to="/tienda" className={claseMenu}>
          Tienda
        </NavLink>
        <NavLink to="/club" className={claseMenu}>
          Club Exclusivo
        </NavLink>
        <NavLink to="/contacto" className={claseMenu}>
          Contacto
        </NavLink>
      </nav>
      <Link to="/club" className="boton-sesion">
        {textoSesion}
      </Link>
    </header>
  )
}

export default Header
