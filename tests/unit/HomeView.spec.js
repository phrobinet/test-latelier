import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';
import { createTestingPinia } from '@pinia/testing'
import { useDataPlayerStore } from '@/store/dataPlayerStore';


describe('HomeView.vue', () => {

  it('should display page', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [createTestingPinia()]
      }
    });

    const pinia = useDataPlayerStore();
    
    expect(pinia.getData).toHaveBeenCalledTimes(1)
    expect(wrapper.find('input').exists()).toBe(true);
  })
})