<template>
  <div id="app">
    <hamburger-menu></hamburger-menu>
    <router-view />
  </div>
</template>

<script>
import HamburgerMenu from './components/HamburgerMenu.vue';
export default {
  name: 'App',
  components: {
    HamburgerMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
