import { createPinia, setActivePinia } from 'pinia';
import { useDataPlayerStore } from '@/store/dataPlayerStore';


describe('PlayerView.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should display test', () => {
    const test = useDataPlayerStore();
    expect(test.test).toBe('Welcome to Pinia!');
  })
  
  it('should fetch Player', async () => {
    const jsonMock = jest.fn().mockResolvedValue('[{"id":1,"name":"John Doe","age":30},{"id":2,"name":"Jane Doe","age":30}]');
    window.fetch = jest.fn().mockResolvedValue({
      json: jsonMock
    });

    const pinia = useDataPlayerStore();
    await pinia.getData()
    
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(jsonMock).toHaveBeenCalled()
  })
  
  it('should display dataPlayer', async () => {
    const pinia = useDataPlayerStore();
    pinia.dataPlayer = [
      {
        "name": "John Doe",
        "id": 1,
      },
      {
        "name": "Jane Doe",
        "id": 2,
      }
    ]
    await pinia.getPlayer(1);
    expect(pinia.player.name).toBe('John Doe');
  })
});