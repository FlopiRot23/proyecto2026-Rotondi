import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { obtenerAnimal, obtenerAnimalesPorZona } from '@/api/animales.js'
import { obtenerZona } from '@/api/zonas.js'
import GrillaAnimales from '@/components/GrillaAnimales.jsx'
import { rutaImagen } from '@/utils/zonas.js'

const CANTIDAD_OTROS = 3

/**
 * Arma un párrafo de la descripción del animal
 * @method mostrarParrafo
 * @param {string} parrafo - Texto del párrafo
 * @return {JSX.Element} El párrafo
 */
let mostrarParrafo = (parrafo) => {
  return (
    <p key={parrafo} className="texto-suave">
      {parrafo}
    </p>
  )
}

/**
 * Arma una fila del perfil de la especie
 * @method mostrarDato
 * @param {object} dato - Dato del perfil con etiqueta y valor
 * @return {JSX.Element} La fila con el nombre del dato y su valor
 */
let mostrarDato = (dato) => {
  return (
    <div key={dato.etiqueta}>
      <dt>{dato.etiqueta}</dt>
      <dd>{dato.valor}</dd>
    </div>
  )
}

/**
 * Página con la ficha de un animal, según el id de la dirección
 * @method Animal
 * @return {JSX.Element} La ficha del animal
 */
let Animal = () => {
  const { id } = useParams()
  const [animal, setAnimal] = useState(null)
  const [zona, setZona] = useState(null)
  const [otros, setOtros] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)

    /**
     * Trae el animal, su zona y hasta tres animales más de la misma zona
     * @method cargarFicha
     */
    let cargarFicha = async () => {
      try {
        setError('')
        const datosAnimal = await obtenerAnimal(id)
        const datosZona = await obtenerZona(datosAnimal.zona)
        const deLaZona = await obtenerAnimalesPorZona(datosAnimal.zona)
        const lista = []
        for (let i = 0; i < deLaZona.length; i++) {
          if (deLaZona[i].id !== datosAnimal.id && lista.length < CANTIDAD_OTROS) {
            lista.push(deLaZona[i])
          }
        }
        document.title = datosAnimal.nombre + ' | Abisal'
        setAnimal(datosAnimal)
        setZona(datosZona)
        setOtros(lista)
      } catch {
        document.title = 'Ficha de especie | Abisal'
        setAnimal(null)
        setError('No encontramos esa especie. Revisá la dirección o que el mock esté corriendo con "npm run api".')
      }
    }
    cargarFicha()
  }, [id])

  if (error !== '') {
    return (
      <main className="seccion">
        <p className="texto-suave" role="alert">
          {error}
        </p>
        <div>
          <Link className="boton" to="/">
            Volver al descenso
          </Link>
        </div>
      </main>
    )
  }

  if (animal === null || zona === null) {
    return (
      <main className="seccion">
        <p className="texto-suave">Cargando especie...</p>
      </main>
    )
  }

  return (
    <main className="seccion">
      <div className="encabezado-pagina">
        <p className="subtitulo">{zona.nombre}</p>
        <h2 className="titulo-grande">{animal.nombre}</h2>
        <p className="encabezado-texto">{animal.cientifico}</p>
      </div>
      <section className="grilla grilla-2">
        <article className="panel tarjeta">
          <img className="tarjeta-imagen" src={rutaImagen(animal.imagen)} alt={animal.nombre} />
          <div className="tarjeta-cuerpo">{animal.parrafos.map(mostrarParrafo)}</div>
        </article>
        <section className="panel contacto-panel">
          <h3>Perfil de especie</h3>
          <dl className="datos-contacto">
            {animal.perfil.map(mostrarDato)}
            <div>
              <dt>Estado de conservación</dt>
              <dd>{animal.estado}</dd>
            </div>
          </dl>
        </section>
      </section>
      <section className="panel pedido">
        <h3>Dato curioso</h3>
        <p>{animal.dato}</p>
      </section>
      <section className="club-comparacion">
        <h3 className="titulo-medio">Otras criaturas de la {zona.nombre}</h3>
        <GrillaAnimales animales={otros} />
      </section>
      <div>
        <Link className="boton" to="/">
          Volver al descenso
        </Link>
      </div>
    </main>
  )
}

export default Animal
