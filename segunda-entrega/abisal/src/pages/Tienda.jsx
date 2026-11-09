import { useEffect, useState } from 'react'
import { obtenerPeluches } from '@/api/peluches.js'
import Button from '@/components/Button.jsx'
import Card from '@/components/Card.jsx'
import Input from '@/components/Input.jsx'
import {
  CANTIDAD_MAXIMA,
  COSTO_ENVIO,
  ENVIO_GRATIS_DESDE,
  calcularPedido,
  formatearPrecio,
  validarCantidad,
} from '@/utils/tienda.js'
import { rutaImagen } from '@/utils/zonas.js'

/**
 * Página de la tienda: peluches con su cantidad y cálculo del total del pedido
 * @method Tienda
 * @return {JSX.Element} La página de la tienda
 */
let Tienda = () => {
  const [peluches, setPeluches] = useState([])
  const [cantidades, setCantidades] = useState({})
  const [errores, setErrores] = useState({})
  const [aviso, setAviso] = useState('')
  const [resultado, setResultado] = useState(null)
  const [errorCarga, setErrorCarga] = useState('')

  /**
   * Sube arriba de todo, cambia el título de la pestaña y carga los peluches al abrir la tienda
   * @method alAbrirTienda
   */
  let alAbrirTienda = () => {
    window.scrollTo(0, 0)
    document.title = 'Tienda de peluches | Abisal'

    /**
     * Trae los peluches desde la API
     * @method cargarPeluches
     */
    let cargarPeluches = async () => {
      try {
        setPeluches(await obtenerPeluches())
      } catch {
        setErrorCarga('No pudimos cargar los peluches. Revisá que el mock esté corriendo con "npm run api".')
      }
    }
    cargarPeluches()
  }
  useEffect(alAbrirTienda, [])

  /**
   * Guarda la cantidad escrita y la valida en el momento
   * @method cambiarCantidad
   * @param {object} evento - Evento onChange del campo de cantidad
   */
  let cambiarCantidad = (evento) => {
    const idPeluche = evento.target.id.replace('cantidad-', '')
    const valor = evento.target.value
    let mensaje = ''
    if (valor !== '') {
      mensaje = validarCantidad(valor)
    }
    setCantidades({ ...cantidades, [idPeluche]: valor })
    setErrores({ ...errores, [idPeluche]: mensaje })
    setAviso('')
    setResultado(null)
  }

  /**
   * Indica si alguna de las cantidades escritas tiene error
   * @method hayErrores
   * @return {boolean} true si hay al menos un error
   */
  let hayErrores = () => {
    const ids = Object.keys(errores)
    for (let i = 0; i < ids.length; i++) {
      if (errores[ids[i]] !== '') {
        return true
      }
    }
    return false
  }

  /**
   * Calcula el pedido o avisa si hay cantidades mal escritas o ninguna cargada
   * @method calcularTotal
   */
  let calcularTotal = () => {
    if (hayErrores()) {
      setAviso('Corregí las cantidades marcadas en rojo.')
      setResultado(null)
      return
    }
    const pedido = calcularPedido(peluches, cantidades)
    if (pedido.subtotal === 0) {
      setAviso('Ingresá la cantidad de al menos un peluche.')
      setResultado(null)
      return
    }
    setAviso('')
    setResultado(pedido)
  }

  /**
   * Arma la tarjeta de un peluche con su precio y el campo de cantidad
   * @method mostrarPeluche
   * @param {object} peluche - Un peluche de la API
   * @return {JSX.Element} La tarjeta del peluche
   */
  let mostrarPeluche = (peluche) => {
    return (
      <Card
        key={peluche.id}
        imagen={rutaImagen(peluche.imagen)}
        alt={peluche.description}
        titulo={peluche.nombre}
        etiqueta={peluche.categoria}
        claseEtiqueta="etiqueta-luz"
      >
        <p className="producto-precio">{formatearPrecio(peluche.precio)}</p>
        <p className="texto-chico">
          Marca {peluche.marca} ·{' '}
          <a href={peluche.web} target="_blank" rel="noopener noreferrer">
            Conocé la especie
          </a>
        </p>
        <Input
          id={'cantidad-' + peluche.id}
          etiqueta="Cantidad"
          tipo="number"
          valor={cantidades[peluche.id] || ''}
          onChange={cambiarCantidad}
          error={errores[peluche.id] || ''}
          placeholder="Ej: 2"
          contenedor="campo-cantidad"
        />
      </Card>
    )
  }

  return (
    <main className="seccion">
      <div className="encabezado-pagina">
        <p className="subtitulo">Tienda</p>
        <h2 className="titulo-grande">Nuestros peluches bioluminiscentes</h2>
        <p className="encabezado-texto">
          Escribí cuántos peluches querés comprar (de 1 a {CANTIDAD_MAXIMA}) y calculá el total de tu pedido. El envío
          es sin cargo en compras desde ${ENVIO_GRATIS_DESDE}: si no, cuesta ${COSTO_ENVIO}.
        </p>
      </div>
      {errorCarga !== '' && (
        <p className="texto-suave" role="alert">
          {errorCarga}
        </p>
      )}
      <div className="tienda">
        <section className="grilla" aria-label="Peluches">
          {peluches.map(mostrarPeluche)}
        </section>
        <section className="panel pedido">
          <h3>Total del pedido</h3>
          <p>
            Completá la cantidad de cada peluche que quieras llevar (los que dejes vacíos no se incluyen) y se calcula
            el total del pedido.
          </p>
          <Button onClick={calcularTotal}>Calcular total del pedido</Button>
          {aviso !== '' && (
            <p className="mensaje-error" role="alert">
              {aviso}
            </p>
          )}
          {resultado !== null && (
            <p className="resultado" role="status">
              Subtotal: {formatearPrecio(resultado.subtotal)}
              <br />
              Envío: {formatearPrecio(resultado.envio)}
              <span className="resultado-total">Total: {formatearPrecio(resultado.total)}</span>
            </p>
          )}
        </section>
      </div>
    </main>
  )
}

export default Tienda
