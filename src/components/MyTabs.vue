<template>
  <div class="d-flex align-items-start tabs">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link show active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">about</button>
    <button class="nav-link" id="v-pills-projects-tab" data-bs-toggle="pill" data-bs-target="#v-pills-projects" type="button" role="tab" aria-controls="v-pills-projects" aria-selected="false">projects</button>
    <button class="nav-link" id="v-pills-contact-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact" aria-selected="false">contact</button>
  </div>
  <div class="tab-content w-100" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><AboutTab/></div>
    <div class="tab-pane fade" id="v-pills-projects" role="tabpanel" aria-labelledby="v-pills-projects-tab"><ProjectsTab/></div>
    <div class="tab-pane fade" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab"><ContactTab/></div>
  </div>
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

  .tabs {
    height: match-parent;
  }

</style>