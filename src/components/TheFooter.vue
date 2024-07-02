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
  <nav h="50" class="pc-px" flex="~ " bg="#faf8fa">
    <div flex="~ col 1" justify-center gap-6>
      <img src="/PC/logo.png" alt="this is logo" h="7" w="52">
      <div>
        Easily accept payments from all over the world. Instant settlement, low fees and extensive assst support
      </div>
      <div text="#666666">
        CopyRight ©2024-2026 logo All Rights Reserved.
      </div>
    </div>
    <div flex justify-center>
      <ul flex class="items-center" ml="auto">
        <li v-for="item in pathList" :key="item.path" class="mr-4">
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
  </nav>
</template>
