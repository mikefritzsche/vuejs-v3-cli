/**
 * Handle extra classes passed into a component.
 * @param classes
 * @returns {{[key: string]: boolean}}
 */
export const extraClassesHandler = (classes: unknown): Record<string, boolean> => {
  const extraClasses: Record<string, boolean> = {}

  if (typeof classes === 'boolean' || !(classes as boolean)) {
    return extraClasses
  }

  if (Array.isArray(classes)) {
    for (let i = 0; i < classes.length; i++) {
      extraClasses[classes[i]] = true
    }
  }

  if (typeof classes === 'string') {
    extraClasses[classes] = true
  }

  return extraClasses
}

/**
 * Random ID generator.
 * @param length
 * @returns {string}
 */
export function newId(length = 10): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let result = ''

  for (let i = 0; i < length; i++) {
    result = result + characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return result
}

/**
 * Pascal case a kebab formatted string.
 * @param {string} string
 * @returns {String}
 */
export function kebabToPascal(string = ''): string {
  const strArray = string.trim().split('-')
  let pascalStr = ''

  for (let i = 0; i < strArray.length; i++) {
    pascalStr = pascalStr + strArray[i].toLowerCase().charAt(0).toUpperCase() + strArray[i].slice(1)
  }

  return pascalStr
}

/**
 * Object deep comparison.
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
export function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true

  if (
    a instanceof Date &&
    b instanceof Date &&
    a.getTime() !== b.getTime()
  ) {
    // If the values are Date, compare them as timestamps
    return false
  }

  if (a !== Object(a) || b !== Object(b)) {
    // If the values aren't objects, they were already checked for equality
    return false
  }

  const props = Object.keys(Object(a))

  if (props.length !== Object.keys(Object(b)).length) {
    // Different number of props, don't bother to check
    return false
  }

  return props.every(p => deepEqual(Object(a)[p], Object(b)[p]))
}

/**
 * Useful for props validator method when evaluating a prop value against an
 * enumerated set of values for a given prop type.
 * @param {object} properties
 * @param {string} value
 * @returns {boolean}
 */
export function propValidator(properties: { [key: string]: string }, value: string): boolean {
  for (const prop in properties) {
    if (properties[prop] === value) return true
  }
  return false
}

/**
 * Convert a Pascal cased string into space separated strings.
 * @param {string} str
 * @returns {string}
 */
export function separatePascalCaseStr(str: string): string {
  return str
    .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    .replace(/^./, (str: string): string => str.toUpperCase())
    .trim()
}
