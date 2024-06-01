<template>
  <div class="aboutTab">
    <div class="d-flex bd-highlight mb-3 justify-content-between first-row">
      <AboutExperience class="bd-highlight"/>
      <AboutEducation class=" bd-highlight"/>
    </div>
    <div class="d-flex bd-highlight mb-3 justify-content-between">
      <AboutLanguages class=" bd-highlight"/>
      <AboutSkills class=" bd-highlight"/>
    </div>
  </div>

</template>

<script>
import AboutExperience from './AboutExperience';
import AboutSkills from './AboutSkills';
import AboutEducation from './AboutEducation';
import AboutLanguages from './AboutLanguages';

export default {
  name: 'AboutTab',
  components: {
    AboutExperience,
    AboutSkills,
    AboutEducation,
    AboutLanguages
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    padding-left: 0px;
    padding-right: 0px;
  }

  .first-row {
    margin-bottom: 80px!important;
    margin-top: 6px!important;
  }
</style>
