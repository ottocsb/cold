<script setup lang = "ts">
defineOptions({
  name: 'helpcenter'
})

const routeList = [
  {
    title: 'Welcome! Check out the tutorial',
    to: '/DeveDetail?title=Welcome! Check out the tutorial?&type=Help Center'
  },
  {
    title: 'What are frozen assets?',
    to: '/DeveDetail?title=What are frozen assets?&type=Help Center'
  },
  {
    title: 'Welcome! Check out the tutorial',
    to: '/DeveDetail?title=Welcome! Check out the tutorial?&type=Help Center'
  },
  {
    title: 'What are frozen assets?',
    to: '/DeveDetail?title=What are frozen assets?&type=Help Center'
  },
  {
    title: 'Welcome! Check out the tutorial',
    to: '/DeveDetail?title=Welcome! Check out the tutorial?&type=Help Center'
  },
  {
    title: 'What are frozen assets?',
    to: '/DeveDetail?title=What are frozen assets?&type=Help Center'
  }

]
</script>

<template>
  <div class="pc-px">
    <div class="pc-pl">
      <div mt="71px" text="22px <lg:20px" fw-700>
        Welcome to the help Center
      </div>
      <div class="box1" mt="37px" h="44px" w="440px" style="">
        <input type="text" placeholder="Please enter your question" w="440px" h="44px" class="border">
      </div>
      <div class="" mt="70px" mb="98px">
        <RouterLink v-for="(item, index) in routeList" :key="index" :to="item.to">
          <div class="help-down" mb="9px" h="25" w="full" fw-400 flex="~ justify-center col" text="20px">
            {{ item.title }}
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
input,
textarea,
button,
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  border: none;
  outline: none;
  font-family: inherit;
  color: inherit;
  padding: 0;
  margin: 0;
}
.pc-pl {
  padding: 0 10vw;
}
.border {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: url('/PC/search.png') 98% 50% no-repeat;
  background-size: 14px 14px;
  padding-left: 20px;
  transition: 0.5s ease-in-out;
}
.border:focus {
  border: 1px solid rgba(0, 0, 0, 0.7);
  box-shadow:
    0 0 5px rgba(0, 0, 0, 0.1),
    0 0 10px rgba(0, 0, 0, 0.2),
    0 0 15px rgba(0, 0, 0, 0.3);
}
.help-down {
  background: #faf8fa;
  border-radius: 10px;
  padding-left: 27px;
  border: 1px solid #faf8fa;
  transition: 0.5s ease-in-out;
}
.help-down:hover {
  border: 1px solid #000000;
  box-shadow:
    0 0 5px rgba(0, 0, 0, 0.1),
    0 0 10px rgba(0, 0, 0, 0.2),
    0 0 15px rgba(0, 0, 0, 0.3);
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
}
</style>
