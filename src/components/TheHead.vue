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
    path: '/supportingchain',
    name: 'Supporting chain'
  },
  {
    path: '/developdocument',
    name: 'Develop a document'
  },
  {
    path: '/helpcenter',
    name: 'Help Center'
  }
]
const Language = [
  {
    name: '中文简体',
    key: 'chs'
  },
  {
    name: '中文繁体',
    key: 'cht'
  },
  {
    name: 'English',
    key: 'enu'
  }
]
const showMenu = ref(false)

const langClick = (item: any) => {
  showOption.value = false
  useLanguage.value = item.name
}
</script>

<template>
  <div flex="~ justify-between" bg-white class="pc-px items-center" py="13px" space-x="70px <lg:10px" b-b="gray-10 solid 2px">
    <img src="/PC/logo.png" alt="this is logo" h="5">
    <div flex-1 class="flex <lg:hidden">
      <ul ma flex gap-4>
        <li v-for="item in routeList" :key="item.path">
          <RouterLink :to="item.path" :class="[route.path === item.path ? 'text-black! fw-700' : '']" class="text-gray-500 hover:text-gray-800">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <button h="40px" px="10px" text="white 14px" b-rd="10px" bg="black" mr="20px <lg:50px!">
      Merchant login
    </button>
    <img z="10" src="/PC/menu.png" alt="is menu" absolute right-4 h="5" w="6.5" class="hidden <lg:block" @click="showMenu = true">
    <div flex space-x="12px" class="block <lg:hidden" w="30">
      <img src="/PC/language.png" alt="language" h="19px" w="19px">
      <div
        v-on-click-outside="() => { showOption = false }"
        relative
        flex
        flex-1
        cursor-pointer
        gap-1
        @click="() => { showOption = !showOption }"
      >
        <div flex-1>
          {{ useLanguage }}
        </div>
        <div class="i-carbon:chevron-down" />
        <div v-if="showOption" top="8" w="200px" b-rd="10px!" b="solid 1px black" bg="#faf8fa" absolute z-99 flex flex-col>
          <div
            v-for="(item, index) in Language"
            :key="item.name"
            class="p-2 text-center text-black"
            :class="[useLanguage === item.name ? 'bg-#e3e3e3!' : '', index === 0 ? 'rounded-t-10px' : '', index === Language.length - 1 ? 'rounded-b-10px' : '']"
            @click="langClick(item)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <Transition name="slide-left">
    <div v-if="showMenu" class="menu-drawer" bg="white" z="999" fixed h-full w-full overflow-hidden pt="20px">
      <div flex="~ justify-between" b-b="gray-10 solid 1px" px="30px">
        <button h="40px" px="10px" text="white 14px" b-rd="5px" bg="black" mb="20px">
          Merchant login
        </button>
        <img src="/PC/close.png" alt="" w="6.5" h="6" mt="10px" @click="showMenu = false">
      </div>
      <nav px="30px" mt="30px">
        <ul ma>
          <li v-for="item in routeList" :key="item.path" class="mr-4" mt="10" text="6">
            <RouterLink :to="item.path" :class="[route.path === item.path ? 'text-black! fw-700' : '']" class="text-gray-500 hover:text-gray-800" @click="showMenu = false">
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
      <div w-full mt="20" px="30px">
        <div flex class="block" w="70" b-rd="10px!" b="solid 1px #FFE7E7E7" bg="#faf8fa">
          <div w-full flex flex-wrap items-center @click="() => { showOption = !showOption }">
            <img src="/PC/language.png" alt="language" h="22px" w="22px" ml="20px">
            <div
              v-on-click-outside="() => { showOption = false }"
              style="align-items: center;"
              relative
              flex
              flex-1
              cursor-pointer
              gap-1
            >
              <div flex-1 pl="20px" h="15" lh="15">
                {{ useLanguage }}
              </div>
              <div class="i-carbon:chevron-down" mr="20px" />
            </div>
            <div v-if="showOption" top="15" w-full flex-col flex-wrap>
              <div
                v-for="(item, index) in Language"
                :key="item.name"
                pl="60px"
                class="p-2 text-black"
                :class="[useLanguage === item.name ? 'bg-#e3e3e3!' : '', index === Language.length - 1 ? 'rounded-b-10px' : '']"
                @click="langClick(item)"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}
</style>
