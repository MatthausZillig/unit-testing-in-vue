import { mount } from '@vue/test-utils'
import CounterComponent from './Counter.vue'

describe('CounterComponent', () => {
  it('By default the counter number value should be 0', () => {
    const wrapper = mount(CounterComponent)
    expect(wrapper.html()).toContain('<span>0</span>')
  })

  it('If the increase button is clicked one time, the counter value should be 1', async () => {
    const wrapper = mount(CounterComponent)
    wrapper.find('[data-testid="increase"]').trigger('click')

    await wrapper.vm.$nextTick()
    const counterValue = parseInt(wrapper.find('span').element.textContent)
    expect(counterValue).toEqual(1)
  })
  it('If the increase button is clicked two times, and the decrease button is clicked once, the counter value should be 2', async () => {
    const wrapper = mount(CounterComponent)
    wrapper.find('[data-testid="increase"]').trigger('click')
    wrapper.find('[data-testid="increase"]').trigger('click')
    wrapper.find('[data-testid="decrease"]').trigger('click')

    await wrapper.vm.$nextTick()
    const counterValue = parseInt(wrapper.find('span').element.textContent)
    expect(counterValue).toEqual(1)
  })
  it('If the decrease button is clicked, and the value is equal to 0 the counter value should be 0', async () => {
    const wrapper = mount(CounterComponent)
    wrapper.find('[data-testid="decrease"]').trigger('click')
    wrapper.find('[data-testid="decrease"]').trigger('click')

    await wrapper.vm.$nextTick()
    const counterValue = parseInt(wrapper.find('span').element.textContent)
    expect(counterValue).toEqual(0)
  })
})
