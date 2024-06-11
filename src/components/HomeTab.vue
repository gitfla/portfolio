<template>
  <div class="homeTab text-primary">
    <h3>Software Engineer <br/>Creative Technologist <br/>Web Developer</h3>
  </div>

</template>

<script>

export default {
  name: 'HomeTab',
  components: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .homeTab {
    display: flex;
    justify-content: flex-end;
    align-items:flex-end;
    height: 50vh;
    flex: 1;
    text-align: end;
  }

  h3 {
    font-style: italic;
  }

</style>
