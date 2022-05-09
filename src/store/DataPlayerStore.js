import { defineStore } from 'pinia'

export const useDataPlayerStore = defineStore("PlayersStore", {
  state: () => {
    return {
      dataPlayer: [],
      test: "Welcome to Pinia!",
      player: {},
    }
  },
  actions: {
    async getData() {
      let data
      if(this.dataPlayer.length == 0) {
        data = await fetch('https://my-json-server.typicode.com/phrobinet/data/player')
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
      }
      this.dataPlayer = data
    },

    async getPlayer(id) {
      const user = await this.dataPlayer.find(player => player.id == id)
      this.player = user
    }
  }
})