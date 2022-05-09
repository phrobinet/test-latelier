import { mount } from '@vue/test-utils'
import InfoPlayer from '@/components/InfoPlayer.vue'

const title = "Rank";
const factoryProps = (propsData) => {
  return mount(InfoPlayer, {
    propsData: {
      title,
      ...propsData
    }
  })
}

describe('InforPlayer.vue', () => {
  it('should render p = 12 & h1 = Rank ', () => {
    const wrapper = factoryProps({ data: 12 })
    
    expect(wrapper.find('h1').text()).toBe('Rank')
    expect(wrapper.find('p').text()).toBe('12')
  });
  
  it('should render p = Serbia ', () => {
    const wrapper = factoryProps({ data: 'Serbia' })
    
    expect(wrapper.find('h1').text()).toBe('Rank')
    expect(wrapper.find('p').text()).toBe('Serbia')
  });

});