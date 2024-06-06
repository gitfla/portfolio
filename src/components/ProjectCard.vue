<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="text-primary project-title"><strong>{{projectName}}</strong></div>
        <div class="project-brief">{{projectBrief}}</div>
      </div>
      <div class="col">
        <div v-for="(tag, index) in this.tags" :key="index" class="col text-secondary">
          #{{tag}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProjectsTab',
  props: {
    projectName: String,
    projectBrief: String,
    tags: [Array,String],
  },
}
</script>


<style scoped>
  .project-brief {
    text-align: left;

  }
  .project-title {
    text-align: left;
    font-size: 20px;
    margin-bottom:10px;
  }
</style>