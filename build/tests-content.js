module.exports = function(ComponentName) {
    return `import { factory } from '@/utils/test-config/helper'
    import { VueWrapper } from '@vue/test-utils'
    import { ComponentPublicInstance } from 'vue'
    import ${ComponentName} from '../${ComponentName}.vue'
    
    const slots = {
      default: ['']
    }
    
    describe('${ComponentName}', () => {
      let wrapper: VueWrapper<ComponentPublicInstance>
    
      beforeEach(() => {
        wrapper = factory({component: ${ComponentName}, options: { slots }})
      })
      
      test('smoke test', () => {
        expect(wrapper.exists()).toBeTruthy()
      })
    })`
}