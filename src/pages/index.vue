<script setup lang="ts">
import { availableLocales } from '~/modules/i18n'
const { t } = useI18n()
defineOptions({
  name: 'IndexPage'
})

console.log('availableLocales', availableLocales)
</script>

<template>
  <div pb="120px">
    <div class="pc-px box1" text-white h="150" flex="~ justify-center col gap-2">
      <div text="30px <lg:20px">
        {{ t('home.text1') }}
      </div>
      <div fw="light" text="50px  <lg:24px">
        {{ t('home.text2') }}
      </div>
      <div fw-700 text="50px  <lg:28px">
        {{ t('home.text3') }} <br class="block <lg:hidden"> {{ t('home.text4') }}
      </div>
    </div>
    <div class="pc-px" mt="150px" grid="~ cols-2 <lg:cols-1" justify-items-center space-x="25 <lg:0" space-y="0 <lg:10">
      <img src="/PC/11.png" alt="is bg">
      <div
        text="white"
        flex="~ col"
        relative w-full
      >
        <img z="-10" src="/PC/bg2.png" alt="is bg" absolute left-1 h-full w-full>
        <div ma py="0 <lg:14" px="8 <lg:8">
          <p text="32px left" fw="700" w-full>
            {{ t('home.text5') }}
          </p>
          <p text="18px left" w-full>
            {{ t('home.text6') }} <br>
            {{ t('home.text7') }}
          </p>
        </div>
      </div>
    </div>
    <div class="pc-px" mt="100px" grid="~ cols-2 <lg:cols-1" justify-items-center space-x="25 <lg:0" space-y="0 <lg:10">
      <div
        class="<lg:row-start-2 <lg:row-end-3 <lg:mt-14"
        text="white"
        flex="~ col"
        relative w-full
      >
        <img z="-10" src="/PC/bg2.png" alt="is bg" absolute left-1 h-full w-full>
        <div ma py="0 <lg:14" px="8 <lg:8">
          <p text="32px left" fw="700" w-full>
            {{ t('home.text8') }}
          </p>
          <p text="18px left" w-full>
            {{ t('home.text9') }}<br>
            {{ t('home.text10') }}
          </p>
        </div>
      </div>
      <img src="/PC/22.png" class="<lg:row-start-1 <lg:row-end-2" alt="is bg">
    </div>
    <div class="pc-px" mt="150px" grid="~ cols-2 <lg:cols-1" justify-items-center space-x="25 <lg:0" space-y="0 <lg:10">
      <img src="/PC/33.png" alt="is bg">
      <div
        text="white"
        flex="~ col"
        relative w-full
      >
        <img z="-10" src="/PC/bg2.png" alt="is bg" absolute left-1 h-full w-full>
        <div ma py="0 <lg:14" px="8 <lg:8">
          <p text="32px left" fw="700" w-full>
            {{ t('home.text11') }}
          </p>
          <p text="18px left" w-full>
            {{ t('home.text12') }}<br>
            {{ t('home.text13') }}
          </p>
        </div>
      </div>
    </div>
    <div class="pc-px" mt="100px" grid="~ cols-2 <lg:cols-1" justify-items-center space-x="25 <lg:0" space-y="0 <lg:10">
      <div
        class="<lg:row-start-2 <lg:row-end-3 <lg:mt-14"
        text="white"
        flex="~ col"
        relative w-full
      >
        <img z="-10" src="/PC/bg2.png" alt="is bg" absolute left-1 h-full w-full>
        <div ma py="0 <lg:14" px="8 <lg:8">
          <p text="32px left" fw="700" w-full>
            {{ t('home.text14') }}
          </p>
          <p text="18px left" w-full>
            {{ t('home.text15') }}<br>
            {{ t('home.text16') }}
          </p>
        </div>
      </div>
      <img src="/PC/44.png" class="<lg:row-start-1 <lg:row-end-2" alt="is bg">
    </div>
    <div mt-100px p="14 <lg:8" text="white center" flex style="background: url('/PC/bg3.png') no-repeat center;background-size: cover">
      <div ma>
        <span fw="700" text="50px <lg:24px">
          {{ t('home.text17') }}
        </span>
        <br><br>
        <span text="30px <lg:15px">
          {{ t('home.text18') }}
        </span>
      </div>
    </div>
    <div class="pc-px mt-25" flex="~ col gap-10">
      <div fw="700" text="20px">
        {{ t('home.text19') }}
      </div>
      <div text="16px black">
        {{ t('home.text20') }}<br>
        <span text="#757575">{{ t('home.text21') }}</span>
      </div>
      <div grid="~ cols-3 gap-5" class="<lg:cols-1">
        <div flex="~ col gap-15px">
          <span text="14px black">
            {{ t('home.name') }}
          </span>
          <input :placeholder="t('home.plsEnterName')" class="footerInput">
        </div>
        <div flex="~ col gap-15px">
          <span text="14px black">
            {{ t('home.phone') }}
          </span>
          <input :placeholder="t('home.plsEnterPhone')" class="footerInput">
        </div>
        <div flex="~ col gap-15px">
          <span text="14px black">
            {{ t('home.mailBox') }}
          </span>
          <input :placeholder="t('home.plsEnterMailBox')" class="footerInput">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box1 {
  background-image: url('/PC/banner.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.footerInput {
  @apply w-full px-4 py-3 border placeholder:text-slate-400 rounded-md outline-none focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100;
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
