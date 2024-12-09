<script setup lang = "ts">
const route = useRoute()
const router = useRouter()
const id = route.params?.id
const type = route.params?.type
const { t } = useI18n()

const { data: detailData, runAsync: devRun } = fetchDevelopDetail()
const { data: helpData, runAsync: helpRun } = fetchHelpCenterDetail()

onMounted(() => {
  if (type === 'help') {
    helpRun(id)
  }
  else {
    devRun(id)
  }
})

const detail = computed(() => {
  if (type === 'help') {
    if (helpData.value?.data.code === 0) {
      return helpData.value?.data.data
    }
    else {
      return {}
    }
  }
  else {
    if (detailData.value?.data.code === 0) {
      return detailData.value?.data.data
    }
    else {
      return {}
    }
  }
})
</script>

<template>
  <div class="pc-px" mt="40px">
    <div class="pc-pl">
      <div text="14px" text-gray>
        {{ t('head.home') }} > <RouterLink :to="type === 'help' ? '/help' : '/develop/document'">
          {{ type === 'help' ? t('head.helpCenter') : t('head.devDocument') }}
        </RouterLink> > <span text-black fw-600>{{ detail.title }}</span>
      </div>
      <div mt="50px" class="detail-box">
        <h2 text="24px" fw-600>
          {{ detail.title }}
        </h2>
        <h4 text="14px" mt="30px" text-coolGray>
          2024-05-08 12:20:00
        </h4>
        <div text="16px" fw-400 mt="40px">
          {{ detail.content }}
        </div>
        <!--        <div text="16px" fw-400 mt="40px"> -->
        <!--          According to the relevant provisions of -->
        <!--          the anti-money laundering law, each -->
        <!--          exchange needs to be controlled by price, -->
        <!--          which needs to be completed -->
        <!--          - to the transaction can be withdrawn, to -->
        <!--          avoid users using the exchange to launder -->
        <!--          money! For example, charge 1000 coins,0 -->
        <!--          transaction amount -->
        <!--          needs to reach the relevant stipulated -->
        <!--          amount! On the basis ofThe relevant -->
        <!--          provisions of the anti-money laundering -->
        <!--          law, the exchanges need to be -->
        <!--          controlled by price, need to be completed -->
        <!--          - set to the transaction before withdrawal, -->
        <!--          to avoid users using the exchange to -->
        <!--          launder money! -->
        <!--        </div> -->
        <!--        <div class="detail-img" h="254px" w="full" mt="20px" style="background: url('/PC/detail.png') center no-repeat #303030;background-size:296px 177px;" /> -->
        <!--        <div text="16px" fw-400 mt="40px"> -->
        <!--          According to the relevant provisions of the anti-money laundering law, each exchange needs to be controlled by price, which needs to be completed -->
        <!--          - to the transaction can be withdrawn, to avoid users using the exchange to launder money! For example, charge 1000 coins,0 transaction amount -->
        <!--          needs to reach the relevant stipulated amount! On the basis ofThe relevant provisions of the anti-money laundering law, the exchanges need to be -->
        <!--          controlled by price, need to be completed - set to the transaction before withdrawal, to avoid users using the exchange to launder money! For -->
        <!--          example, charge 1000 coins,0 transaction amount needs to reach the relevant stipulated amount! -->
        <!--        </div> -->
      </div>
      <div text="16px" mt="30px" mb="45px" class="detail-re" @click="router.back">
        <span>{{ t('detail.backText') }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pc-pl {
  padding: 0 10vw;
}
.detail-box {
  padding: 40px 30px;
  background: #fffaf8fa;
}
.detail-re {
  padding: 0 30px;
}
.detail-re span {
  text-decoration-line: underline;
}
.detail-img {
  display: block;
}
/* mobile style */
@media (max-width: 1024px) {
  .box1 {
    width: 100%;
  }
  .box1 input {
    width: 100%;
  }
  .pc-pl {
    padding: 0;
  }
  .pc-px {
    padding: 0 3vw;
  }
  .detail-img {
    display: none;
  }
  .detail-box {
    padding: 30px 10px;
  }
}
</style>
