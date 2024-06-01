<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from '../stores/useUserStore.js'
import { storeToRefs } from 'pinia'
import UserData from './UserData.vue'

// Store
const store = useUserStore()
const { userList, searchUserData } = storeToRefs(store)
const { fetchUserList, handleSearch } = store

// Route
const router = useRouter()

// Data
const searchText = ref('')

// Methods
const goToSpecificView = (uId) => {
  router.push({
    name: 'userview',
    params: {
      id: uId
    }
  })
}

// Wacher
watchEffect(() => {
  if (searchText.value) {
    handleSearch(searchText.value)
  }
  console.log(searchUserData.value)
})

// Hooks
onMounted(() => {
  fetchUserList()
})
</script>

<template>
  <div class="w-full pa-5">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="searchText"
          @change="handleSearch(searchText)"
          placeholder="Search name"
        >
        </VTextField>
      </VCol>
    </VRow>
    <VRow v-if="!searchText">
      <VCol
        :title="`Click to show details`"
        lg="4"
        md="4"
        sm="12"
        cols="12"
        v-for="user in userList"
        :key="user.id"
      >
        <VCard class="pa-5" color="rgb(83 59 90)" @click="goToSpecificView(user.login)">
          <div class="d-flex">
            <VRow>
              <VCol cols="6" class="d-flex justify-center">
                <VAvatar size="60">
                  <VImg :src="user.avatar_url" />
                </VAvatar>
              </VCol>
              <VCol cols="6">
                <div class="text-white">
                  <div class="d-flex">Type: {{ user.type }}</div>
                  <div class="d-flex">Name: {{ user.login }}</div>
                </div>
              </VCol>
            </VRow>
          </div>
        </VCard>
      </VCol>
    </VRow>
    <div v-else>
      <UserData :user="searchUserData" />
    </div>
  </div>
</template>
