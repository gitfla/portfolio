<template>
  <div class="aboutTab">
    <div class="d-flex bd-highlight mb-3 justify-content-around first-row">
      <AboutExperience class="p-2 bd-highlight"/>
      <AboutEducation class=" p-2 bd-highlight"/>
    </div>
    <div class="d-flex bd-highlight mb-3 justify-content-around">
      <div class=" p-2 bd-highlight"/>
      <AboutSkills class=" p-2 bd-highlight"/>
    </div>
  </div>

</template>

<script>
import AboutExperience from './AboutExperience';
import AboutSkills from './AboutSkills';
import AboutEducation from './AboutEducation';

export default {
  name: 'AboutTab',
  components: {
    AboutExperience,
    AboutSkills,
    AboutEducation
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .aboutTab {

  }

  .container {
    padding-left: 0px;
    padding-right: 0px;
  }

  .first-row {
    margin-bottom: 80px!important;
    margin-top: 6px!important;
  }
</style>
