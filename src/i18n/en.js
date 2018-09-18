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

  // menu items
  "menu item - dashboard": "Dashboard",
  "menu item - home": "Home",
  "menu item - ask a question": "Ask a question",
  "menu item - forms" : "Forms",
  "menu item - tool": "Expungement tool",
  "menu item - overview": "Overview",
  "menu item - step 1": "Step 1: Are you eligible?",
  "menu item - step 2": "Step 2: Certificate of Eligibility",
  "menu item - step 3": "Step 3: File Petition",
  "menu item - step 4": "Step 4: Serve Petition",
  "menu item - about": "About us",

  // footer
  "home page": "Home",
  "what is expg": "What is an expungement?",
  "ask a question": "Ask a question",
  "about us": "About us",
  "report problem": "Report a problem",
  "cover image credit": "Cover image",

  // application for coe form
  "app for coe short descr": "This form requests a certificate that can be used to petition for an expungement.",

  // petition conviction form
  "petition conviction name": "Petition to Expunge Records (Conviction)",
  "petition conviction short descr": "This form requests a court order for an expungement. You must first obtain a Certificate of Eligibility before filing this form.",

  // form bank
  "click for form details": "Click for form details",

  // motion to waive fees
  "motion to waive fees name": "Motion to Waive Fees",
  "motion to waive fees short descr": "This form can be filed with other forms to request that the court remove the fees for filing a form.",
}

window.__ = function(name) {
  const translation = translations[name]
  if (!translation) {
    throw new Error(`No english translation for '${name}'`)
  }

  return translation
}

export default translations
