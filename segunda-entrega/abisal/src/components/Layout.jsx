import { Outlet } from 'react-router-dom'
import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'

/**
 * Estructura común de todas las páginas: encabezado, contenido de la ruta y pie
 * @method Layout
 * @return {JSX.Element} La página con Header, la ruta hija en el Outlet y Footer
 */
let Layout = () => {
  return (
    <div className="pagina">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
