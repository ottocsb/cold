<script setup lang="ts">
defineOptions({
  name: 'TheFooter'
})

const { t } = useI18n()
</script>

<template>
  <nav class="pc-px" flex="~ col gap-5" pt="10 <lg:10" bg="#faf8fa">
    <div flex="~ 1" justify-center gap="6 <lg:3" class="<lg:flex-col">
      <div flex="~ col 1 justify-center gap-20px">
        <img src="/PC/logo.png" alt="this is logo" h="7 <lg:5" w="24 <lg:24">
        <div>
          {{ t('footer.text1') }}
        </div>
      </div>
    </div>
    <div text="#666666" pb-10>
      {{ t('footer.text2') }}
    </div>
  </nav>
</template>
