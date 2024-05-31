<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div v-show="showAlert" class="alert alert-success fade show position-absolute top-0 start-50 translate-middle-x" role="alert" ref="customAlert">
      <font-awesome-icon class="custom-alert-icon" icon="check" />Link copied to clipboard
  </div>

  <div class="ContactTab d-flex bd-highlight mb-3 justify-content-around first-row">
      <h1 class="p-2 bd-highlight"> contact </h1>
  </div>
  <div class="d-flex bd-highlight mb-3 justify-content-around">
    <div class=" p-2 bd-highlight">
      <b>email:</b> 
    </div>
    <div class=" p-2 bd-highlight">
      {{email}}
      <button type="button" class="btn btn-secondary" @click="copyToClipboard">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
            </svg>
          </button>
    </div>
  </div>
  <div class="d-flex bd-highlight mb-3 justify-content-around">
    <div class=" p-2 bd-highlight">
      <b>socials:</b>
    </div>
    <div class=" p-2 bd-highlight">
      <span class="social-button">
            <a href="https://www.google.com.br" class="fa fa-linkedin"></a>
          </span>
          <span class="social-button">
            <a href="https://www.google.com.br" class="fa fa-github"></a>
          </span>
    </div>
  </div>

  <div class="ContactTab">
    <h1>contact</h1>
    <table class="table table-borderless">
      <tbody>
        <tr>
          <td>
           <b>email:</b> 
         </td>
         <td>
          {{email}}
        </td>
        <td>
          <button type="button" class="btn btn-secondary" @click="copyToClipboard">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
            </svg>
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <b>socials:</b>
        </td>
        <td>
          <span class="social-button">
            <a href="https://www.google.com.br" class="fa fa-linkedin"></a>
          </span>
          <span class="social-button">
            <a href="https://www.google.com.br" class="fa fa-github"></a>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
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
<style scoped>

  h1 {
    margin-bottom: 50px;
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
</style>
