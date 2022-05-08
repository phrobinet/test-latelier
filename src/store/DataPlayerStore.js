import { defineStore } from 'pinia'

export const useDataPlayerStore = defineStore('playerStore', {
  state: () => {
    return {
      test: "Welcome to Pinia"
    }
  }
})