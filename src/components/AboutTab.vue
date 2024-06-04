<template>
  <div class="aboutTab container">
    <div class="row">
      <div class="col">
        <AboutExperience/>
        <div class="spacing"/>
        <AboutSkills/>
      </div>
      <div class="col">
        <AboutEducation/>
        <div class="spacing"/>
        <AboutLanguages/>
      </div>
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
    margin-left:0px;
  }

  .first-row {
    margin-bottom: 80px!important;
    margin-top: 6px!important;
  }

  .spacing {
    margin-top:100px;
  }
</style>
