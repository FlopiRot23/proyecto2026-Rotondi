import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout.jsx'

/**
 * Componente principal: define las rutas del sitio dentro del Layout
 * @method App
 * @return {JSX.Element} El enrutador con todas las páginas
 */
let App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
