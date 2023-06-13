import { defineStore } from 'pinia'

// 第一个参数是应用程序中 store 的唯一 id
 const usecounterStore = defineStore('counter', {
 
    state: () => {
        return {
          name: 'ls',
          age: 120,
        }
      },
})

export default usecounterStore