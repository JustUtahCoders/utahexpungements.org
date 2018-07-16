const translations = {
  HOME_PAGE_TITLE: "Expunge a criminal conviction in Utah",
  HOME_PAGE_PRIMARY_ACTION: "Start an expungement",
  COMMUNITY_FORUM: "Community forum",
}

window.__ = function(name) {
  const translation = translations[name]
  if (!translation) {
    throw new Error(`No english translation for '${name}'`)
  }

  return translation
}

export default translations
