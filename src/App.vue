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

<style lang="scss">
@import "custom.scss";
  #app {
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    font-family: "PT Sans", sans-serif;
    font-style : normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #fbf7f5;
    min-height: 100vh;
  }

  html {
    overflow-y: scroll;
  }


  .myPadding {
    padding: 5vh 7vh;
  }
  @include media-breakpoint-between(sm, md) {
    .myPadding {
      padding: 7vh 10vh;
    }
  }

  @include media-breakpoint-up(md) {
    .myPadding {
      padding: 7vh 10vh;
    }
  }
  </style>
