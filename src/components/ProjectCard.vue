<template>
  <div class="col card">
    <div class="card__content">
      <div class="card-header btn" data-bs-toggle="collapse" :data-bs-target="'#collapse' + id" aria-expanded="true" aria-controls="collapseOne" id="headingOne">
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
      </div>
      <div :id="'collapse' + id" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
          <div class="container">
            <div class="row">
              <div class="container">
                Role: Developer
              </div>
            </div>
          </div>
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
    id: String,
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

  .card {
    background-color: white;
    border-color:black;
  }

  .card-header {
    background-color: transparent;
    border: 0;
    padding: 20px;
  }

  .card-body {
    background-color: transparent;
    border: 0;
    padding: 20px;
  }

</style>