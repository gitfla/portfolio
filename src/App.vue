<template>
  <div class="myPadding">
    <MyName/>
    <MyTabs/>
  </div>
</template>


<script>
import MyName from './components/MyName.vue';
import MyTabs from './components/MyTabs.vue';


export default {
  name: 'App',
  components: {
    MyName,
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
  padding: 10vh;
}
</style>
