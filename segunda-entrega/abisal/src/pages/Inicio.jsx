import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { obtenerZonas } from '@/api/zonas.js'
import { obtenerAnimales } from '@/api/animales.js'
import Card from '@/components/Card.jsx'
import { claseEtiqueta, claseZona, rutaImagen } from '@/utils/zonas.js'

/**
 * Página de inicio: portada, las cuatro zonas del océano con sus animales e invitación al club
 * @method Inicio
 * @return {JSX.Element} La página de inicio
 */
let Inicio = () => {
  const [zonas, setZonas] = useState([])
  const [animales, setAnimales] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'Abisal | Expedición por las profundidades'

    /**
     * Trae las zonas y los animales desde la API
     * @method cargarDatos
     */
    let cargarDatos = async () => {
      try {
        setZonas(await obtenerZonas())
        setAnimales(await obtenerAnimales())
      } catch {
        setError('No pudimos cargar las especies. Revisá que el mock esté corriendo con "npm run api".')
      }
    }
    cargarDatos()
  }, [])

  useEffect(() => {
    if (zonas.length > 0 && window.location.hash !== '') {
      const seccion = document.getElementById(window.location.hash.replace('#', ''))
      if (seccion) {
        seccion.scrollIntoView()
      }
    }
  }, [zonas])

  return (
    <main>
      <section className="portada">
        <p className="subtitulo">Descubrí lo inexplorado</p>
        <h2 className="titulo-portada">Abismo Azul</h2>
        <p className="portada-texto">
          Sumate a una expedición vertical interactiva desde la superficie radiante hasta las llanuras abisales donde
          la luz jamás ha tocado.
        </p>
        <div className="botones">
          <a href="#zona-1">Comenzar descenso</a>
          <Link to="/club">Aprender más</Link>
        </div>
      </section>

      {error !== '' && (
        <p className="separador" role="alert">
          {error}
        </p>
      )}

      {zonas.map((zona) => (
        <div key={zona.id}>
          <section id={'zona-' + zona.id} className={claseZona(zona.id)}>
            <div className="zona-encabezado">
              <div className="zona-titulos">
                <h2 className="titulo-zona">{zona.titulo}</h2>
                <p className="zona-rango">{zona.rango}</p>
              </div>
              <p className="zona-descripcion">{zona.descripcion}</p>
            </div>
            <div className="grilla">
              {animales
                .filter((animal) => animal.zona === zona.id)
                .map((animal) => (
                  <Card
                    key={animal.id}
                    imagen={rutaImagen(animal.imagen)}
                    alt={animal.nombre}
                    titulo={animal.nombre}
                    etiqueta={animal.rango}
                    claseEtiqueta={claseEtiqueta(animal.zona)}
                    enlace={'/animal/' + animal.id}
                  >
                    <p className="texto-suave">{animal.resumen}</p>
                  </Card>
                ))}
            </div>
          </section>
          {zona.separador !== '' && <p className="separador">{zona.separador}</p>}
        </div>
      ))}

      <section className="invitacion">
        <h2 className="titulo-invitacion">¿Hasta dónde podemos llegar?</h2>
        <p className="invitacion-texto">Hacete socio del club y viví experiencias exclusivas.</p>
        <div className="indicadores">
          <div className="indicador">
            <p className="indicador-numero">10.928m</p>
            <p>Récord (Fosa de las Marianas)</p>
          </div>
          <div className="indicador">
            <p className="indicador-numero">432</p>
            <p>Especies registradas</p>
          </div>
        </div>
        <Link to="/club">Unirme al Club</Link>
      </section>
    </main>
  )
}

export default Inicio
