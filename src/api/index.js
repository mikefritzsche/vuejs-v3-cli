/**
 * DO NOT remove the dynamic imports and modules hash comments as they are used
 * to parse this file when creating a new api module
 */

// dynamic imports
import * as analytics from '@/api/modules/analytics/index'
import * as test from '@/api/modules/test'
import * as champaign from '@/api/modules/champaign'
import * as push from '@/api/modules/push'
// end dynamic imports

// modules hash
const modules = {
  analytics,
	test,
	champaign,
  push
}
// end modules hash

import { populateImport } from './methods'

// export statement
export default function() {
  Object.keys(modules).forEach(module => {
    populateImport.call(this, {}, modules[module], module)
  })
}
