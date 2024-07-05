<script setup lang = "ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'DevelopDocument'
})
const router = useRouter()
const Title = ref('Welcome! Check out the tutorial')
const activeIndex = ref<number | null>(null)
const currentIndex = ref<number | null>(1)

const toggleContent = (index: number) => {
  const prevIndex = activeIndex.value
  activeIndex.value = activeIndex.value === index ? null : index
  currentIndex.value = 1
  // 添加动画过渡
  if (prevIndex !== null) {
    const prevElement = document.querySelector(`#content-${prevIndex}`)
    const currElement = document.querySelector(`#content-${index}`)
    // 添加css过渡类名
    prevElement?.classList.add('fade-out')
    currElement?.classList.add('fade-in')
    // 在过渡结束后移除过渡类名
    prevElement?.addEventListener('transitionend', () => {
      prevElement.classList.remove('fade-out')
    }, { once: true })
    currElement?.addEventListener('transitionend', () => {
      currElement.classList.remove('fade-in')
    }, { once: true })
  }
}
const handleChildClick = (title: string, index: number) => {
  if (window.innerWidth <= 1024) {
    router.push(`/DeveDetail?title=${encodeURIComponent(title)}&type=develop a document`)
  }
  else {
    Title.value = title
    currentIndex.value = index
  }
}
</script>

<template>
  <div class="pc-px" mt="71px">
    <div class="dev-left">
      <ul>
        <li id="content-1" :class="activeIndex == 1 ? 'li-active' : ''">
          <div
            class="help-down"
            :h="17.5"
            w="full"
            fw-600
            flex="~ justify-center col"
            text="20px"
            @click="toggleContent(1)"
          >
            Welcome! Check out the tutorial
          </div>
          <div v-if="activeIndex === 1">
            <div
              class="drop-width"
              :class="currentIndex === 1 ? 'drop-active' : ''"
              w="full"
              h="12.5"
              text="16px"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('System', 1)"
            >
              System
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 2 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('Update', 2)"
            >
              Update
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 3 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('What are frozen assets?', 3)"
            >
              What are frozen assets?
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 4 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('Update', 4)"
            >
              Update
            </div>
          </div>
        </li>
        <li id="content-2" mt="10px" :class="activeIndex == 2 ? 'li-active' : ''">
          <div
            class="help-down"
            :h="17.5"
            w="full"
            fw-600
            flex="~ justify-center col"
            text="20px"
            @click="toggleContent(2)"
          >
            Basics
          </div>
          <div v-if="activeIndex === 2">
            <div
              class="drop-width"
              :class="currentIndex === 1 ? 'drop-active' : ''"
              w="full"
              h="12.5"
              text="16px"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('System', 1)"
            >
              System
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 2 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('Update', 2)"
            >
              Update
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 3 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('What are frozen assets?', 3)"
            >
              What are frozen assets?
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 4 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('Update', 4)"
            >
              Update
            </div>
          </div>
        </li>
        <li id="content-3" mt="10px" :class="activeIndex == 3 ? 'li-active' : ''">
          <div
            class="help-down"
            :h="17.5"
            w="full"
            fw-600
            flex="~ justify-center col"
            text="20px"
            @click="toggleContent(3)"
          >
            Welcome! Check out the tutorial
          </div>
          <div v-if="activeIndex === 3">
            <div
              class="drop-width"
              :class="currentIndex === 1 ? 'drop-active' : ''"
              w="full"
              h="12.5"
              text="16px"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('System', 1)"
            >
              System
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 2 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('Update', 2)"
            >
              Update
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 3 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('What are frozen assets?', 3)"
            >
              What are frozen assets?
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 4 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('Update', 4)"
            >
              Update
            </div>
          </div>
        </li>
        <li id="content-4" mt="10px" :class="activeIndex == 4 ? 'li-active' : ''">
          <div
            class="help-down"
            :h="17.5"
            w="full"
            fw-600
            flex="~ justify-center col"
            text="20px"
            @click="toggleContent(4)"
          >
            What are frozen assets?
          </div>
          <div v-if="activeIndex === 4">
            <div
              class="drop-width"
              :class="currentIndex === 1 ? 'drop-active' : ''"
              w="full"
              h="12.5"
              text="16px"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('System', 1)"
            >
              System
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 2 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('Update', 2)"
            >
              Update
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 3 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('What are frozen assets?', 3)"
            >
              What are frozen assets?
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 4 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('Update', 4)"
            >
              Update
            </div>
          </div>
        </li>
        <li id="content-5" mt="10px" :class="activeIndex == 5 ? 'li-active' : ''">
          <div
            class="help-down"
            :h="17.5"
            w="full"
            fw-600
            flex="~ justify-center col"
            text="20px"
            @click="toggleContent(5)"
          >
            Welcome! Check out the tutorial
          </div>
          <div v-if="activeIndex === 5">
            <div
              class="drop-width"
              :class="currentIndex === 1 ? 'drop-active' : ''"
              w="full"
              h="12.5"
              text="16px"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('System', 1)"
            >
              System
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 2 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('Update', 2)"
            >
              Update
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 3 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('What are frozen assets?', 3)"
            >
              What are frozen assets?
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 4 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('Update', 4)"
            >
              Update
            </div>
          </div>
        </li>
        <li id="content-6" mt="10px" :class="activeIndex == 6 ? 'li-active' : ''">
          <div
            class="help-down"
            :h="17.5"
            w="full"
            fw-600
            flex="~ justify-center col"
            text="20px"
            @click="toggleContent(6)"
          >
            What are frozen assets?
          </div>
          <div v-if="activeIndex === 6">
            <div
              class="drop-width"
              :class="currentIndex === 1 ? 'drop-active' : ''"
              w="full"
              h="12.5"
              text="16px"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('System', 1)"
            >
              System
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 2 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('Update', 2)"
            >
              Update
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 3 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('What are frozen assets?', 3)"
            >
              What are frozen assets?
            </div>
            <div
              class="drop-width"
              :class="currentIndex === 4 ? 'drop-active' : ''"
              text="16px"
              h="12.5"
              fw-400
              flex="~ justify-center col"
              @click="handleChildClick('Update', 4)"
            >
              Update
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="currentIndex" class="dev-right">
      <h2 text="24px" fw-600>
        {{ Title }}
      </h2>
      <h3 text="20px" fw-400 mt="10px">
        Have Alipay enterprise account, complete the platform.
      </h3>
      <div text="16px" fw-400 mt="40px">
        According to the relevant provisions of the anti-money laundering law, each exchange needs to be controlled by price, which needs to be completed -
        to the transaction can be withdrawn, to avoid users using the exchange to launder money! For example, charge 1000 coins,0 transaction amount needs
        to reach the relevant stipulated amount! On the basis ofThe relevant provisions of the anti-money laundering law, the exchanges need to be controlled
        by price, need to be completed - set to the transaction before withdrawal, to avoid users using the exchange to launder money!For example, charge
        1000 coins,0<br>
        transaction amount needs to reach the relevant stipulated amount!
      </div>
      <div h="254px" w="full" mt="20px" style="background: #303030;" />
      <h2 text="24px" fw-600 mt="40px">
        {{ Title }}
      </h2>
      <h3 text="20px" fw-400 mt="10px">
        Have Alipay enterprise account, complete the platform.
      </h3>
      <div text="16px" fw-400 mt="40px">
        According to the relevant provisions of the anti-money laundering law, each exchange needs to be controlled by price, which needs to be completed -
        to the transaction can be withdrawn, to avoid users using the exchange to launder money! For example, charge 1000 coins,0 transaction amount needs
        to reach the relevant stipulated amount! On the basis ofThe relevant provisions of the anti-money laundering law, the exchanges need to be controlled
        by price, need to be completed - set to the transaction before withdrawal, to avoid users using the exchange to launder money!For example, charge
        1000 coins,0<br>
        transaction amount needs to reach the relevant stipulated amount!
      </div>
    </div>
  </div>
</template>

<style scoped>
.dev-left {
  width: 21.35461667vw;
}
.dev-left > ul > li {
  width: 100%;
}
.li-active {
  border: 1px solid #000000;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
}
.down-drop {
  width: 100%;
  background: #faf8fa;
  border-radius: 10px;
  border: 1px solid #000000;
  padding: 25px 0;
}
.drop-title {
  padding-left: 25px;
  background: url('/PC/drop.png') 96% 40% no-repeat;
  background-size: 12px 6px;
  cursor: pointer;
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
  width: calc(100% - 24.35461667vw);
  padding-left: 3vw;
  display: block;
}
.help-down {
  background: #faf8fa;
  border-radius: 10px;
  padding-left: 27px;
  border: 1px solid #faf8fa;
  transition: 0.5s ease-in-out;
  background: url('/PC/more.png') 96% 50% no-repeat;
  background-size: 6px 12px;
  cursor: pointer;
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
/* 移动端样式 */
@media (max-width: 1024px) {
  .pc-pl {
    padding: 0;
  }
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
