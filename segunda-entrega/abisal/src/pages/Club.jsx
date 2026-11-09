import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { buscarSocio, registrarSocio } from '@/api/socios.js'
import Button from '@/components/Button.jsx'
import Input from '@/components/Input.jsx'
import { SesionContext } from '@/components/sesionContexto.js'
import { LARGO_MINIMO_CLAVE, validarClave, validarCorreo } from '@/utils/validaciones.js'

const PLANES = [
  {
    nombre: 'Básico',
    lema: 'Para mentes curiosas',
    precio: 'Gratis',
    popular: false,
    beneficios: ['Acceso a artículos públicos', 'Boletín mensual básico', 'Visualizador de profundidad'],
  },
  {
    nombre: 'Premium',
    lema: 'El favorito de todos',
    precio: '$5/mes',
    popular: true,
    beneficios: ['Todo lo básico', 'Artículos exclusivos de profundidad', 'Acceso anticipado a los nuevos peluches'],
  },
  {
    nombre: 'VIP',
    lema: 'Nivel de inmersión total',
    precio: '$12/mes',
    popular: false,
    beneficios: [
      'Todo lo Premium',
      'Eventos virtuales mensuales con la comunidad y expertos',
      'Detrás de escenas de los buceos más emblemáticos',
      'Peluche exclusivo anual de regalo',
    ],
  },
]

const ARTICULOS = [
  {
    codigo: 'FP · 014',
    titulo: 'Cómo se filma un calamar gigante',
    texto:
      'La primera filmación en su ambiente, en 2012, usó una cámara sin luz blanca y un señuelo que imitaba el destello de una medusa en alarma. Reconstruimos el diseño del equipo y qué mostró el video sobre su forma de atacar.',
    detalle: '18 min · con esquemas del equipo de filmación',
  },
  {
    codigo: 'FP · 013',
    titulo: 'La migración vertical, medida con sonar',
    texto:
      'Los ecos que los operadores llamaban "falso fondo" eran cardúmenes subiendo al anochecer. Qué revela ese eco sobre la biomasa del océano y cómo entra en los cálculos de carbono.',
    detalle: '12 min · con series de datos acústicos',
  },
  {
    codigo: 'FP · 012',
    titulo: 'Bioluminiscencia: química de la luz fría',
    texto:
      'Luciferina, luciferasa y oxígeno: tres piezas que aparecieron por evolución independiente decenas de veces en el mar. Para qué sirve la luz en cada caso y por qué casi siempre es azul.',
    detalle: '15 min · con tabla comparativa por grupo',
  },
  {
    codigo: 'FP · 011',
    titulo: 'Vivir sin oxígeno a 900 metros',
    texto:
      'La zona de mínimo oxígeno excluye a casi todos los depredadores grandes, y eso la convierte en refugio. Cómo se sostiene un metabolismo ahí y qué pasa cuando esas capas se expanden.',
    detalle: '11 min · con perfiles de oxígeno',
  },
]

/**
 * Arma un ítem de la lista de beneficios de un plan
 * @method mostrarBeneficio
 * @param {string} beneficio - Texto del beneficio
 * @return {JSX.Element} El ítem de la lista
 */
let mostrarBeneficio = (beneficio) => {
  return <li key={beneficio}>{beneficio}</li>
}

/**
 * Arma una opción del selector de planes
 * @method mostrarOpcionPlan
 * @param {object} plan - Un plan de la lista PLANES
 * @return {JSX.Element} La opción del select
 */
let mostrarOpcionPlan = (plan) => {
  return (
    <option key={plan.nombre} value={plan.nombre}>
      {plan.nombre}
    </option>
  )
}

/**
 * Arma la tarjeta de un artículo exclusivo para socios
 * @method mostrarArticulo
 * @param {object} articulo - Un artículo de la lista ARTICULOS
 * @return {JSX.Element} La tarjeta del artículo
 */
let mostrarArticulo = (articulo) => {
  return (
    <article key={articulo.codigo} className="panel articulo">
      <p className="articulo-codigo">{articulo.codigo}</p>
      <h4>{articulo.titulo}</h4>
      <p className="texto-suave">{articulo.texto}</p>
      <p className="texto-chico">{articulo.detalle}</p>
    </article>
  )
}

/**
 * Página del club: planes, formulario de registro e inicio de sesión, comparación y artículos para socios
 * @method Club
 * @return {JSX.Element} La página del club
 */
let Club = () => {
  const [modo, setModo] = useState('registro')
  const [correo, setCorreo] = useState('')
  const [clave, setClave] = useState('')
  const [plan, setPlan] = useState('Premium')
  const [errorCorreo, setErrorCorreo] = useState('')
  const [errorClave, setErrorClave] = useState('')
  const [errorEnvio, setErrorEnvio] = useState('')
  const { sesion, iniciarSesion, cerrarSesion } = useContext(SesionContext)
  const navegar = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Club Exclusivo | Abisal'
  }, [])

  /**
   * Guarda el correo escrito y lo valida en el momento
   * @method cambiarCorreo
   * @param {object} evento - Evento onChange del campo de correo
   */
  let cambiarCorreo = (evento) => {
    setCorreo(evento.target.value)
    setErrorCorreo(validarCorreo(evento.target.value))
    setErrorEnvio('')
  }

  /**
   * Guarda la contraseña escrita y la valida en el momento
   * @method cambiarClave
   * @param {object} evento - Evento onChange del campo de contraseña
   */
  let cambiarClave = (evento) => {
    setClave(evento.target.value)
    setErrorClave(validarClave(evento.target.value))
    setErrorEnvio('')
  }

  /**
   * Guarda el plan elegido en el selector
   * @method cambiarPlan
   * @param {object} evento - Evento onChange del select de planes
   */
  let cambiarPlan = (evento) => {
    setPlan(evento.target.value)
  }

  /**
   * Deja seleccionado el plan elegido en una tarjeta y lleva al formulario de registro
   * @method elegirPlan
   * @param {string} nombrePlan - Nombre del plan: Básico, Premium o VIP
   */
  let elegirPlan = (nombrePlan) => {
    setPlan(nombrePlan)
    setModo('registro')
    const panel = document.getElementById('panel-registro')
    if (panel) {
      panel.scrollIntoView()
    }
  }

  /**
   * Cambia el formulario entre crear cuenta e iniciar sesión
   * @method cambiarModo
   */
  let cambiarModo = () => {
    if (modo === 'registro') {
      setModo('ingreso')
    } else {
      setModo('registro')
    }
    setErrorEnvio('')
  }

  /**
   * Valida los campos y registra al socio o inicia su sesión usando la API
   * @method enviarFormulario
   * @param {object} evento - Evento onSubmit del formulario
   */
  let enviarFormulario = async (evento) => {
    evento.preventDefault()
    const mensajeCorreo = validarCorreo(correo)
    const mensajeClave = validarClave(clave)
    setErrorCorreo(mensajeCorreo)
    setErrorClave(mensajeClave)
    if (mensajeCorreo !== '' || mensajeClave !== '') {
      return
    }

    const correoLimpio = correo.trim().toLowerCase()
    try {
      const socio = await buscarSocio(correoLimpio)
      if (modo === 'registro') {
        if (socio !== null) {
          setErrorEnvio('Ese correo ya está registrado. Iniciá sesión.')
          return
        }
        await registrarSocio({ correo: correoLimpio, plan: plan })
        iniciarSesion(correoLimpio, plan)
      } else {
        if (socio === null) {
          setErrorEnvio('No encontramos ese correo. Creá tu cuenta.')
          return
        }
        iniciarSesion(socio.correo, socio.plan)
      }
      setClave('')
    } catch {
      setErrorEnvio('No pudimos conectarnos con el club. Revisá que el mock esté corriendo con "npm run api".')
    }
  }

  /**
   * Cierra la sesión, deja el formulario vacío y vuelve al inicio
   * @method salirDelClub
   */
  let salirDelClub = () => {
    cerrarSesion()
    setCorreo('')
    setClave('')
    setErrorCorreo('')
    setErrorClave('')
    setModo('registro')
    navegar('/')
  }

  /**
   * Arma la tarjeta de un plan del club con su botón para elegirlo
   * @method mostrarPlan
   * @param {object} datosPlan - Un plan de la lista PLANES
   * @return {JSX.Element} La tarjeta del plan
   */
  let mostrarPlan = (datosPlan) => {
    /**
     * Elige este plan al hacer clic en su botón
     * @method alElegir
     */
    let alElegir = () => {
      elegirPlan(datosPlan.nombre)
    }

    let clase = 'panel plan'
    if (datosPlan.popular) {
      clase = 'panel plan plan-popular'
    }
    return (
      <article key={datosPlan.nombre} className={clase}>
        {datosPlan.popular && <span className="plan-estrella">Más popular</span>}
        <div>
          <h3 className="plan-nombre">{datosPlan.nombre}</h3>
          <p className="texto-suave">{datosPlan.lema}</p>
        </div>
        <p className="plan-precio">{datosPlan.precio}</p>
        <ul className="plan-beneficios">{datosPlan.beneficios.map(mostrarBeneficio)}</ul>
        <Button onClick={alElegir}>Elegir plan</Button>
      </article>
    )
  }

  let tituloFormulario = 'Unite al Abismo'
  let textoEnviar = 'Crear cuenta y continuar'
  let textoCambiar = 'Ya soy socio: iniciar sesión'
  if (modo === 'ingreso') {
    tituloFormulario = 'Iniciá sesión'
    textoEnviar = 'Ingresar'
    textoCambiar = 'No tengo cuenta: registrarme'
  }

  return (
    <main className="seccion">
      <div className="encabezado-centrado">
        <p className="subtitulo">Club exclusivo</p>
        <h2 className="titulo-grande">Sumergí tu mente en conocimiento</h2>
        <p className="encabezado-texto">
          Formá parte de esta hermosa comunidad. Disfrutá de un artículo exclusivo, acceso temprano a nuevos peluches
          limitados y chats en vivo con la creadora.
        </p>
      </div>
      <section className="grilla" aria-label="Planes del Club">
        {PLANES.map(mostrarPlan)}
      </section>
      <div className="club-fila">
        {sesion === null ? (
          <section id="panel-registro" className="panel formulario-panel">
            <form className="formulario" noValidate onSubmit={enviarFormulario}>
              <h3>{tituloFormulario}</h3>
              <Input
                id="registro-correo"
                etiqueta="Correo electrónico"
                tipo="email"
                valor={correo}
                onChange={cambiarCorreo}
                error={errorCorreo}
                placeholder="ejemplo@correo.com"
              />
              <Input
                id="registro-clave"
                etiqueta="Contraseña"
                tipo="password"
                valor={clave}
                onChange={cambiarClave}
                error={errorClave}
                placeholder={'Mínimo ' + LARGO_MINIMO_CLAVE + ' caracteres'}
              />
              {modo === 'registro' && (
                <div className="campo">
                  <label htmlFor="registro-plan">Plan</label>
                  <select id="registro-plan" value={plan} onChange={cambiarPlan}>
                    {PLANES.map(mostrarOpcionPlan)}
                  </select>
                </div>
              )}
              {errorEnvio !== '' && (
                <p className="mensaje-error" role="alert">
                  {errorEnvio}
                </p>
              )}
              <Button type="submit" destacado>
                {textoEnviar}
              </Button>
              <Button onClick={cambiarModo}>{textoCambiar}</Button>
              <p className="texto-suave">
                Tu correo y tu plan se guardan en el mock del proyecto (db.json). La contraseña no se guarda.
              </p>
            </form>
          </section>
        ) : (
          <section className="panel panel-sesion">
            <p className="subtitulo">Sesión activa · Plan {sesion.plan}</p>
            <h3>Bienvenido, {sesion.correo.split('@')[0]}</h3>
            <p>
              Ya tenés acceso a las fichas profundas y al archivo de expediciones. Se publican dos artículos nuevos por
              mes.
            </p>
            <Button onClick={salirDelClub}>Cerrar sesión</Button>
          </section>
        )}
        <section className="club-comparacion">
          <h3 className="titulo-medio">Comparación de beneficios</h3>
          <div className="tabla-contenedor">
            <table className="tabla">
              <caption>Beneficios incluidos en cada plan del club</caption>
              <thead>
                <tr>
                  <th scope="col">Beneficio</th>
                  <th scope="col">Básico</th>
                  <th scope="col">Premium</th>
                  <th scope="col">VIP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Acceso a especies comunes</th>
                  <td className="valor-si">✓</td>
                  <td className="valor-si">✓</td>
                  <td className="valor-si">✓</td>
                </tr>
                <tr>
                  <th scope="row">Fichas de especies abisales</th>
                  <td className="valor-no">-</td>
                  <td className="valor-si">✓</td>
                  <td className="valor-si">✓</td>
                </tr>
                <tr>
                  <th scope="row">Sesiones en vivo</th>
                  <td className="valor-no">-</td>
                  <td className="valor-no">-</td>
                  <td className="valor-si">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      {sesion !== null && (
        <section className="articulos">
          <h3 className="titulo-medio">Artículos exclusivos de profundidad</h3>
          <div className="grilla grilla-2">{ARTICULOS.map(mostrarArticulo)}</div>
        </section>
      )}
    </main>
  )
}

export default Club
