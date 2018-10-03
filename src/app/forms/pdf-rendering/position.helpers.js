export function verifyPercentage(props, propName, componentName) {
  if (!/[0-9\.]+%/g.test(props[propName])) {
    const keyName = props.debugKey ? `debugKey '${props.debugKey}'` : `dataKey '${props.dataKey}'`
    return Error(`For ${keyname} the '${propName}' prop is not a percentage css value. Value is '${props[propName]}'`)
  }
}
