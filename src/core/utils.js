export function capitalize(str) {
  if (typeof str !== 'string') {
    return ''
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
}