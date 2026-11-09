import { useEffect } from 'react'

const REDES = [
  { nombre: 'Instagram', web: 'https://instagram.com' },
  { nombre: 'Facebook', web: 'https://facebook.com' },
  { nombre: 'TikTok', web: 'https://tiktok.com' },
  { nombre: 'YouTube', web: 'https://youtube.com' },
]

/**
 * Arma el link a una red social, que se abre en otra pestaña
 * @method mostrarRed
 * @param {object} red - Red social con nombre y dirección web
 * @return {JSX.Element} El ítem de la lista con el link
 */
let mostrarRed = (red) => {
  return (
    <li key={red.nombre}>
      <a href={red.web} target="_blank" rel="noopener noreferrer">
        {red.nombre}
      </a>
    </li>
  )
}

/**
 * Página de contacto: quién armó Abisal, datos de contacto y redes
 * @method Contacto
 * @return {JSX.Element} La página de contacto
 */
let Contacto = () => {
  /**
   * Sube arriba de todo y cambia el título de la pestaña al abrir contacto
   * @method alAbrirContacto
   */
  let alAbrirContacto = () => {
    window.scrollTo(0, 0)
    document.title = 'Contacto | Abisal'
  }
  useEffect(alAbrirContacto, [])

  return (
    <main className="seccion">
      <div className="encabezado-pagina">
        <p className="subtitulo">Contacto</p>
        <h2 className="titulo-grande">Quién armó Abisal</h2>
        <p className="encabezado-texto">
          Soy Florencia Rotondi, estudiante de ingeniería informática, profe de buceo recreativo y amante del mundo
          marino. Escribime por cualquier duda, corrección o propuesta.
        </p>
      </div>
      <section className="grilla" aria-label="Equipo">
        <article className="panel integrante">
          <div className="avatar-0" aria-hidden="true">
            FR
          </div>
          <div className="tarjeta-cuerpo">
            <h3 className="integrante-nombre">Florencia Rotondi Michelfelder</h3>
            <p className="integrante-rol">Estudiante de Ing. Informática</p>
            <p>
              Profe de buceo recreativo en las vacaciones, durante el año alumna de ingeniería en informática. Amante de
              las profundidades.
            </p>
            <a href="mailto:flopimichel@gmail.com">flopimichel@gmail.com</a>
          </div>
        </article>
      </section>
      <div className="contacto-fila">
        <section className="panel contacto-panel">
          <h3>Escribime o llamame</h3>
          <dl className="datos-contacto">
            <div>
              <dt>Correo general</dt>
              <dd>
                <a href="mailto:contacto@abisal.com">contacto@abisal.com</a>
              </dd>
            </div>
            <div>
              <dt>Pedidos de la tienda</dt>
              <dd>
                <a href="mailto:tienda@abisal.com">tienda@abisal.com</a>
              </dd>
            </div>
            <div>
              <dt>Teléfono / WhatsApp</dt>
              <dd>
                <a href="tel:+5493518051887">+54 9351 805 1887</a>
              </dd>
            </div>
            <div>
              <dt>Horarios</dt>
              <dd>lunes a viernes, 8:00 a 17:00 h (hora argentina)</dd>
            </div>
          </dl>
        </section>
        <section className="panel contacto-panel">
          <h3>Redes</h3>
          <ul className="redes">{REDES.map(mostrarRed)}</ul>
        </section>
      </div>
    </main>
  )
}

export default Contacto
