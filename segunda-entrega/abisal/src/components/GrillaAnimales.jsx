import Card from '@/components/Card.jsx'
import { claseEtiqueta, rutaImagen } from '@/utils/zonas.js'

/**
 * Arma la tarjeta de un animal que lleva a su ficha
 * @method mostrarTarjeta
 * @param {object} animal - Un animal de la API
 * @return {JSX.Element} La tarjeta del animal
 */
let mostrarTarjeta = (animal) => {
  return (
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
  )
}

/**
 * Grilla con las tarjetas de una lista de animales
 * @method GrillaAnimales
 * @param {object} props - Propiedades de la grilla
 * @param {object[]} props.animales - Animales que se muestran
 * @return {JSX.Element} La grilla de tarjetas
 */
let GrillaAnimales = ({ animales }) => {
  return <div className="grilla">{animales.map(mostrarTarjeta)}</div>
}

export default GrillaAnimales
