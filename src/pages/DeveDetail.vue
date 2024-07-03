<script setup lang = "ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const title = route.query.title
const type = route.query.type
</script>

<template>
<div class="pc-px" mt="40px">
  <div class="pc-pl">
  <div text="14px" text-gray>Home > <RouterLink :to="type=='Help Center'?'/HelpCenter':'/DevelopDocument'">{{type}}</RouterLink> > <span fw-600 text-black>{{title}}</span></div>
  <div mt="50px" class="detail-box">
    <h2 text="24px" fw-600>{{title}}</h2>
    <h4 text="14px" mt="30px" text-coolGray>2024-05-08 12:20:00</h4>
    <div text="16px" fw-400 mt="40px">
      According to the relevant provisions of
the anti-money laundering law, each
exchange needs to be controlled by price,
which needs to be completed
- to the transaction can be withdrawn, to
avoid users using the exchange to launder
money! For example, charge 1000 coins,0
transaction amount
needs to reach the relevant stipulated
amount! On the basis ofThe relevant
provisions of the anti-money laundering
law, the exchanges need to be
controlled by price, need to be completed
- set to the transaction before withdrawal,
to avoid users using the exchange to
launder money!
    </div>
    <div class="detail-img" h="254px" w="full"  mt="20px" style="background: url('PC/detail.png') center no-repeat #303030;background-size:296px 177px;"></div>
    <div text="16px" fw-400 mt="40px">
      According to the relevant provisions of the anti-money laundering law, each exchange needs to be controlled by price, which needs to be completed
      - to the transaction can be withdrawn, to avoid users using the exchange to launder money! For example, charge 1000 coins,0 transaction amount
      needs to reach the relevant stipulated amount! On the basis ofThe relevant provisions of the anti-money laundering law, the exchanges need to be
      controlled by price, need to be completed - set to the transaction before withdrawal, to avoid users using the exchange to launder money! For
      example, charge 1000 coins,0 transaction amount needs to reach the relevant stipulated amount!
    </div>
  </div>
  <div text="16px" mt="30px" mb="45px" class="detail-re">
    <span>Return to previous page</span>
  </div>
</div>
</div>
</template>

<style scoped>
.pc-pl{
  padding: 0 10vw;
}
.detail-box{
padding:40px 30px;
background: #FFFAF8FA;
}
.detail-box > h2{
  white-space: nowrap;
}
.detail-re{
padding: 0 30px;
}
.detail-re span{
  text-decoration-line: underline;
}
.detail-img{
  display: block;
}
/* 移动端样式 */
@media (max-width: 1024px) {
  .box1 {
    width: 100%;
  }
  .box1 input {
    width: 100%;
  }
  .pc-pl{
    padding: 0;
  }
  .pc-px{
    padding: 0 3vw;
  }
  .detail-img{
    display: none;
  }
  .detail-box{
    padding: 30px 10px;
  }
}
</style>
