export function getClassname(dataKey) {
  const splitByPeriod = dataKey.split('.')
  return splitByPeriod.length > 0 ? splitByPeriod[splitByPeriod.length - 1] : dataKey
}
