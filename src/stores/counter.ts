import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'leo'
  }),
  actions: {
    increment() {
      this.count++
    }
  },
  persist: true
})
