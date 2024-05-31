<template>
  <div class="aboutExperience">
    <h3 class="experienceTitle">Experience</h3>
    <p class="workTitle"><strong>Google - Software Engineer </strong>(2016 - 2021)</p>
    <p>Digital Wellbeing - Android</p>
    <p>Kaggle - Web Development</p>
    <p>GCP Dataflow - Data Processing</p>

    <p class="workTitle"><strong>Freelance - Software Engineer </strong>(2021 - present)</p>
    <p>Interactive technological installations</p>

    <p class="workTitle"><strong>Tech Education - Teacher</strong> (2021 - present)</p>
    <p>Self-developed programming course</p>
    <p>Technology class for teenagers</p>
  </div>
</template>

<script>
export default {
  name: 'AboutExperience',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin:0px;
  color: purple;
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

strong {
  color: purple;
}

.workTitle {
  margin: 30px 0px 0px 0px;
}

</style>
