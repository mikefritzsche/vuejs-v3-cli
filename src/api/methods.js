import { each, toArray, has, isString, isFunction, isNumber, isArray } from 'lodash'

/** Populate constructor function with the corresponding method(s) */
// eslint-disable-next-line no-unused-vars
const populateMethod = function(params, methods, modelKey) {
  /** Grab all the keys we might need to populate on constructor function for a given namespace */
  const methodKeys = Array.prototype.slice.call(arguments, 2, arguments.length).filter(function(key) {
    return key !== 'default'
  })

  const nestedObject = methodKeys.reduce((accumulator, key) => {
    if (!has(accumulator, key) && !isFunction(methods[key])) {
      accumulator[key] = {}
      return accumulator[key]
    }
    if (isFunction(methods[key])) {
      return accumulator
    }
    return accumulator[key]
  }, this)

  Object.keys(methods).forEach(key => {
    /** If we have a default key at this point, then its an empty object */
    if (key === 'default' || !isFunction(methods[key])) {
      return
    }
    nestedObject[key] = function() {
      const fullArgumentsList = [].concat.call([], params, toArray(arguments))
      return methods[key].apply(this, fullArgumentsList)
    }
  })
}

/** Iterate through all the top level imports */
// eslint-disable-next-line no-unused-vars
export const populateImport = function(params, o, modelKey) {
  let args = Array.prototype.slice.call(arguments, 0, arguments.length)
  each(o, (value, key) => {
    if (isString(value) || isNumber(value) || isArray(value)) {
      return
    }
    /** One of the index.js imports or a nested object hierarchy within an import */
    if (key === 'default' || !isFunction(value)) {
      let fullArgs = [].concat.call(args, key)
      fullArgs[1] = value
      return populateImport.apply(this, fullArgs)
    }
    /** An actual method (or object of methods) Populate api constructor function with the value of each */
    else {
      let fullArgs = [].concat.call(args, key)
      populateMethod.apply(this, fullArgs)
    }
  })
}
