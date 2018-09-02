const translations = {
  // home page
  "home page title": "Expunge a criminal conviction in Utah",
  "home page primary action": "Start an expungement",
  "fill out forms": "Fill out forms",
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
  "fop descr": [
    `Enter your information in a web form and `,
    `we'll generate the documents`,
    ` you'll need to file with the courts.`,
  ],

  // footer
  "home page": "Home",
  "what is expg": "What is an expungement?",
  "ask a question": "Ask a question",
  "about us": "About us",
  "report problem": "Report a problem",

  // application for coe form
  "app for coe short descr": "This form requests a certificate that can be used to petition for an expungement.",

  // petition conviction form
  "petition conviction name": "Petition to Expunge Records (Conviction)",
  "petition conviction short descr": "This form requests a court order for an expungement. You must first obtain a Certificate of Eligibility before filing this form.",

  // form bank
  "click for form details": "Click for form details",
}

window.__ = function(name) {
  const translation = translations[name]
  if (!translation) {
    throw new Error(`No english translation for '${name}'`)
  }

  return translation
}

export default translations
