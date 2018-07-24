import React from 'react'

export default class I18N extends React.Component {
  state = {
    currentLanguage: null,
    baseUrl: null,
    translations: null,
  }
  componentDidMount() {
    const languages = ['en', 'es']
    const urlLanguage = languages.find(language => window.location.pathname.startsWith(`/${language}/`) || window.location.pathname === `/${language}`)
    const navigatorLanguage = window.navigator.language.slice(0, 2)

    const languageToUse = urlLanguage || navigatorLanguage || 'en'

    this.setState({
      currentLanguage: languageToUse,
      baseUrl: languageToUse === urlLanguage ? `/${languageToUse}` : '',
    })

    import(`./i18n/${languageToUse}.js`)
      .then(mod => mod.default)
      .then(translations => this.setState({translations}))
  }
  render() {
    return this.state.translations ? this.props.children(this.state) : null
  }
}
