<script setup lang = "ts">
defineOptions({
  name: 'supportingchain'
})

const { t } = useI18n()

const supportChain = [
  {
    name: 'BTC',
    img: '/BTC.png'
  },
  {
    name: 'USDT',
    img: '/USDT.png'
  },
  {
    name: 'ETH',
    img: '/ETH.png'
  },
  {
    name: 'BTC',
    img: '/BTC.png'
  },
  {
    name: 'USDT',
    img: '/USDT.png'
  },
  {
    name: 'ETH',
    img: '/ETH.png'
  },
  {
    name: 'BTC',
    img: '/BTC.png'
  },
  {
    name: 'USDT',
    img: '/USDT.png'
  },
  {
    name: 'ETH',
    img: '/ETH.png'
  },
  {
    name: 'BTC',
    img: '/BTC.png'
  },
  {
    name: 'USDT',
    img: '/USDT.png'
  },
  {
    name: 'ETH',
    img: '/ETH.png'
  }
]
</script>

<template>
  <div text="22px" fw="700" class="pc-px flex-1">
    <div py="70px">
      {{ t('support.text1') }}
    </div>

    <div grid="~ cols-6 <lg:cols-2" class="<xl:cols-4" gap-6 pb="35">
      <div
        v-for="({ name, img }, index) in supportChain"
        :key="index"
        bg="#faf8fa"
        b-rd="20px"
        mb="5"
        py="8"
        size="full"
        gap-20px
        flex="~ col items-center justify-center "
      >
        <img :src="img" alt="this is logo" h="25" w="25">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
