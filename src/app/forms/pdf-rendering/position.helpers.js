export function verifyPercentage(props, propName, componentName) {
  if (!/[0-9\.]+%/g.test(props[propName])) {
    const keyName = props.debugKey ? `debugKey '${props.debugKey}'` : `dataKey '${props.dataKey}'`
    return Error(`For ${keyName} the '${propName}' prop is not a percentage css value. Value is '${props[propName]}'`)
  }
}

export function atLeastOneKey(props, propName, componentName) {
  if (!props.dataKey && !props.debugKey) {
    return Error(`A ${componentName} was rendered with neither a dataKey or a debugKey. One of the two is required. Props given were ${JSON.stringify(props)}`)
  }
}
