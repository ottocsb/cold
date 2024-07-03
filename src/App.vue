<script setup lang = "ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Coin Route Hub'
})
// 实时检查屏幕宽度并跳转到不同的页面
// const { width } = useWindowSize()
//
// watchEffect(() => {
//   console.log(width.value)
// })
</script>

<template>
  <RouterView />
</template>
