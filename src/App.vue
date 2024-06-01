<template>
  <div class="myPadding">
    <MyTabs/>
  </div>
</template>


<script>
import MyTabs from './components/MyTabs.vue';


export default {
  name: 'App',
  components: {
    MyTabs
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
  min-height: 100vh;
}


.myPadding {
  padding: 7vh 10vh;
}
</style>
