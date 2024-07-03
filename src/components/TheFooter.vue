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
</script>

<template>
  <nav class="pc-px" flex="~ col" pt="1 <lg:3" bg="#faf8fa">
    <div flex="~ 1" justify-center gap="6 <lg:3" class="<lg:flex-col">
      <div flex="~ col 1 justify-center gap-20px">
        <img src="/PC/logo.png" alt="this is logo" h="7" w="52">
        <div>
          Easily accept payments from all over the world. Instant <br class="hidden <lg:block"> settlement, low fees and extensive assst support
        </div>
      </div>
      <div flex justify-center class="<lg:block">
        <ul flex class="items-center <lg:flex-col <lg:items-start" ml="auto <lg:0">
          <li v-for="item in pathList" :key="item.path" :class="item.path !== route.path ? 'pb-30px' : ''">
            <RouterLink
              v-if="route.path !== item.path"
              :to="item.path"
              class="text-#999999 hover:text-gray-800"
            >
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div text="#666666" pb-10>
      CopyRight ©2024-2026 logo All Rights Reserved.
    </div>
  </nav>
</template>
