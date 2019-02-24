const resolver = require.context('./words', false, /\.js$/)

export const definitionComponents = resolver.keys().reduce((result, key) => {
  const module = resolver(key).default
  const wordName = key.replace('.component.js', '').replace(/-/g, ' ').replace('./', '')
  result[wordName] = module
  return result
}, {})

export const definedWords = Object.keys(definitionComponents).sort()
