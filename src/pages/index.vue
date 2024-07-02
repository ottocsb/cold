<script setup lang="ts">
defineOptions({
  name: 'IndexPage'
})
</script>

<template>
  <div>
    <div h-150 text-white flex="~ justify-center col" class="pc-px" style="background: url('/PC/banner.png') 0 0 / 100% no-repeat">
      <p text="30px">
        Simplify your cryptocurrency payment experience
      </p>
      <p text="50px">
        Easily accept payments from all over the world.
      </p>
      <p fw-700 text="50px">
        Instant settlement, low fees and
      </p>
      <p fw-700 text="50px">
        extensive asset support
      </p>
    </div>
    <div class="pc-px" mt="150px" h="100" flex space-x="25">
      <div w="50%" style="background: url('/PC/11.png')  no-repeat center;background-size: contain" />
      <div
        w="50%"
        pl="20"
        text="white left"
        flex="~ col"
        justify-center
        style="background: url('/PC/bg2.png')  no-repeat center;background-size: contain"
      >
        <p text="32px" fw="700">
          Safe and reliable
        </p>
        <p text="18px">
          Take advantage of the most advanced encryption technology <br>
          and security protocols to keep your funds safe.
        </p>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
