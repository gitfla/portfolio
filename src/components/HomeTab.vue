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
<style lang="scss" scoped>
  @import "custom.scss";

  .homeTab {
    display: flex;
    justify-content: flex-end;
    align-items:flex-end;
    height: 30vh;
    flex: 1;
    text-align: end;
  }
  @include media-breakpoint-between(sm, md) {
    .homeTab {
      height: 50vh;
    }
  }

  @include media-breakpoint-up(md) {
    .homeTab {
      height: 50vh;
    }
  }

  h3 {
    font-style: italic;
  }

</style>
