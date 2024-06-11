<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div v-show="showAlert" class="alert alert-success fade show position-absolute top-0 start-50 translate-middle-x" role="alert" ref="customAlert">
      <font-awesome-icon class="custom-alert-icon" icon="check" />Link copied to clipboard
  </div>


  <div class="container-fluid">
    <div class="row">
      <h3 class="col col-auto text-primary tab-title">
        Contact
      </h3>
    </div>
    <div class="row spacing">
      <div class="col col-md-2 col-3 text-primary">
        <strong>Email:</strong> 
      </div>
      <div class="col col-md-6 col-7">
        {{email}}
        <button type="button" class="btn btn-secondary same-line-button" @click="copyToClipboard">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
              </svg>
            </button>
      </div>
    </div>
    <div class="row">
      <div class="col col-2 text-primary">
        <strong>Socials:</strong>
      </div>
      <div class="col col-4">
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
  .same-line-button {
    margin-left: 15px;
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
