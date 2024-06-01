<template>
  <div class="d-flex bd-highlight">
  <div class="me-auto bd-highlight align-self-center justify-content-center"><h1>Flavio Fiszman</h1></div>
  <div class="nav nav-pills justify-content-center align-self-center" id="v-pills-tab" role="tablist">
    <a class="nav-link show active ms-3" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">about</a>
    <a class="nav-link ms-3" id="v-pills-projects-tab" data-bs-toggle="pill" data-bs-target="#v-pills-projects" type="button" role="tab" aria-controls="v-pills-projects" aria-selected="false">projects</a>
    <a class="nav-link ms-3" id="v-pills-contact-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact" aria-selected="false">contact</a>
  </div>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><AboutTab/></div>
    <div class="tab-pane fade" id="v-pills-projects" role="tabpanel" aria-labelledby="v-pills-projects-tab"><ProjectsTab/></div>
    <div class="tab-pane fade" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab"><ContactTab/></div>
  </div>
</template>

<script>
import AboutTab from './AboutTab';
import ProjectsTab from './ProjectsTab';
import ContactTab from './ContactTab';
export default {
  name: 'MyTabs',
  components: {
    AboutTab,
    ProjectsTab,
    ContactTab
  }
};
</script>

<style scoped>
  .nav-link.active,
  .nav-link:hover,
  .nav-link:focus {
    background-color: purple!important;
    color: white!important;
  }
  .nav-link {
    color: purple;
    margin: 10px 0px;
  }

  .tab-content {
    margin-top:150px;
  }

  h1 {
    color:purple;
    margin-bottom: 0px;
  }

</style>