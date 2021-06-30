import { mount, shallowMount } from '@vue/test-utils'

export const Store = (state = {}, actions = {}, mutations = {}, getters = {}, modules = {}) => {
  return {
    state,
    actions,
    mutations,
    getters,
    modules
  }
}
/**
 * mounting options:
 *  context
 *  computed
 *  store
 *  data
 *  slots
 *  scopedSlots
 *  stubs
 *  mocks
 *  localVue
 *  attachToDocument
 *  propsData
 *  attrs
 *  listeners
 *  parentComponent
 *  provide
 *
 * Example:
 * const wrapper = new Factory(Select, 'shallow', {
    stubs: {
      OptionItem,
      OptionItemsContainer,
      SearchInput
    }
   })

/**
 * Factory function to mount component for testing
 * @param component - name of component to mount
 * @param mountingType - mount type, defaults to shallow
 * @param mountingOptions - any available vue test utils mounting iptions
 * @return {Wrapper<Vue>}
 * @constructor
 */
export function Factory(component, mountingType = 'shallow', mountingOptions = {}) {
  return mountingType === 'shallow' ? shallowMount(component, mountingOptions) : mount(component, mountingOptions)
}
