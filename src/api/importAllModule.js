// importAllModule.js

/**
 *@ description batch import API
 *@ param {object} context object
 *@ param {regexp} reg matching rules
 *@ returns {object} object
 */

// function importAllModule(context) {
//   let map = {}
//   // let tmp = {}
//   let parts
//   for (let key of context.keys()) {
//     const keyArr = key.split('/')
//     keyArr.shift()
//     parts = keyArr[0].split('.api.js')[0].split('.')
//     // console.log('parts split: ', parts)
//     if (!map[parts[0]]) map[parts[0]] = {}
//     if (parts.length > 1) {
//       let childParts = parts.slice(1, parts.length)
//       // console.log('childParts.length: ', childParts, childParts.length)
//       if (childParts.length === 1) {
//         // console.log('childParts[0]: ', childParts[0])
//         map[parts[0]][childParts[0]] = context(key).default
//       }
//       else {
//         console.log('childObject: ', childObject(parts[0], childParts, context(key).default))
//       }
//     }
//     else {
//       map[parts[0]] = context(key).default
//     }
//
//     // console.log('keyArr: ', map, parts)
//     // map[keyArr.join('.').replace(reg, '')] = context(key).default
//   }
//
//   return map
// }
function importAllModule(context, reg) {
  const map = {}
  let tmp = {}
  for (let key of context.keys()) {
    const keyArr = key.split('/')
    keyArr.shift()
    // const pathSplit = keyArr.join().replace(reg, '').split('.')
    // console.log('keyArr: ', keyArr.join().replace(reg, ''), pathSplit, context(key))
    map[keyArr.join('.').replace(reg, '')] = context(key)
  }
  for (let key in map) {
    let children
    if (key.includes('.')) {
      children = key.split('.')
      if (!tmp[children[0]]) tmp[children[0]] = {}

      // console.log('key/map/children: ', [
      //     map[key],
      //     children,
      //     children[0],
      //     children[1],
      //     Object.assign({}, tmp, {[children[0]]: {[children[1]]: map[key]}})
      //   ])
      const childName = children[1].split(/[-_]/g).reduce((acc, section, i) => {
        if (i > 0) {
          const sectionSplit = section.split('')
          section = sectionSplit[0].toUpperCase() + sectionSplit.slice(1, sectionSplit.length).join('')
          acc = `${acc}${section}`
        }
        else{
          acc = section
        }
        return acc
      }, '')

      tmp[children[0]][childName] = { ...map[key] }
    }
    else {
      console.log('key/map: ', key, map)
      tmp[key] = { ...map[key] }
    }
  }
  return tmp
}

export default importAllModule
