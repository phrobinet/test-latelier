import { mount } from '@vue/test-utils'
import PlayerCard from '@/components/PlayerCard.vue'


describe('PlayerCard.vue', () => {
  it('should player card ', async () => {
    const wrapper = await mount(PlayerCard, {
      propsData: {
        player: {
          firstname: 'John',
          lastname: 'Doe',
          data: {
            rank: 12,
            points: 123456,
          },
          country: {
            name: 'Serbia',
            code: 'SRB',
          },
          profilePicture: "https://data.latelier.co/training/tennis_stats/resources/Djokovic.png"
        }
      }
    })
    expect(wrapper.find('[data-test="name"]').text()).toBe('John Doe');
    expect(wrapper.find('[data-test="rank"]').text()).toBe('# 12');
    expect(wrapper.find('[data-test="point"]').text()).toBe('123456');
    expect(wrapper.find('[data-test="country"]').text()).toBe('SRB');
    expect(wrapper.find('[data-test="picture"]').isVisible()).toBe(true);
  })
});