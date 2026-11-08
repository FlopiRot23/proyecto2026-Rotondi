import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout.jsx'
import Inicio from '@/pages/Inicio.jsx'
import Animal from '@/pages/Animal.jsx'
import Tienda from '@/pages/Tienda.jsx'

/**
 * Componente principal: define las rutas del sitio dentro del Layout
 * @method App
 * @return {JSX.Element} El enrutador con todas las páginas
 */
let App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="animal/:id" element={<Animal />} />
          <Route path="tienda" element={<Tienda />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
