import englishTranslations from './en.js'

const translations = {
  // home page
  "home page title": "Borrar el historial criminal en Utah",
  "home page primary action": "Empezar con un expungement",
  "fill out forms": "Rellene los documentos",
  "community forum": "Foro de discusión",
  "free to use": "¡Completamente gratis para utilizar!",
  "ftu descr": [
    "Este sitio web fue ",
    "construido por miembros de la communidad de Utah para los miembros de la comunidad de Utah",
    `. Nunca le pediremos pagar por nada.`
  ],
  "ask questions": "Hacer y responder a preguntas",
  "ask questions descr": [
    `Entre en nuestro `,
    `foro de discusión`,
    ` para hacer y responder a preguntas acerca del proceso de los expungements en Utah.`,
  ],
  "find out qualify": "Averigüe si usted se califica",
  "foq descr": [
    "Nuestra ",
    "herramienta de software",
    " le ayudará saber si y cuándo sus condenas estan listas para borrarse del historial criminal.",
  ],
  "fill out paperwork": "Rellene los papeles en línea",
  "fop descr": [
    `Introduzca su información en un formulario web y `,
    `nosotros generamos los documentos`,
    ` que se necesiten para presentar a las cortes.`,
  ],

  // footer
  "home page": "Página de inico",
  "what is expg": "¿Qué es un expungement?",
  "ask a question": "Hacer una pregunta",
  "about us": "Acerca de",
  "report problem": "Reportar un problema",
}

window.__ = function(name) {
  let translation = translations[name]

  if (!translation) {
    translation = englishTranslations[name]
    if (translation) {
      console.warn(`There is no spanish translation for '${name}'`)
    }
  }

  if (!translation) {
    throw new Error(`There is no spanish or english translation for '${name}'`)
  }

  return translation
}

export default translations

