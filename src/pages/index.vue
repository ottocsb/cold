<script setup lang="ts">
defineOptions({
  name: 'IndexPage'
})
</script>

<template>
  <div pb="120px">
    <div class="box1 pc-px" text-white h="150" w="full" flex="~ justify-center col" style="">
      <div text="30px <lg:24px">
        Simplify your cryptocurrency payment experience
      </div>
      <div text="50px  <lg:40px">
        Easily accept payments from all over the world.
      </div>
      <div fw-700 text="50px  <lg:24px">
        Instant settlement, low fees and
      </div>
      <div fw-700 text="50px  <lg:24px">
        extensive asset support
      </div>
    </div>
    <div class="pc-px" mt="150px" h="100" grid="~ cols-2" space-x="25">
      <div style="background: url('/PC/11.png')  no-repeat center;background-size: contain" />
      <div
        text="white"
        flex="~ col"
        relative
      >
        <img z="-10" src="/PC/bg2.png" alt="is bg" absolute left-1 h-full w-full>
        <div ma>
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
    <div class="pc-px" mt="100px" h="100" grid="~ cols-2" space-x="25">
      <div
        text="white"
        flex="~ col"
        relative
      >
        <img z="-10" src="/PC/bg2.png" alt="is bg" absolute left-1 h-full w-full>
        <div ma>
          <p text="32px left" fw="700" w-full>
            Low commission
          </p>
          <p text="18px left" w-full>
            We offer competitive low fees to make your payments<br>
            more economical.
          </p>
        </div>
      </div>
      <div style="background: url('/PC/22.png')  no-repeat center;background-size: contain" />
    </div>
    <div class="pc-px" mt="150px" h="100" grid="~ cols-2" space-x="25">
      <div style="background: url('/PC/33.png')  no-repeat center;background-size: contain" />
      <div
        text="white"
        flex="~ col"
        relative justify-center
      >
        <img z="-10" src="/PC/bg2.png" alt="is bg" absolute left-1 h-full w-full>
        <div ma>
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
    <div class="pc-px" mt="100px" h="100" grid="~ cols-2" space-x="25">
      <div
        text="white"
        flex="~ col"
        relative
      >
        <img z="-10" src="/PC/bg2.png" alt="is bg" absolute left-1 h-full w-full>
        <div ma>
          <p text="32px left" fw="700" w-full>
            Easy to use
          </p>
          <p text="18px left" w-full>
            The easy-to-understand interface and process make it easy for<br>
            you to make cryptocurrency payments.
          </p>
        </div>
      </div>
      <div style="background: url('/PC/44.png')  no-repeat center;background-size: contain" />
    </div>
    <div mt-100px h="420px" text="white center" flex style="background: url('/PC/bg3.png') no-repeat center;background-size: cover">
      <div ma>
        <p fw="700" text="50px">
          Whether you are a merchant or an individual user,<br>
          we offer a one-stop solution for your payment needs
        </p>
        <br>
        <p text="30px">
          Integrate encrypted payments with just a few lines of code
        </p>
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
</style>

<route lang="yaml">
meta:
  layout: default
</route>
