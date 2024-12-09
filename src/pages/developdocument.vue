<script setup lang = "ts">
defineOptions({
  name: 'Developdocument'
})

const { data } = fetchDevelopList()
const { data: detailData, runAsync } = fetchDevelopDetail()

const devList = computed(() => {
  if (data.value?.data.code === 0) {
    return data.value?.data.data
  }
  else {
    return []
  }
})

const router = useRouter()
const activeIndex = ref<number | null>(null)
const currentIndex = ref<number | null>(1)

const toggleContent = (index: number) => {
  const prevIndex = activeIndex.value
  activeIndex.value = activeIndex.value === index ? null : index
  currentIndex.value = 1
  //   Add animation transition
  if (prevIndex !== null) {
    const prevElement = document.querySelector(`#content-${prevIndex}`)
    const currElement = document.querySelector(`#content-${index}`)
    //  add css transition class name
    prevElement?.classList.add('fade-out')
    currElement?.classList.add('fade-in')
    // remove transition class name after transition end
    prevElement?.addEventListener('transitionend', () => {
      prevElement.classList.remove('fade-out')
    }, { once: true })
    currElement?.addEventListener('transitionend', () => {
      currElement.classList.remove('fade-in')
    }, { once: true })
  }
}

const detail = computed(() => {
  if (detailData.value?.data.code === 0) {
    return detailData.value?.data.data
  }
  else {
    return {}
  }
})

const handleChildClick = async (child: any, index: number) => {
  if (window.innerWidth <= 1024) {
    router.push(`/detail?id=${encodeURIComponent(child.id)}&type=dev`)
  }
  else {
    await runAsync(child.id)
    currentIndex.value = index
  }
}

onMounted(() => {
  toggleContent(1)
  setTimeout(() => {
    if (window.innerWidth > 1024) {
      handleChildClick(devList.value[0].articles[0], 1)
    }
  }, 1000)
})
</script>

<template>
  <div class="pc-px" mt="71px">
    <div class="dev-left">
      <ul>
        <li
          v-for="(item, index) in devList" :id="`content-${index + 1}`"
          :key="index"
          :class="[activeIndex === index + 1 ? 'li-active' : '', index !== 0 ? 'mt-10px' : '']"
        >
          <div
            class="help-down"
            h="17"
            w="full"
            fw-600
            flex="~ justify-center col"
            text="20px"
            @click="toggleContent(index + 1)"
          >
            {{ item.category }}
          </div>
          <div v-if="activeIndex === index + 1">
            <div
              v-for="(child, childIndex) in item.articles"
              :key="childIndex"
              class="drop-width"
              :class="[
                currentIndex === childIndex + 1 ? 'drop-active' : '',
                childIndex + 1 === item.articles.length ? 'b-rd-b-10px' : '']"
              w="full"
              h="12.5"
              text="16px"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick(child, childIndex + 1)"
            >
              {{ child.title }}
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="currentIndex" class="dev-right">
      <h2 text="24px" fw-600>
        {{ detail.title }}
      </h2>
      <div text="16px" fw-400 mt="40px">
        {{ detail.content }}
      </div>
      <!--      <h3 text="20px" fw-400 mt="10px"> -->
      <!--        Have Alipay enterprise account, complete the platform. -->
      <!--      </h3> -->
      <!--      <div text="16px" fw-400 mt="40px"> -->
      <!--        According to the relevant provisions of the anti-money laundering law, each exchange needs to be controlled by price, which needs to be completed - -->
      <!--        to the transaction can be withdrawn, to avoid users using the exchange to launder money! For example, charge 1000 coins,0 transaction amount needs -->
      <!--        to reach the relevant stipulated amount! On the basis ofThe relevant provisions of the anti-money laundering law, the exchanges need to be controlled -->
      <!--        by price, need to be completed - set to the transaction before withdrawal, to avoid users using the exchange to launder money!For example, charge -->
      <!--        1000 coins,0<br> -->
      <!--        transaction amount needs to reach the relevant stipulated amount! -->
      <!--      </div> -->
      <!--      <div h="254px" w="full" mt="20px" style="background: #303030;" /> -->
      <!--      <h2 text="24px" fw-600 mt="40px"> -->
      <!--        {{ Title }} -->
      <!--      </h2> -->
      <!--      <h3 text="20px" fw-400 mt="10px"> -->
      <!--        Have Alipay enterprise account, complete the platform. -->
      <!--      </h3> -->
      <!--      <div text="16px" fw-400 mt="40px"> -->
      <!--        According to the relevant provisions of the anti-money laundering law, each exchange needs to be controlled by price, which needs to be completed - -->
      <!--        to the transaction can be withdrawn, to avoid users using the exchange to launder money! For example, charge 1000 coins,0 transaction amount needs -->
      <!--        to reach the relevant stipulated amount! On the basis ofThe relevant provisions of the anti-money laundering law, the exchanges need to be controlled -->
      <!--        by price, need to be completed - set to the transaction before withdrawal, to avoid users using the exchange to launder money!For example, charge -->
      <!--        1000 coins,0<br> -->
      <!--        transaction amount needs to reach the relevant stipulated amount! -->
      <!--      </div> -->
    </div>
  </div>
</template>

<style scoped>
.dev-left {
  width: 21vw;
}
.dev-left > ul > li {
  width: 100%;
}
.li-active {
  border: 1px solid #000000;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
}
.drop-width {
  padding-left: 60px;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
.drop-width:hover {
  font-weight: bold;
}
.drop-active {
  background: #e7e7e7;
}
.dev-right {
  width: calc(100% - 24vw);
  padding-left: 3vw;
  display: block;
  padding-bottom: 5vh;
}
.help-down {
  background: #faf8fa;
  border-radius: 10px;
  padding: 0 27px;
  border: 1px solid #faf8fa;
  transition: 0.5s ease-in-out;
  background: url('/PC/more.png') 96% 50% no-repeat;
  background-size: 6px 12px;
  cursor: pointer;
  box-sizing: border-box;
}
.help-down:hover {
  border: 1px solid #000000;
  box-shadow:
    0 0 5px rgba(0, 0, 0, 0.1),
    0 0 10px rgba(0, 0, 0, 0.2),
    0 0 15px rgba(0, 0, 0, 0.3);
}
.li-active > .help-down {
  border: 0;
}
.li-active > .help-down:hover {
  border: 0;
  box-shadow: initial;
}
.pc-px {
  display: flex;
}
.fade-out {
  opacity: 1;
  transition: opacity 0.3s ease-out;
}

.fade-in {
  opacity: 0;
  transition: opacity 0.3s ease-in;
}

/* mobile style */
@media (max-width: 1024px) {
  .pc-px {
    padding: 0 3vw;
    display: grid;
  }

  .dev-left {
    width: 100%;
  }
  .help-down {
    height: 100px;
  }
  .dev-right {
    width: 100%;
    display: none;
  }
}
</style>
