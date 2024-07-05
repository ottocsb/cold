<script setup lang="ts">
const route = useRoute()
const pathList = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/SupportingChain',
    name: 'Supporting chain'
  },
  {
    path: '/DevelopDocument',
    name: 'Develop a document'
  },
  {
    path: '/HelpCenter',
    name: 'Help Center'
  }
]
// Return an array excluding the current route
const realList = computed(() => {
  return pathList.filter(item => item.path !== route.path)
})
</script>

<template>
  <nav class="pc-px" flex="~ col gap-5" pt="10 <lg:10" bg="#faf8fa">
    <div flex="~ 1" justify-center gap="6 <lg:3" class="<lg:flex-col">
      <div flex="~ col 1 justify-center gap-20px">
        <img src="/PC/logo.png" alt="this is logo" h="7 <lg:5" w="52 <lg:38">
        <div>
          Easily accept payments from all over the world. Instant settlement, low fees and extensive assst support
        </div>
      </div>
      <div flex="~ justify-between" class="w-50% items-center justify-items-center <lg:block <lg:w-full <lg:flex-col <lg:items-start">
        <div v-for="item in realList" :key="item.path" pb="0 <lg:30px">
          <RouterLink
            v-if="route.path !== item.path"
            :to="item.path"
            class="text-#999999 hover:text-gray-800"
          >
            {{ item.name }}
          </RouterLink>
        </div>
      </div>
    </div>
    <div text="#666666" pb-10>
      CopyRight ©2024-2026 logo All Rights Reserved.
    </div>
  </nav>
</template>
