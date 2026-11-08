import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout.jsx'
import { SesionProvider } from '@/components/SesionContext.jsx'
import Inicio from '@/pages/Inicio.jsx'
import Animal from '@/pages/Animal.jsx'
import Tienda from '@/pages/Tienda.jsx'
import Club from '@/pages/Club.jsx'
import Contacto from '@/pages/Contacto.jsx'
import NoEncontrada from '@/pages/NoEncontrada.jsx'

/**
 * Componente principal: comparte la sesión y define las rutas del sitio dentro del Layout
 * @method App
 * @return {JSX.Element} El enrutador con todas las páginas
 */
let App = () => {
  return (
    <SesionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="animal/:id" element={<Animal />} />
            <Route path="tienda" element={<Tienda />} />
            <Route path="club" element={<Club />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="*" element={<NoEncontrada />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SesionProvider>
  )
}

export default App
