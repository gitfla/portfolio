<template>
  <h3 class="tab-title text-primary">Projects</h3>
  <div id="container">
    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3">
      <div v-for="project in projects" :key="project.id" class="alignment">
        <ProjectCard 
          v-bind:projectName="project.name"
          v-bind:projectBrief="project.brief"
          v-bind:tags="project.tags"
          v-bind:id="project.id"
        />
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
          name: "Flip to Shhh Digital Wellbeing",
          brief: "Android feature that allows users to silence notifications when flipping the device face-down on a surface.",
          tags: ["android", "sensors", "google"]
        },
        {
          id: 2,
          name: "Conversation Widget",
          brief: "Android widget that brings enhanced communication with a contact to the homescreen.",
          tags: ["android", "notifications", "widget", "google"]
        },
        {
          id: 3,
          name: "Search Engine Migration",
          brief: "Migration of Kaggle's Search engine from Azure Search to ElasticSearch and Kubernetes.",
          tags: ["elasticsearch", "kubernetes", "webdev", "cloud", "search"]
        },
        {
          id: 4,
          name: "User Accounts' Restructuring",
          brief: "Design and implementation of Kaggle's user accounts' journey, including creation, verification and deletion.",
          tags: ["webdev", "APIs", "SMSverification"]
        },
        {
          id: 5,
          name: "Airplane Cockpit Video Game",
          brief: "Two-player game using arcade controls to introduce players to a singer's new music.",
          tags: ["touchdesigner", "arduino", "sensors"]
        },
        {
          id: 6,
          name: "Heartbeat Installation",
          brief: "Interactive immersive installation that played music and lights based on users' heart rates.",
          tags: ["touchdesigner", "arduino", "sensors"]
        },
        {
          id: 7,
          name: "Serve",
          brief: "A website that simulates conversations between famous writers based on a common word that connects quotes from their books.",
          tags: ["webdev", "inforetrieval", "search"]
        },
        {
          id: 8,
          name: "Itaú Table",
          brief: "Interactive table installation that prompted WebSummit Rio's atendees' to discuss the topics of the day.",
          tags: ["touchdesigner", "arduino", "sensors"]
        },
        {
          id: 9,
          name: "GDPR Compliance",
          brief: "Front-end changes to make Kaggle GDPR compliant, including terms and conditions page and cookies aknowledgement.",
          tags: ["webdev", "communications", "legal"]
        },

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "custom.scss";

  .tab-title {
    padding-left: 0px;
    font-size: 30px;
    margin-bottom: 30px;
  }

  .alignment {
    align-items:start;
    margin: 40px 0px;
  }
  @include media-breakpoint-between(md, lg) {
    .alignment {
      padding: 0px 30px;
    }
    .alignment:nth-child(2n+1) {
      padding-left: 0px;
    }
    .alignment:nth-child(2n) {
      padding-right: 0px;
    }
  }

  @include media-breakpoint-up(lg) {
    .alignment {
      padding: 0px 30px;
    }
    .alignment:nth-child(3n+1) {
      padding-left: 0px;
    }
    .alignment:nth-child(3n) {
      padding-right: 0px;
    }
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
