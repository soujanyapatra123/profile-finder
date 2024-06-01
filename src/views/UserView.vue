<script setup>
import { nextTick, onMounted, ref } from 'vue'
import useUserStore from '../stores/useUserStore.js'
import { storeToRefs } from 'pinia'
import UserData from '@/components/UserData.vue'
import { useRoute } from 'vue-router'

// Store
const store = useUserStore()
const { searchUserData } = storeToRefs(store)
const { handleSearch } = store

// Route
const route = useRoute()

// Hooks
onMounted(() => {
  nextTick(() => {
    if (route.params.id) {
      handleSearch(route.params.id)
    }
  })
})
</script>

<template>
  <div class="w-full pa-5">
    <UserData :user="searchUserData" />
  </div>
</template>
