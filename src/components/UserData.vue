<script setup>
// imports
import { defineProps } from 'vue'

// Props
const props = defineProps({
  user: Object
})
</script>

<template>
  <div class="w-full pa-5">
    <VRow>
      <VCol cols="4">
        <VCard class="pa-5" color="rgb(83 59 90)">
          <div class="d-flex">
            <VRow>
              <VCol cols="6" class="d-flex justify-center">
                <VAvatar size="60">
                  <VImg :src="props.user.avatar_url" />
                </VAvatar>
              </VCol>
              <VCol cols="6">
                <div class="text-white">
                  <div class="d-flex">Type: {{ props.user.type }}</div>
                  <div class="d-flex">Name: {{ props.user.login }}</div>
                </div>
              </VCol>
            </VRow>
          </div>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
