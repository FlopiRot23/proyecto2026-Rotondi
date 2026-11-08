import { createContext, useState } from 'react'

const CLAVE_SESION = 'abisal-sesion'

export const SesionContext = createContext(null)

/**
 * Lee la sesión guardada en localStorage
 * @method leerSesion
 * @return {{correo: string, plan: string}|null} La sesión guardada, o null si no hay ninguna
 */
let leerSesion = () => {
  const guardada = localStorage.getItem(CLAVE_SESION)
  if (guardada === null) {
    return null
  }
  try {
    return JSON.parse(guardada)
  } catch {
    localStorage.removeItem(CLAVE_SESION)
    return null
  }
}

/**
 * Guarda la sesión del socio y la comparte con todas las páginas
 * @method SesionProvider
 * @param {object} props - Propiedades del proveedor
 * @param {JSX.Element} props.children - Componentes que pueden usar la sesión
 * @return {JSX.Element} El proveedor del contexto de sesión
 */
export let SesionProvider = ({ children }) => {
  const [sesion, setSesion] = useState(leerSesion)

  /**
   * Inicia la sesión: la guarda en localStorage y en el estado
   * @method iniciarSesion
   * @param {string} correo - Correo del socio
   * @param {string} plan - Plan del socio: Básico, Premium o VIP
   */
  let iniciarSesion = (correo, plan) => {
    const nueva = { correo: correo, plan: plan }
    localStorage.setItem(CLAVE_SESION, JSON.stringify(nueva))
    setSesion(nueva)
  }

  /**
   * Cierra la sesión: la borra de localStorage y deja el estado en null
   * @method cerrarSesion
   */
  let cerrarSesion = () => {
    localStorage.removeItem(CLAVE_SESION)
    setSesion(null)
  }

  return (
    <SesionContext.Provider value={{ sesion: sesion, iniciarSesion: iniciarSesion, cerrarSesion: cerrarSesion }}>
      {children}
    </SesionContext.Provider>
  )
}
