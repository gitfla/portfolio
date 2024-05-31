<template>
    <MyBorder/>
</template>


<script>
import MyBorder from './components/MyBorder.vue';

export default {
  name: 'App',
  components: {
    MyBorder,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #fbf7f5;
  height: 100vh;
}

</style>
