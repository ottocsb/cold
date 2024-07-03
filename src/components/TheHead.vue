<script setup lang = "ts">
import { vOnClickOutside } from '@vueuse/components'
const route = useRoute()
const useLanguage = ref('English')
const showOption = ref(false)
const routeList: any[] = [
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
const Language = [
  {
    name: '中文简体'
  },
  {
    name: '中文繁体'
  },
  {
    name: 'English'
  },
  {
    name: '日语'
  },
  {
    name: '韩语'
  }
]
</script>

<template>
  <div flex="~ justify-between" bg-white class="pc-px items-center" py="13px" space-x="70px" b-b="gray-10 solid 2px">
    <img src="/PC/logo.png" alt="this is logo" h="5">
    <div flex-1 class="hidden lg:flex">
      <ul ma flex>
        <li v-for="item in routeList" :key="item.path" class="mr-4">
          <RouterLink :to="item.path" :class="[route.path === item.path ? 'text-black! fw-700' : '']" class="text-gray-500 hover:text-gray-800">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <button h="40px" px="10px" text="white 14px" b-rd="10px" bg="black">
      Merchant login
    </button>
    <div flex space-x="12px" class="block <lg:hidden">
      <img src="/PC/language.png" alt="language" h="19px" w="19px">
      <div
        v-on-click-outside="() => { showOption = false }" relative flex cursor-pointer
        gap-1
        @click="() => { showOption = !showOption }"
      >
        <span w-70px>
          {{ useLanguage }}
        </span>
        <div class="i-carbon:chevron-down" />
        <div v-if="showOption" top="8" w="200px" b-rd="10px!" bg="#faf8fa" absolute z-99 flex flex-col>
          <div
            v-for="(item, index) in Language"
            :key="item.name"
            class="p-2 text-center text-black"
            :class="[useLanguage === item.name ? 'bg-#e3e3e3!' : '', index === 0 ? 'rounded-t-10px' : '', index === Language.length - 1 ? 'rounded-b-10px' : '']"
            @click="() => { useLanguage = item.name; showOption = false }"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
