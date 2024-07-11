<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div v-show="showAlert" class="alert alert-success fade show position-absolute top-0 start-50 translate-middle-x" role="alert" ref="customAlert">
      <font-awesome-icon class="custom-alert-icon" icon="check" />Link copied to clipboard
  </div>

  <h3 class="tab-title text-primary">Contact</h3>
  <div class="d-flex flex-column">
    <div class="d-flex flex-sm-row flex-column justify-content-start align-items-sm-center line-padding">
      <div class="bd-highlight row-padding">
        <strong class="text-primary">Email:</strong>
      </div>

      <div class="d-flex mr-2 justify-content-start align-items-center extra-space extra-space-top">
        <div class="bd-highlight email-same-line">
          <div> {{email}}</div>
        </div>
        <button type="button" class="btn btn-secondary" @click="copyToClipboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                </svg>
              </button>
      </div>
    </div>
    <div class="d-flex flex-sm-row flex-column justify-content-start align-items-sm-center">
      <div class="bd-highlight row-padding text-primary">
        <strong>Socials:</strong>
      </div>
      <div class="bd-hightlight extra-space-top">
        <span class="social-button">
              <a href="https://www.linkedin.com/in/flavio-fiszman-2a39a7140" target="_blank" class="fa fa-linkedin"></a>
            </span>
            <span class="social-button">
              <a href="https://github.com/gitfla" target="_blank" class="fa fa-github"></a>
            </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'flaviofiszman@gmail.com',
      showAlert: false,
    };
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.email);
      console.log("starting timeout");
      this.showAlert = true;
      setTimeout(() => {
        //this.$refs["customAlert"].alert('close');
        this.showAlert = false;
        console.log("setting showalert to false");
      }, 3000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "custom.scss";
  .spacing {
    margin-bottom: 15px;
  }
  .col {
    padding-left: 0px;
  }
  .tab-title {
    padding-left: 0px;
    font-size: 30px;
    margin-bottom: 30px;
  }

  .email-same-line {
    margin-right: 15px;
  }

  .line-padding {
    padding-bottom:30px;
  }

  .extra-space-top {
    margin-top:10px;
  }
  @include media-breakpoint-between(sm, md) {
    .extra-space-top {
      margin-top:0px;
    }
  }

  @include media-breakpoint-up(md) {
    .extra-space-top {
      margin-top:0px;
    }
  }

  .extra-space {
    margin-left:0px;
  }
  @include media-breakpoint-between(sm, md) {
    .extra-space {
      margin-left:10px;
    }
  }

  @include media-breakpoint-up(md) {
    .extra-space {
      margin-left:10px;
    }
  }

  .table > tbody > tr > td {
     vertical-align: middle;
     padding-right: 30px;
     background-color:#fbf7f5;;
  }

  .custom-alert-icon{
    padding-right: 10px;
  }

  .social-button {
    padding-right:20px;
  }

  .tab-title {
    padding-left: 0px;
    font-size: 30px;
    margin-bottom: 30px;
  }

  .row-padding {
    padding-right: 60px;
  }
  @include media-breakpoint-between(md, lg) {
    .row-padding {
      padding-right: 100px;
    }
  }

  @include media-breakpoint-up(lg) {
    .row-padding {
      padding-right: 120px;
    }
  }

  .fa {
    padding: 13px;
    font-size: 24px;
    width: 49px;
    text-align: center;
    text-decoration: none;
    margin: 5px 2px;
    border-radius: 20%;
  }

  .fa-linkedin, .fa-github {
    background: #007bb5;
    color: white;
  }

  .alert {
    margin-top: 20px;
  }

  .fa {
    background-color: theme-color("secondary");
    color: theme-color("dark");
  }
</style>
