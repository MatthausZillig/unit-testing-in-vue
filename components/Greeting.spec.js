import { mount } from '@vue/test-utils'
import GreetingComponent from './Greeting'

describe('GreetingComponent', () => {
  it('should render a default message if no props is provided', () => {
    const wrapper = mount(GreetingComponent)
    expect(wrapper.html()).toContain('<span>Hello, World</span>')
  })

  it('should render a message with the prop name that was provided', () => {
    const wrapper = mount(GreetingComponent, {
      propsData: {
        name: 'Nuxt',
      },
    })
    expect(wrapper.html()).toContain('<span>Hello, Nuxt</span>')
  })
})
