<template>
  <div class="aboutTab container-fluid">
    <div class="row">
      <div class="col col-12 col-md-6">
        <AboutExperience/>
        <div class="spacing"/>
        <AboutSkills/>
      </div>
      <div class="col col-12 col-md-6">
        <AboutEducation class="padding-education"/>
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
<style lang="scss" scoped>
  @import "custom.scss";
  .col {
    padding-left: 0px;
  }

  .padding-col {
    padding-left:70px;
  }

  .padding-education {
    padding-top: 100px;
  }
  @include media-breakpoint-between(md, lg) {
    .padding-education {
      padding-top: 0px;
    }
  }

  @include media-breakpoint-up(lg) {
    .padding-education {
      padding-top: 0px;
    }
  }

  .first-row {
    margin-bottom: 80px!important;
    margin-top: 6px!important;
  }

  .spacing {
    margin-top:100px;
  }
</style>
