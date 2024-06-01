import { ref } from 'vue'
import { defineStore } from 'pinia'
import httpClient from '@/plugins/axios'
import { debounce } from 'lodash'

export const useUserStore = defineStore('user', () => {
  const userList = ref([])
  const searchUserData = ref({})

  const fetchUserList = async () => {
    if (userList.value.length) {
      // return for ignore API rate limit error
      return
    }

    try {
      const { data } = await httpClient.get('users')
      if (data) {
        userList.value = data
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleSearch = debounce(async (name) => {
    try {
      const { data } = await httpClient.get(`users/${name}`)
      if (data) {
        searchUserData.value = data
      }
    } catch (e) {
      console.log(e)
    }
  }, 1000) // 1000 ms delay

  return { userList, searchUserData, fetchUserList, handleSearch }
})

export default useUserStore
