import React from "react";

export default class I18N extends React.Component {
  state = {
    currentLanguage: null,
    baseUrl: null,
    translations: null
  };
  componentDidMount() {
    const languages = ["en", "es"];
    const path =
      window.location.pathname === "/" &&
      window.location.search.startsWith("?p=")
        ? window.location.search.slice("?p=".length)
        : window.location.pathname;
    const urlLanguage = languages.find(
      language => path.startsWith(`/${language}/`) || path === `/${language}`
    );
    const navigatorLanguage = window.navigator.language.slice(0, 2);

    const languageToUse = urlLanguage || navigatorLanguage || "en";

    this.setState({
      currentLanguage: languageToUse,
      baseUrl: languageToUse === urlLanguage ? `/${languageToUse}` : ""
    });

    import(/* webpackChunkName: "i18n" */ `./i18n/${languageToUse}.js`)
      .then(mod => mod.default)
      .then(translations => this.setState({ translations }));
  }
  render() {
    return this.state.translations ? this.props.children(this.state) : null;
  }
}
