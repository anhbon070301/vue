<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import Header from './components/Header.vue'
import tinhToan from './components/tinhToan.vue'
</script>

<script>

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <h1>Hello Vue 2</h1>
    </div>
    <router-link to="/tinhToanVue"><button>Bài 2 + 3</button></router-link>
    <router-link to="/HeaderVue"><button>Bài 2 </button></router-link>
  </header>

  <main>
    <router-view></router-view>
  </main>
  

</template>

<style scoped>

</style>

