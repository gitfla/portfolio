import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/js/bootstrap';
import '../custom.scss';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCheck);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
