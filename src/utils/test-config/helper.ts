import { mount, shallowMount } from '@vue/test-utils'

export function factory(factoryOptions) {
  const { component, mountingType, options } = factoryOptions
  if (mountingType === 'shallow') {
    return shallowMount(component, options)
  }
  else {
    return mount(component, options)
  }
}
