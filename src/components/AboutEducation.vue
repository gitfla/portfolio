<template>
  <div class="aboutEducation">
    <h3 class="text-primary">Education</h3>
    <p class="workTitle"><strong>Computer Science </strong></p>
    <p>Bachelor of Science in Engineering</p>
    <p>University of Michigan -- Ann Arbor</p>
    <p>Class of 2016; Magna cum laude</p>

  </div>
</template>

<script>
export default {
  name: 'AboutEducation',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "custom.scss";
  
  h3 {
    margin: 0px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  p {
    margin: 0px;
  }

  .workTitle {
    margin: 30px 0px 0px 0px;
    color: theme-color("primary");
  }

  .educationTitle {
    margin-top:14px;
  }

</style>
