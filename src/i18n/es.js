import englishTranslations from './en.js'

const translations = {
  "home page title": "Borrar el historial criminal en Utah",
  "home page primary action": "Empezar con un expungement",
  "community forum": "Foro de discusión",
  "free to use": "¡Completamente gratis para utilizar!"
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

