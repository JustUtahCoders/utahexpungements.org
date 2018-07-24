const translations = {
  // home page
  "home page title": "Expunge a criminal conviction in Utah",
  "home page primary action": "Start an expungement",
  "community forum": "Community forum",
  "free to use": "Free to use!",
  "ftu descr": [
    "This website is ",
    "built by Utah community members for Utah community members",
    `. We'll never charge you anything.`
  ],
  "ask questions": "Ask and answer questions",
  "ask questions descr": [
    `Join our `,
    `discussion forum`,
    ` to ask and answer questions about the expungement process in Utah.`,
  ],
  "find out qualify": "Find out if you qualify",
  "foq descr": [
    "Our ",
    "screening tool",
    " will help you understand if and when your convictions are ready to be expunged from your criminal record.",
  ],
  "fill out paperwork": "Fill out the paperwork online",
  "fop descr": `Enter your information in a web form and we'll generate the documents you'll need to file with the courts.`,

  // footer
  "home page": "Home",
  "what is expg": "What is an expungement?",
  "ask a question": "Ask a question",
  "about us": "About us",
  "report problem": "Report a problem",
}

window.__ = function(name) {
  const translation = translations[name]
  if (!translation) {
    throw new Error(`No english translation for '${name}'`)
  }

  return translation
}

export default translations
