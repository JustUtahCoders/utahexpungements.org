const translations = {
  "home page title": "Expunge a criminal conviction in Utah",
  "home page primary action": "Start an expungement",
  "community forum": "Community forum",
  "free to use": "Free to use!",
}

window.__ = function(name) {
  const translation = translations[name]
  if (!translation) {
    throw new Error(`No english translation for '${name}'`)
  }

  return translation
}

export default translations
