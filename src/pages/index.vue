<script setup lang="ts">
defineOptions({
  name: 'IndexPage'
})
</script>

<template>
  <div pb="120px">
    <div class="box1 pc-px" text-white h="150" flex="~ justify-center col gap-2">
      <div text="30px <lg:20px">
        Simplify your cryptocurrency payment experience
      </div>
      <div fw="light" text="50px  <lg:24px">
        Easily accept payments from all over the world.
      </div>
      <div fw-700 text="50px  <lg:28px">
        Instant settlement, low fees and <br class="block <lg:hidden"> extensive asset support
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
            Safe and reliable
          </p>
          <p text="18px left" w-full>
            Take advantage of the most advanced encryption technology <br>
            and security protocols to keep your funds safe.
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
            Low commission
          </p>
          <p text="18px left" w-full>
            We offer competitive low fees to make your payments<br>
            more economical.
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
            Multiple cryptocurrencies supported.
          </p>
          <p text="18px left" w-full>
            Support a variety of mainstream cryptocurrencies to meet the<br>
            payment needs of different users.
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
            Easy to use
          </p>
          <p text="18px left" w-full>
            The easy-to-understand interface and process make it easy for<br>
            you to make cryptocurrency payments.
          </p>
        </div>
      </div>
      <img src="/PC/44.png" class="<lg:row-start-1 <lg:row-end-2" alt="is bg">
    </div>
    <div mt-100px p="14 <lg:8" text="white center" flex style="background: url('/PC/bg3.png') no-repeat center;background-size: cover">
      <div ma>
        <span fw="700" text="50px <lg:24px">
          Whether you are a merchant or an individual user,
          we offer a one-stop solution for your payment needs
        </span>
        <br><br>
        <span text="30px <lg:15px">
          Integrate encrypted payments with just a few lines of code
        </span>
      </div>
    </div>
    <div class="pc-px mt-25" flex="~ col gap-10">
      <div fw="700" text="20px">
        We can help you choose the perfect payment solution and answer any questions about our products.
      </div>
      <div text="16px black">
        We'll wait for you here.<br>
        <span text="#757575">Please fill out the form and we will contact you later.</span>
      </div>
      <div grid="~ cols-3 gap-5" class="<lg:cols-1">
        <div flex="~ col gap-15px">
          <span text="14px black">
            Name
          </span>
          <input placeholder="Please enter your name" class="footerInput">
        </div>
        <div flex="~ col gap-15px">
          <span text="14px black">
            Phone
          </span>
          <input placeholder="Please enter your mobile number" class="footerInput">
        </div>
        <div flex="~ col gap-15px">
          <span text="14px black">
            Mailbox
          </span>
          <input placeholder="Please enter your email address" class="footerInput">
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
