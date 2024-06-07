<template>
  <h3 class="tab-title text-primary">Projects</h3>
  <div id="container">
    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3">

      <div v-for="project in projects" :key="project.id" class="alignment">
        <div class="col card">
          <div class="card-header btn" data-bs-toggle="collapse" :data-bs-target="'#collapse' + project.id" aria-expanded="true" aria-controls="collapseOne" id="headingOne">
            <ProjectCard 
              v-bind:projectName="project.name"
              v-bind:projectBrief="project.brief"
              v-bind:tags="project.tags"
            />
          </div>

          <div :id="'collapse' + project.id" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>

  </div>
</div>
</template>

<script>
  import ProjectCard from './ProjectCard';

export default {
  name: 'ProjectsTab',
  components: {
    ProjectCard
  },
  props: {
    msg: String
  },
  data () {
    return {
      projects: 
      [
        {
          id: 1,
          name: "Flip to Shhh",
          brief: "Android feature that allows users to silence notifications when flipping the device.",
          tags: ["android", "sensors"]
        },
        {
          id: 2,
          name: "Video Game Cockpit",
          brief: "Two-player game using arcade controls to immerse players in a singer's new album.",
          tags: ["touchdesigner", "sensors", "visualprogramming"]
        },
        {
          id: 3,
          name: "Video Game Cockpit",
          brief: "Two-player game using arcade controls to immerse players in a singer's new album.",
          tags: ["touchdesigner", "sensors", "visualprogramming"]
        },
        {
          id: 4,
          name: "Video Game Cockpit",
          brief: "Two-player game using arcade controls to immerse players in a singer's new album.",
          tags: ["touchdesigner", "sensors", "visualprogramming"]
        },
        {
          id: 5,
          name: "Video Game Cockpit",
          brief: "Two-player game using arcade controls to immerse players in a singer's new album.",
          tags: ["touchdesigner", "sensors", "visualprogramming"]
        },
        {
          id: 6,
          name: "Video Game Cockpit",
          brief: "Two-player game using arcade controls to immerse players in a singer's new album.",
          tags: ["touchdesigner", "sensors", "visualprogramming"]
        },
        {
          id: 7,
          name: "Video Game Cockpit",
          brief: "Two-player game using arcade controls to immerse players in a singer's new album.",
          tags: ["touchdesigner", "sensors", "visualprogramming"]
        },

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .alignment {
    align-items:start;
  }

  .tab-title {
    padding-left: 0px;
    font-size: 30px;
    margin-bottom: 30px;
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
.col {
  margin: 0px 30px;
}

.my-gap {
  gap: 20px;
}
h3 {
  margin: 0px 0 0;
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
</style>
