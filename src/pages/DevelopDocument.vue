<script setup lang = "ts">
import { ref } from 'vue'
defineOptions({
  name: 'DevelopDocument'
})
const showContent = ref(true)
function toggleContent() {
  showContent.value = !showContent.value
}
</script>

<template>
  <div class="pc-px" mt="71px">
      <div class="dev-left">
        <ul>
          <li>
            <RouterLink to="/DeveDetail?title=Welcome! Check out the tutorial?&type=develop a document">
            <div class="help-down" h="17.5"  w="full" fw-600 flex="~ justify-center col" text="20px">Welcome! Check out the tutorial</div>
            </RouterLink>
            <div class="down-drop" mt="10px">
                <div text="20px"  fw-600  w="full" class="drop-title" @click="toggleContent">Basics</div>
                <div class="drop-width" w="full" h="12.5" text="16px" fw-400 flex="~ justify-center col"  v-if="showContent">System</div>
                <div class="drop-width drop-active" text="16px" h="12.5" fw-400 flex="~ justify-center col"  v-if="showContent">Update</div>
                <div class="drop-width" text="16px" h="12.5" fw-400 flex="~ justify-center col"  v-if="showContent">What are frozen assets?</div>
                <div class="drop-width" text="16px" h="12.5" fw-400 flex="~ justify-center col"  v-if="showContent">Update</div>
            </div>
          </li>
          <li mt="10px">
            <RouterLink to="/DeveDetail?title=Welcome! Check out the tutorial?&type=develop a document">
              <div class="help-down" h="17.5"  w="full" fw-600 flex="~ justify-center col" text="20px">Welcome! Check out the tutorial</div>
            </RouterLink>
          </li>
          <li mt="10px">
            <RouterLink to="/DeveDetail?title=What are frozen assets?&type=develop a document">
            <div class="help-down" h="17.5"  w="full" fw-600 flex="~ justify-center col" text="20px">What are frozen assets?</div>
          </RouterLink>
          </li>
          <li mt="10px">
            <RouterLink to="/DeveDetail?title=Welcome! Check out the tutorial?&type=develop a document">
            <div class="help-down" h="17.5"  w="full" fw-600 flex="~ justify-center col" text="20px">Welcome! Check out the tutorial</div>
          </RouterLink>
          </li>

          <li mt="10px">
            <RouterLink to="/DeveDetail?title=What are frozen assets?&type=develop a document">
            <div class="help-down" h="17.5"  w="full" fw-600 flex="~ justify-center col" text="20px">What are frozen assets?</div>
          </RouterLink>
          </li>

        </ul>
      </div>
      <div class="dev-right">
        <h2 text="24px" fw-600>Precondition</h2>
        <h3 text="20px" fw-400 mt="10px">Have Alipay enterprise account, complete the platform. </h3>
        <div text="16px" fw-400 mt="40px">
          According to the relevant provisions of the anti-money laundering law, each exchange needs to be controlled by price, which needs to be completed -
to the transaction can be withdrawn, to avoid users using the exchange to launder money! For example, charge 1000 coins,0 transaction amount needs
to reach the relevant stipulated amount! On the basis ofThe relevant provisions of the anti-money laundering law, the exchanges need to be controlled
by price, need to be completed - set to the transaction before withdrawal, to avoid users using the exchange to launder money!For example, charge
1000 coins,0<br>
transaction amount needs to reach the relevant stipulated amount!
        </div>
        <div h="254px" w="full"  mt="20px" style="background: #303030;"></div>
        <h2 text="24px" fw-600 mt="40px">Precondition</h2>
        <h3 text="20px" fw-400 mt="10px">Have Alipay enterprise account, complete the platform. </h3>
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

.dev-left{
  width:21.35461667vw;
}
.dev-left > ul >li{
  width: 100%;
}
.down-drop{
  width: 100%;
  background: #FAF8FA;
  border-radius: 10px;
  border: 1px solid #000000;
  padding:25px 0;
}
.drop-title{
  padding-left: 25px;
  background: url("/PC/drop.png") 96% 40% no-repeat;
  background-size:12px 6px;
  cursor: pointer;
}
.drop-width{
padding-left:60px;
transition: .5s ease-in-out;
cursor: pointer;
}
.drop-width:hover{
  background: #E7E7E7;
}
.drop-active{
  background: #E7E7E7;
}
.dev-right{
  width: calc(100% - 24.35461667vw);
  padding-left: 3vw;
}
.help-down{
  background: #FAF8FA;
  border-radius: 10px;
  padding-left:27px;
  border: 1px solid #FAF8FA;
  transition: 0.5s ease-in-out;
  background: url("/PC/more.png") 96% 50% no-repeat;
  background-size:6px 12px;
  cursor: pointer;
}
.help-down:hover{
  border: 1px solid #000000;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1),
              0 0 10px rgba(0, 0, 0, 0.2),
              0 0 15px rgba(0, 0, 0, 0.3);
}
.pc-px{
  display: flex;

}
/* 移动端样式 */
@media (max-width: 1024px) {

  .pc-pl{
    padding: 0;
  }
  .pc-px{
    padding: 0 3vw;
    display: grid;

  }

.dev-left{
  width:100%;
}
.help-down{
  height: 100px;
}
.dev-right{

  width:100%;
}
}
</style>
